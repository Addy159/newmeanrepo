const mongoose = require('mongoose');
// const Student = require('../models/student');

// Define structure of the documents that are gonna be stored in a collection
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    AccountNumber: Number,
    Bank : String,
    Branch : String,
    AccountType : String,
    Status : String, 
    StudentID : {type : Schema.Types.ObjectId, ref: 'Student'}
});

// Compile model from schema
const account = mongoose.model('Accounts', accountsSchema );
module.exports = account;