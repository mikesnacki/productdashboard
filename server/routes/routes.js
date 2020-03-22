const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
let User = require("../models/user.model");
let Proj = require("../models/project.model");
let Stor = require("../models/user.model");

router.route("/api").get((req, res)=>{
    res.send("<h1>Route root</h1>");
});

router.route("/api/users").get((req, res)=>{
    User.find((err, users)=>{
        return err ? console.log(err) : res.json(users);
    });
});

router.route("/api/users/add").post((req, res)=>{
    let user = new User(req.body);

    user.save()
    .then(user=>{
        res.status(200).json({"user":`${user} added successfully`});
            
    }).catch(err=>{
        res.status(400).send(`error handling user, err ${err}`);
    });
});

router.route("/api/users/projects/add/:id").post((req, res)=>{
    let project = 
                new Proj ({
                    projectName: req.body.projectName,
                    projectDeleted: false,
                    projectStories:[]
                });

    User.findById(req.params.id, (err, user)=>{
        if (!user){
            res.status(404).send(`${user} is not found, error ${err}`);
        } else {
            user.userProjects.push(project);
            user.save()
                .then(user=>res.json(`project ${user} had a project added`))
                .catch(err=>(res.status(400).send(`Error ${err}`)));
            }
    });
});

router.route("/api/users/:uid/projects/:pid/edit").post((req, res)=>{
    User.findOneAndUpdate({"_id": req.params.uid, "userProjects._id":req.params.pid}, (err, project)=>{
        if (!project){
            res.status(404).send(`${project} not found, error ${error}`)
        } else {

            
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

router.route("/api/users/:userName/projects/:projectName/stories/add").get((req, res)=>{
    let userID = req.body.userID;
    let story = 
                new Stor ({
                    storyName: req.body.storyName,
                    storyPriority: req.body.storyPriority,
                    storyEstimate: req.body.storyEstimate,
                    storyUserDescription: req.body.storyUserDescription,
                    storyFunctionality: req.body.storyFunctionality,
                    storyBenefit: req.body.storyBenefit,
                    storyAcceptanceCriteriaBegin: req.body.storyAcceptanceCriteriaBegin,
                    storyAcceptanceCriteriaAction: req.body.storyAcceptanceCriteriaAction,
                    storyAcceptanceCriteriaOutcome: req.body.storyAcceptanceCriteriaOutcome,
                });

    User.findById(userID, (err, user)=>{
        if (!user){
            res.status(404).send(`${user} is not found, error ${err}`);
        } else {
            console.log(user.userProjects.findOne({projectName:req.params.projectName}));
            return;
            }
    });

});

router.route("/api/users/projects/stories/edit/:id").post((req, res)=>{
    // User.findById(req.params.id, (err, user)=>{
    //     if (!user){
    //         res.status(404).send(`${user} is not found, error ${err}`);
    //     } else {
    //         story.storyPriority = req.body.storyPriority,
    //         story.storyEstimate =  req.body.storyPriority,
    //         story.storyUserDescription = req.body.storyPriority,
    //         story.storyFunctionality =  req.body.storyPriority,
    //         story.storyBenefit = req.body.storyBenefit,
    //         story.storyAcceptanceCriteriaBegin = req.body.storyAcceptanceCriteriaBegin,
    //         story.storyAcceptanceCriteriaAction = req.body.storyAcceptanceCriteriaAction,
    //         story.storyAcceptanceCriteriaOutcome = req.body.storyAcceptanceCriteriaOutcome,
    //         story.storyStatus = req.body.storyStatus
    //     }
    // });

    User.findOneAndUpdate({

    })


});

module.exports = router;