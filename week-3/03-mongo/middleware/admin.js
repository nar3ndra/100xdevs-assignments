const {Admin} = require('../db')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userName = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: pasword
    }).then(data =>{
        if(data){
            next();
        }else{
            res.status(403).json({
                message: "Admin does not exist"
            })
        }
    })

}

const caller = async ()=>{
    let data = await Admin.findOne({username:"user1"})
    console.log(data)
    return;
}

caller();

module.exports = adminMiddleware;