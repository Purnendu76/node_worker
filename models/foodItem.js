
const mongoose= require('mongoose');
const foodItemSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        is_expire:{
            type:Boolean,
            required:true
        }  
})

const foodiItem= mongoose.model('/fooditem',foodItemSchema);
module.exports=foodiItem;