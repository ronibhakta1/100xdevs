const express = require('express');
const app = express();
const zod = require("zod");
const mongoose = require("mongoose");
const port = 3000;
const bcrypt = require("bcrypt");
// mongogdp config 

mongoose.connect("",{connectTimeoutMS: 30000});
//mongo db database congif info 

const user = mongoose.model(
    'users',{
        email:String,
        password:String
    }
)
app.use(express.json());

app.post("/hashData",zodCheck, async (req , res) => {
    const email= req.headers.email;
    const password = req.headers.password;
    let existUser = await user.findOne({email: email})
    if(existUser){
        res.json({
            msg:"user already exist!"
        })
    } else{
        try {
            bcrypt.hash(password,11,async (err,hash)=>{
                if(err) throw err;
                await user.create({email, password : hash});
                res.json({
                    msg: "User created successfully "
                })
            })
            
        } catch (error) {
            res.status(400).json({
                msg:"error occured while uploading data to database"
            });
        }
    }
    
})
// Zod check config funtion from the postman


function zodCheck(req,res, next) {

    const email = req.headers.email;
    const password = req.headers.password;
    const emailSchema = zod.string().email();
    const passwordSchema = zod.string().min(10);
    const responseEmail = emailSchema.safeParse(email);
    const responsePassword = passwordSchema.safeParse(password);
    if (!responseEmail.success || !responsePassword.success) {
        return res.status(411).json({
            mgs: "invalid input"
        })
    } else {
        next();
    }
}   

app.post("/verifyUser",async (req,res)=>{
    const email= req.headers.email;
    const password = req.headers.password;
    let userVerify = await user.findOne({email:email});
    // console.log(userVerify);
    if (!userVerify) {
        res.status(401).json({
            msg:"user doesn't exist !!"
        })
    } else {
        try {
            bcrypt.hash(password,10,(err,hash)=>{
                if (err) throw err;
                bcrypt.compare(password,hash,(err,result)=>{
                    if (err) throw err;
                    res.json({
                        msg:"Login successfull !!"
                    })
                })
            })
            
        } catch (error) {
            res.status(400).json({
                msg:"Wrong data inputs !!"
            });
        }
    }
})

app.use((err, req, res, next)=>{
    res.json({
        msg:"Sorry something is up with the server in the backend !!"
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

