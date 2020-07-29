const express=require('express');
const app=express();
const port=8000;
const upload= require("express-fileupload");
app.use(upload());


app.get('/', function(req,res){
  res.sendFile(__dirname+ "/index.html");
});

app.post('/',function(req,res){
  if(req.files){
    var file=req.files.filename;
       filename=file.name;
       file.mv("./uploads/"+filename, function(err){
         if(err){
           console.log(err);
           return res.send("error in uploading file");
         }
         res.send("Done");
       })
  } 
})

app.get('/view_file', function(req,res){
  if(req.files){
    console.log(req.files.data);
  }
})


app.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("server is running on port:", port);
});
