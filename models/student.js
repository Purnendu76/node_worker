const mongoose=require('mongoose');
const studentSchema= new mongoose.Schema({
name:{
    type:String,
    require:true
},
id:{
    type:Number,
},
department:{
    type:String,
  enum:['BCA','BBA','MCA','MBA']
},
age:{
    type:Number,
    
},
email:{
    // unique:true,
    // require:true
},
number:{
    type:Number,
    unique:true
},

});
//student model
const student=mongoose.model('student',studentSchema);
module.exports=student;