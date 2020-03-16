const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
let User = require("../models/user.model");
let Proj = require("../models/project.model");

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

router.route("/api/users/:id/projects/add").post((req, res)=>{
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
        console.log(user.userProjects);
    });
});

module.exports = router;