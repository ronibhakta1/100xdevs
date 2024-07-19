const express = require("express");
const app = express();
const zod = require("zod");
const mongoose = require("mongoose");
const port = 3000;
const crypto = require("crypto");
const encryptionSecretKey = "fx505Dt#!?rb";

app.use(express.json());

mongoose.connect("", { connectTimeoutMS: 50000 });
const userCrypto = mongoose.model('Users', {
    email: String,
    password: String
})
app.post("/createUserCryptoHash", zodCheck, async (req, res) => {
    const email = req.headers.email;
    const password = req.headers.password;
    let userExist = await userCrypto.findOne({ email: email });
    if (userExist) {
        return res.status(401).json({
            msg: "User already exist in the database!!"
        })
    } else {
        try {
            // Encryption of the password using crypto hash !!
            const cipher = crypto.createCipher('aes-256-cbc', encryptionSecretKey);
            let encryptedData = cipher.update(password, 'utf-8', 'hex');
            encryptedData += cipher.final('hex');
            console.log(encryptedData);
            await userCrypto.create({ email, password: encryptedData });
            res.json({
                msg: "User created successfully!!"
            })
        } catch (error) {
            res.status(401).json({
                msg: "Problem occured while uploading the data to database!!"
            })
        }
    }

});

app.post("/verifyCryptoHash", async (req, res) => {
    const email = req.headers.email;
    const password = req.headers.password;
    let userVerify = await userCrypto.findOne({ email: email });
    if (!userVerify) {
        res.status(401).json({
            msg: "User deosn't exist!!"
        })
    } else {
        try {
            // Decryption
            const decipher = crypto.createDecipher('aes-256-cbc', encryptionSecretKey);
            let decryptedData = decipher.update(userVerify.password, 'hex', 'utf-8');
            decryptedData += decipher.final('utf-8');
            // console.log('Decrypted Data:', decryptedData);
            if (decryptedData === password) {
                return res.json({
                    msg: "user logged in successfully!!"
                })
            }
        } catch (error) {
            res.status(401).json({
                msg: " Invalid inputs!!"
            });
        }
    }
})

function zodCheck(req, res, next) {
    const email = req.headers.email;
    const password = req.headers.password;
    const emailSchema = zod.string().email();
    const passwordSchema = zod.string().min(8);
    const emailResponse = emailSchema.safeParse(email);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!emailResponse.success || !passwordResponse.success) {
        return res.status(401).json({
            mgs: "Invalid input!!"
        })
    } else {
        next();
    }
}

app.use((err, req, res, next) => {
    res.json("Sorry something is up with the server!!");
})

app.listen(port);