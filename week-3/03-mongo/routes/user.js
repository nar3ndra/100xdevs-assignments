const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin,User,Course} = require("../db")
// User Routes
const express = require('express')

router.post('/signup', async (req, res) => {
    // Implement user signup logic
   
   try{ 
    const user = findOne(req.body.username)
    if(user){
        return res.status(404).json({
            error: "User already existas"
        })
    }
    
    const response = await User.create({
        username: req.body.username,
        password: req.body.password

    })
    console.log("User saved Sucessfully.")
    console.log(response)
}catch(err){
    res.status(404).json({
        message: "user not saved in database"
    })
}
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        const data = await Course.find({});
        
        res.json({courses: data});
        
    }catch(err){
        res.status(404).json({
            message: "Error fetching courses"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router