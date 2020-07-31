const express=require('express');
const db = require('./config/mongoose');
const expressLayout = require("express-ejs-layouts");
const port=8000;
// for setting the path of views we need to require path
const path= require('path');
const app=express();

const upload= require("express-fileupload");
app.use(upload());


//middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware to access static files
app.use(express.static('./assets'));

app.use('/uploads', express.static(__dirname + "/uploads"));

//set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');


//use express layouts
app.use(expressLayout);

app.use("/", require('./routes'));

app.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("server is running on port:", port);
});
