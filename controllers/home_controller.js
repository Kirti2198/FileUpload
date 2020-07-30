const express= require('express');
const upload= require("express-fileupload");
const File = require('../models/file');

// const File = require('../')

module.exports.home= function(req,res){
  // console.log("home ")
 
    const file = File.find({});
    console.log(file);
   return res.render('home',{

   });
  // res.sendFile(__dirname+ "/index.html");
};

module.exports.upload=function(req,res){
  if(req.files){
    var file=req.files.filename;
       filename=file.name;
       file.mv("./uploads/"+filename, function(err){
         if(err){
           console.log(err);
           return res.send("error in uploading file");
         }
         console.log(req.files);
         //iski jagah home render ker do aur message me upload 
         return res.render('home',{
           message: "file uploded successfully"
         });
       })
  } 
} 

module.exports.getAllFiles = function(req,res){
    let files = File.find({});

    console.log(files);
return  res.render('file',{
  files
});
}