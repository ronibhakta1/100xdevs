const jwt = require("jsonwebtoken");
// const express = require("express");
// const app = express();
const port = 3000;
const jwtPassword = "#efwefwe342543"
const zod = require("zod");
// app.use(express.json());

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponce = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponce.success){
        return null;
    }else{
        const signature = jwt.sign(username,jwtPassword)
        return signature;
    }
}

const out =signJwt("ronigmail.com", "6hdfsgdgd");
console.log(out)
// app.listen(port);

// Here we have created an funtion which creates a jwt token using jsonwebtoken, and a zod lib to check wheather the user is giving us the right inputs 
//after that we have successfully created a jwt token using the key and the inputs

function decodeJwt(token)