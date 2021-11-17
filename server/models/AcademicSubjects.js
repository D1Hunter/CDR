const {Schema, model} = require('mongoose');

const AcademicSubjects = new Schema({
    subject:{type:String,required:true,unique:true},
    semestr:{type: Number, required:true},
    formcontrol:{type:String,required:true},
    credits:{type:Number,required:true}
})

module.exports = model('AcademicSubjects', AcademicSubjects)