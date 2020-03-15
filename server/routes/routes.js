const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
let User = require("../models/user.model")

router.route("/").get((req, res)=>{
    res.send("<h1>Route root</h1>")
})

router.route("/api/users/add").post((req, resp)=>{
    let user = new User(req.body)

    user.save()
    .then(user=>{
        res.status(200).json({"user":`${user} added successfully`})
            
    }).catch(err=>{
        res.status(400).send(`error handling user, err ${err}`)
    })
})

router.route("/api/users").get((req, res)=>{
    User.find((err, users)=>{
        return err ? console.log(err) : res.json(users)
    })
})


module.exports = router;