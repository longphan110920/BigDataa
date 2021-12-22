const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

const todoRoutes = require('./routes/Todo');

mongoose.Promise = global.Promise;

//Connect MongoDB at default port 27017.
mongoose.connect(
    "mongodb://localhost:27017/todoapp", {
        useNewUrlParser: true,
        //useCreateIndex: true,
    }, 
    (err) => {
        if (!err){
            console.log("Connect DB Succeeded.");
        } else {
            console.log("Error in Connection: " + err);
        }
    }
);


app.use(cors());
app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});