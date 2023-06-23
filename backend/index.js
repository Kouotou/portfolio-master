const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGO_DB_CONFIG = require("./config/app.config");
const cors = require('cors');


//connection to mongodb

//the errorr here was tha a linking problem occured with the MONGO_DB_CONFIG
mongoose.connect("mongodb+srv://kouotouahmad:2SXYkaV7jkMfBGwh@portfoliocluster.nfopncq.mongodb.net/PortfolioBackendProject?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
        console.log('Connection to mongodb Successfully established');
}).catch((error) => {
        console.log('Error connecting to mongodb:', error);
});

//Enable cors
app.use(cors());

//Middleware to parse JSON data
app.use(express.json()); 

//define a routee and fetch the data
app.use("/api", require("./router/app.route"));

//start server
app.listen(8000, ()=>{
    console.log("Server started on port 8000");
});
