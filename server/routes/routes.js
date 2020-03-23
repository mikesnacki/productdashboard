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

router.route("/api/users").get((req, res)=>{
    Project.find((err, users)=>{
        return err ? console.log(err) : res.json(users);
    });
});

router.route("/api/users/projects/addproject").post((req, res)=>{
    console.log(req.body)
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

router.route("/api/users/projects/:pid/addstory").post((req, res)=>{
    console.log(req.body)
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

    // project.save()
    // .then(project=>{
    //     res.status(200).json({"project": `${project} added successfully`})
    // })
    // .catch(err=>{
    //     res.status(400).send(`Error adding project, error ${err}`)
    // })
});

// router.route("/api/users/projects/edit/:pid").post((req, res)=>{
//     const proj = User.findOne({"userProjects._id":req.params.pid})
//     console.log(proj)

// });

// router.route("/api/users/:userName/projects/:projectName/stories/add").get((req, res)=>{
//     let userID = req.body.userID;
//     let story = 
//                 new Stor ({
//                     storyName: req.body.storyName,
//                     storyPriority: req.body.storyPriority,
//                     storyEstimate: req.body.storyEstimate,
//                     storyUserDescription: req.body.storyUserDescription,
//                     storyFunctionality: req.body.storyFunctionality,
//                     storyBenefit: req.body.storyBenefit,
//                     storyAcceptanceCriteriaBegin: req.body.storyAcceptanceCriteriaBegin,
//                     storyAcceptanceCriteriaAction: req.body.storyAcceptanceCriteriaAction,
//                     storyAcceptanceCriteriaOutcome: req.body.storyAcceptanceCriteriaOutcome,
//                 });

//     User.findById(userID, (err, user)=>{
//         if (!user){
//             res.status(404).send(`${user} is not found, error ${err}`);
//         } else {
//             console.log(user.userProjects.findOne({projectName:req.params.projectName}));
//             return;
//             }
//     });

// });

module.exports = router;