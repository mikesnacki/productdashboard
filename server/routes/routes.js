const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
let Project = require("../models/user.model");
let Story = require("../models/story.model");

router.route("/api").get((req, res)=>{
    res.send("<h1>Route root</h1>");
});

router.route("/api/projects").get((req, res)=>{
    Project.find((err, users)=>{
        return err ? console.log(err) : res.json(users);
    });
});

router.route("/api/projects/addproject").post((req, res)=>{
    let project = new Project ({
                    userName: req.body.userName,
                    projectName: req.body.projectName
                });

    project.save()
    .then(project=>{
        res.status(200).json({"project": `${project} added successfully`})
    })
    .catch(err=>{
        res.status(400).send(`Error adding project, error ${err}`)
    })
});

router.route("/api/projects/:pid/editproject").post((req, res)=>{
    Project.findById(req.params.pid, (err, project)=>{
        if (!err) {
            project.userName = req.body.userName;
            project.userDeleted = req.body.userDeleted;
            project.projectName = req.body.projectName;
            project.projectDeleted = req.body.projectDeleted;
            project.save()
            .then(project=>{
                res.status(200).json({"project": `${project} edited successfully`})
            })
            .catch(err=>{
                res.status(400).send(`Error editing project, error ${err}`)
            })
        } else {
            res.status(404).send(`Error editing project, error ${err}`)
        }
    });
})

router.route("/api/projects/:pid/deleteproject").post((req, res)=>{
    Project.findById(req.params.pid, (err, project)=>{
        if (!err) {
            project.userName = req.body.userName;
            project.userDeleted = req.body.userDeleted;
            project.projectName = req.body.projectName;
            project.projectDeleted = true;
            project.save()
            .then(project=>{
                res.status(200).json({"project": `${project} edited successfully`})
            })
            .catch(err=>{
                res.status(400).send(`Error editing project, error ${err}`)
            })
        } else {
            res.status(404).send(`Error editing project, error ${err}`)
        }
    });
})

router.route("/api/projects/:pid/addstory").post((req, res)=>{
    let story = new Story ({
                    storyName: req.body.storyName,
                    storyPriority: req.body.storyPriority,
                    storyEstimate: req.body.storyEstimate,
                    storyUserDescription: req.body.storyUserDescription,
                    storyFunctionality: req.body.storyFunctionality,
                    storyBenefit: req.body.storyBenefit,
                    storyAcceptanceCriteriaBegin: req.body.storyAcceptanceCriteriaBegin,
                    storyAcceptanceCriteriaAction: req.body.storyAcceptanceCriteriaAction,
                    storyAcceptanceCriteriaOutcome: req.body.storyAcceptanceCriteriaOutcome,
                    storyStatus: req.body.storyStatus,
                });

    Project.findById(req.params.pid, (err, project)=>{
        if (!project){
            res.status(404).send(`Project ${project} not found, error ${err}`)
        } else {
            project.projectStories.push(story)
            project.save()
            res.status(200).send(`project ${project} sent successfully`)
        }
    })
});

router.route("/api/projects/:pid/editstory/:sid").post((req, res)=>{
    Project.findById(req.params.pid, (err, project)=>{
        if (!project) {
            res.status(404).send(`Project is not found! error: ${err}`)
        } else {
        story = project.projectStories.id(req.params.sid)
        story.storyName = req.body.storyName
        story.storyPriority = req.body.storyPriority
        story.storyEstimate = req.body.storyEstimate
        story.storyUserDescription = req.body.storyUserDescription
        story.storyFunctionality = req.body.storyFunctionality
        story.storyBenefit = req.body.storyBenefit
        story.storyAcceptanceCriteriaBegin = req.body.storyAcceptanceCriteriaBegin
        story.storyAcceptanceCriteriaAction = req.body.storyAcceptanceCriteriaAction
        story.storyAcceptanceCriteriaOutcome = req.body.storyAcceptanceCriteriaOutcome
        story.storyStatus = req.body.storyStatus
        project.save()
        .then(project=>{
            res.json(`Property ${project} updated`)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).send(`Error ${err}`)
        })
        }
    })
});

router.route("/api/projects/:pid/deletestory/:sid").post((req, res)=>{
    Project.findById(req.params.pid, (err, project)=>{
        if (!project) {
            res.status(404).send(`Project is not found! error: ${err}`)
        } else {
        story = project.projectStories.id(req.params.sid)
        story.storyName = req.body.storyName
        story.storyPriority = req.body.storyPriority
        story.storyEstimate = req.body.storyEstimate
        story.storyUserDescription = req.body.storyUserDescription
        story.storyFunctionality = req.body.storyFunctionality
        story.storyBenefit = req.body.storyBenefit
        story.storyAcceptanceCriteriaBegin = req.body.storyAcceptanceCriteriaBegin
        story.storyAcceptanceCriteriaAction = req.body.storyAcceptanceCriteriaAction
        story.storyAcceptanceCriteriaOutcome = req.body.storyAcceptanceCriteriaOutcome
        story.storyStatus = "Dead"
        story.storyDeleted = 1
        project.save()
        .then(project=>{
            res.json(`Property ${project} updated`)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).send(`Error ${err}`)
        })
        }
    })
});

module.exports = router;