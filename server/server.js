require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = process.env.MONGODB_URI;
const cors = require("cors");
const path = require("path");
const app = express();
const routes = require("./routes/routes.js");

mongoose.connect(db,{
            useNewUrlParser: true
        }).then(()=>console.log("Mongo connected"))
        .catch(err=>console.log(err));

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log("Server is running on Port: " + PORT);
});