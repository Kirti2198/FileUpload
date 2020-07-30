const mongoose=require('mongoose');
const path=require('path');

const fileSchema= new mongoose.Schema({
  path:{
    type:String
  },
  filename:{
    type: String
  },
  originalname:{
    type: String
  }
},{
  timestamps: true
});

const File= mongoose.model('File', fileSchema);
module.exports= File;