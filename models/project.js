const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
 
    //title, description,imagePath, link,technologies, dateCreated

    title:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required:true
    },

    link:{
        type:String
    },

    technologies:{
        type:[String]
    },

    imagePath:{
        type:String,
        default : "default.jpg"
    },

    dateCreated:{
        type:Date,
        default: Date.now()
    },
    type:{
        type:String,
        required:true
    }

    


});


const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;