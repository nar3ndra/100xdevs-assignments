const { string } = require('mathjs');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://user1:Vwx%4012345@cluster0.bovykzl.mongodb.net/assignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    adminName: String,
    email: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
});


const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseName: String,
    courseCode: String,
    description: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}