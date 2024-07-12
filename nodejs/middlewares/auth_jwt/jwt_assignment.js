const jwt = require("jsonwebtoken");
// const express = require("express");
// const app = express();
const port = 3000;
const jwtPassword = "#efwefwe342543"
const zod = require("zod");
// app.use(express.json());

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponce = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponce.success) {
        return null;
    } else {
        const signature = jwt.sign(username, jwtPassword)
        return signature;
    }
}

const out = signJwt("roni@gmail.com", "6hdfsgdgd");
if (out == !null) {
    console.log("Token = " + out);
} else {
    console.log("Token status = " + out);
}


// app.listen(port);

// Here we have created an funtion which creates a jwt token using jsonwebtoken, and a zod lib to check wheather the user is giving us the right inputs 
//after that we have successfully created a jwt token using the key and the inputs

function decodeJwt(token) {
    const decode = jwt.decode(token);
    // console.log(decode);
    if (decode) {
        return true;
    } else {
        return false;
    }
}

const decodeStatus = decodeJwt(out);
console.log("decode status = " + decodeStatus);

// here we decoded the jwt token

// this logic works if the token is correct, if the token gets wrong it throws an execption

// function verifyJwt(token1){
//     const verified = jwt.verify(token1, jwtPassword);
//     console.log(verified);
//     if (verified) {
//         return true;
//     }else{
//         return false;
//     }
// }

// const verifyStatus = verifyJwt(out);
// console.log(verifyStatus);

// to overcome this we use try catch 

function verifyJwt(token1) {

    try {
        const verified = jwt.verify(token1, jwtPassword);
        // console.log(verified);
        return true;
    } catch (error){
        return false;
    }
}

const verifyStatus = verifyJwt(out);
console.log("verify status = " + verifyStatus);