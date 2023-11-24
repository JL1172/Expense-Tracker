const express = require("express");
const AuthRouter = require("../api/auth/auth-router");
const path = require("path")

//import middleware
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
//import middleware

//instantiation
const server = express();
//instantiation

//deployment usages
server.use(express.json());
server.use(cors());
server.use(helmet());
//deployment usages

//dev usages
server.use(morgan("dev"));
//dev usages

//TODO 
//send a built front end
//TODO 

//routers
server.use("/api/auth",AuthRouter); 
//routers

server.get("*",(req,res,next) => {
    next({status : 404, message : "not found"});
})

server.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        message : error.message,
        stack : error.stack,
    })
})

module.exports = server;