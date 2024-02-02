const express = require("express");
const port = 3000;
const app =express();
// console.log(app); // this will print all the modules can be used using express, which is app as we mentioned here !
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/',(req ,res)=>{
    res.send("Hello World hey people");


})

app.post('/auth-data',(req ,res)=>{
    console.log(req.headers.authorization); // this will only return only the specific data required form the front-end
    console.log(req.headers);// this will return an object with all other data
    res.send("<b>Hello World hey people</b>");

})

app.post("/conversations", (req,res)=>{
    res.send('<body>{msg: "hello"}</body>')
    console.log("success");
    console.log(req.body); /// this will out put undefined as an output
    
    console.log("successfully resieved the body packets for the post end");
    console.log("success");

    
})

app.post("/body-parser",(req,res)=>{
    console.log(req.body); // o/p : { msg: '2+2 =?' }  -> object
    console.log(req.body.msg); //o/p : 2+2 =?    -> string
    res.json({
        output : "4"
    })
})

app.listen(port)

/// use node --watch index.js to wtart the server instead of npm start