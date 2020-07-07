const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require("express");
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//routes

//static files

//start server

app.listen(3001, () =>{
    console.log("server on port 3001");
});