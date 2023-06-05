const dotenv =require("dotenv").config();
const express =require("express");
const mongoose =require("mongoose");
const bodyparser =require("body-parser");
const cors =require("cors");

const app = express()

const PORT=process.env.PORT||5000;

// connect to mongodb and start server
const express = require('express')

const dbUri = process.env.MONGODB_URI;

console.log('MongoDB Atlas connection string:', dbUri);

// Rest of your server code goes here...

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});


mongoose
.connect (process.env.MONGO_URI)
.then(()  => {

    app.listen(PORT,() => {
        console.log('server running on port ${PORT}');
    });
} )  
.catch((err) => console.log(err));
