const express = require('express');
const router = express.Router();
const Accounts = require('../models/accounts');
const ObjectId = require("mongoose").Types.ObjectId;

router.get('/accounts',async (req, res)=>{
    try{
        let allAccounts = await Accounts.find()
        res.send(allAccounts)
    }
    catch(err){
        console.log(err)
    }
})

//get account information for student
router.get('/accounts/:StudentID', async (req, res)=>{
    let id = req.params.StudentID
    try{
        let account = await Accounts.findOne({StudentID : id})
        res.send(account)
    }
    catch(err){
        console.log(err)
    }
})

//post student account information
router.post('/accounts',(req, res)=>{
    var accounts = new Accounts({
        AccountNumber: req.body.accountNumber,
        Bank : req.body.bank,
        Branch : req.body.branch,
        AccountType : req.body.accountType,
        Status : req.body.status, 
        StudentID : req.body.studentId
    })

    accounts.StudentID = new ObjectId(accounts.StudentID)
    accounts.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})


module.exports = router