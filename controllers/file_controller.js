const express= require('express');
const csv = require('csvtojson');
const fs = require('fs');
const upload= require("express-fileupload");
const File = require('../models/file');
const path = require('path');


module.exports.upload= async function(req,res){
  try{
    //if req has files in it
    if(req.files){
      //getting the file name from original file
      var file=req.files.filename;
         filename=file.name;
  
         await file.mv("./uploads/"+filename);
            //creating file in db
            await File.create({
  
                  path:"/uploads/"+filename,
                  filename:filename,
            });
          }
          //TODO ::this is not sending msg to home while rendering
           return res.render('home',{
             title:"Home Page",
             message: "file uploaded successfully"
           });
  }catch(err){
            return res.render('home',{
              //this is sill not working 
              message:"file upload failed!!"
            })
  } 
  }
  // to get all files view
  module.exports.getAllFiles = async function(req,res){
    try{
  
      //wait till all files are in files variable 
      //before it was not waiting for it to complete 
      let files = await File.find({});
  
      
        return  res.render('file',{
               files :files
  });
    }catch(err){
      return console.log("Error");
    }
      
  }
  
  // to fetch the selected csv file
  
  module.exports.openFile = async function (req, res) {
    try {
        let file = await File.findById(req.params.id);
        let csvFilePath = path.join(__dirname, '../', 'uploads/', file.filename);
  
        //csv to json
        const jsonArray = await csv().fromFile(csvFilePath);
  
        return res.render('display', {
            path: 'Display Files',
            title: 'display',
            name: file.name,
            jsonArray
        });
    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
  }