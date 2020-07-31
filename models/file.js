const mongoose=require('mongoose');
const path=require('path');

const fileSchema= new mongoose.Schema({
  path:{
    type:String,
    required:true
  },
  filename:{
    type: String,
    required:true

  },
},{
  timestamps: true
});



const File= mongoose.model('File', fileSchema);
module.exports= File;