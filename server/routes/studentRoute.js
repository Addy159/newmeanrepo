const express = require('express');
const router = express.Router();
const Student = require('../models/student');

//get all students
router.get('/students', (req, res)=>{
    Student.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})



//get single student detail
router.get('/students/:id',(req,res)=>{
    Student.findById(req.params.id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})


//create students
router.post('/students',(req, res)=>{
    var student = new Student({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        telephone: req.body.telephone
    })

   student.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//edit student
router.patch('/students/:id',(req,res)=>{
    var id = req.params.id
    var data = req.body
    Student.findByIdAndUpdate(id,data)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})


//delete student
router.delete('/students/:id', (req, res)=>{
    var id = req.params.id
    Student.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).json({
            message: `student with id '${id}' deleted successfully`
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})


module.exports = router