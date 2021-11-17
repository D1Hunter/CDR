const {Schema, model} = require('mongoose');

const Group = new Schema({
    groupnumber:{type:String, unique:true, required: true},
    curriculum:[{type:Schema.Types.ObjectId, ref:"AcademicSubject"}]
})

module.exports = model('Group', Group);