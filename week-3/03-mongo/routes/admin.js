const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require('../db')
const {User} = require('../db')
const {Course} = require('../db')
const express = require('express')
express.use(express.json())
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{
        const user = findOne(req.body.username)
    if(user){
        return res.status(404).json({
            error: "User already existas"
        })
    }
        Admin.create({
            username:req.body.username,
            password:req.body.password}).then(()=>{
            res.json({
                message:"Admin saved sucessfully"
            })
        })
    }catch(err){
        res.status(404).json({
            message: "Admin not saved to Database"
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try{
        const response = await Course.create({
            title: req.body.title, 
            description: req.body.description, 
            price: req.body.price, 
            imageLink: req.body.imageLink 
       })
       res.json({
        message: "Couse is saved sucessfully",
        data: response
       })
       

    }catch(err){
        res.status(404).json({
            message: "Course Not saved in Database"
        })
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const results = await Course.find({});
        res.json({
            data: results
        })

    }catch(err){
        res.status(404).json({
            message:"Error fetching courses"
        })
    }

});

module.exports = router;