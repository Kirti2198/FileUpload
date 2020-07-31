const express= require('express');
// const csv = require('csvtojson');
// const fs = require('fs');
// const upload= require("express-fileupload");
const File = require('../models/file');
const path = require('path');

// const File = require('../')

module.exports.home= function(req,res){
  // console.log("home ")
 
    const file = File.find({});
    // console.log(file);
   return res.render('home',{

   });
  // res.sendFile(__dirname+ "/index.html");
};



