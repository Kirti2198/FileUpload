const express=require('express');
const db = require('./config/mongoose');
const port=8000;
// for setting the path of views we need to require path
const path= require('path');
const app=express();

const upload= require("express-fileupload");
app.use(upload());


//middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + "/uploads"));

//set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');




app.use("/", require('./routes'));

app.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("server is running on port:", port);
});
