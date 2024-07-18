nst express = require('express');
const app = express();
const zod = require("zod");
const mongoose = require("mongoose");
const port = 3000;
app.use(express.json());

app.post("/hashData",zodCheck, (res, req) => {

    res.json({
        msg: "done"
    })
})
// Zod check config funtion from the postman

function zodCheck(res, req, next) {

    const email = req.headers.email;
    const password = req.headers.username;
    const emailSchema = zod.string().email();
    const passwordSchema = zod.string().min(10);
    const responseEmail = emailSchema.safeParse(email);
    const responsePassword = passwordSchema.safeParse(password);
    if (!responseEmail.success || !responsePassword.success) {
        res.status(411).json({
            mgs: "invalid input"
        })
        return;
    } else {
        next();
    }
}   
