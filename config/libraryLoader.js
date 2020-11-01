const express = require("express");
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const mongoose =  require("mongoose");
const cors = require("cors");
const session  = require("express-session");
const projectRoutes = require("../routes/project.js");

const loader = 
{
    express,
    bodyParser,
    fileUpload,
    mongoose,
    cors,
    session,
    projectRoutes
}

module.exports = loader;