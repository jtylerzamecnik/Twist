const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Student = new mongoose.Schema({
  lastName: {type:String, trim:true, required:true, default:''},
  firstName: {type:String, trim:true, required:true, default:''},
  address: {type:String, trim: true, default:''},
  school: [{type: Schema.Types.ObjectId, ref: 'School'}],
  counselor: [{type: Schema.Types.ObjectId, ref: 'Counselor'}],
  email: {type:String, trim:true, required:true, default:''},
  timeStamp: {type: Date, trim: true, required: true, default:Date.now},
  participantType: {type:String, trim:true, default:''},
  choice1: {type:String, trim:true, default:''},
  choice2: {type:String, trim:true, default:''},
  choice3: {type:String, trim:true, default:''},
  choice4: {type:String, trim:true, default:''},
  choice5: {type:String, trim:true, default:''},
})

// Virtual for Participant's proper name
Student
.virtual('properName')
.get(function (){
  return this.lastName + ', ' + this.firstName;
});

// Virtual for Participant's full name
Student
.virtual('properName')
.get(function (){
  return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model('Student', Student)