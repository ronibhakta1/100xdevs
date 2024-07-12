const mongoose = require("mongoose");
const { string } = require("zod");
const port = 3000;
const express = require('express');
const app = express();
// connection made using the cluster in compass on mongodb site to mongodb compass

mongoose.connect("<use the token>",);
// if i keep the token its getting exposed on git hub repos so while using it just add it and then delete

// in the URL ending we have declared the database name after the / where it ends the url

app.use(express.json());

// table schema is created here
const User = mongoose.model('users', {
    name: String,
    email: String,
    password: String
});


//route to fetch the data from the frontend 

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existuser = await User.findOne({ email: username });
    //CURD = Create,Update,Read,delete
    if (existuser) {
        console.log(existuser);
        return res.status(400).send({
            msg: "User already exists"
        })
    }

    // await User.create({ name, email: username, password });
    // // data data sent to the table 
    // const user = new User({
    //     name: name,
    //     email: username,
    //     password: password
    // });
    // if (username != existuser.email) {
    //     // push the data to the database through the link present in the mongoose connect
    //     user.save().then(() => console.log('pushed successfully'));
    //     return
    // res.json({
    //     msg: "User created"
    // });

})
//global catches (Exeptions)
// app.use((err, req, res, next)=>{
//     errorCount++;
//     // when error counts gets increased we can store the log error eceptions and store it and send to resolve it and solve the expetions 
//     res.json({
//         msg:"sorry something is wrong with our server right now"
//     })
// })

app.listen(port);



