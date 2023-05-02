// DEPENDENCIES
require("dotenv").config();
require('./config/db.connection')
const express = require("express");
const peopleRouter = require('./routes/people-router')


// CONFIGURATION
const app = express();
const cors = require("cors")
const morgan = require("morgan")

const { PORT } = process.env;

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// ROUTER MIDDLEWARE
app.use('/people', peopleRouter)


// ROUTES
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

