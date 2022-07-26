const mongoose = require('mongoose');

// Define structure of the documents that are gonna be stored in a collection
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    telephone: Number
});

// Compile model from schema
const Student = mongoose.model('Student', studentSchema );
module.exports = Student;