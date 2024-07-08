//INPUT VALIDATION

const express = require('express')
const app = express();
const port=3000;
app.use(express.json())

// this is a ugly way where when user sends different data as response the middleware gets crashed
app.post('/kidneys-length',(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyslength = kidneys.length;
    res.send("Your kideney length is "+kidneyslength);

    // the first check can be using if else as a checking parameter 
    // The check can be like wheather the user is sendinfg correct inputs like wheather it is a char num string bool etc,
    // the one example of it is here which checks weather the object only contains kidneys a key 

    //comment this if you are using global catches
    // if(!kidneys){
    //     res.json({
    //         msg:"wrong input"
    //     })
    // }else {
    //     const kidneyslength = kidneys.length;
    //     res.send("Your kideney length is "+kidneyslength);
    // }


    // Here we have to do it for char int string seperatly which will take more time to create it for us 
    // Here the ZOD comes to play to overcome this problems
    
});

//another type of middleware 
// when expection gets crashed we can handdle it with this last middleware thing 

// global catches 
// this should be defined at the end of the middleware which contains 4 inputs / arrguments /parameters

app.use((err,req,res,next)=>{
    res.json({
        "msg":"sorry something is up with server"
    })
})


app.listen(port);
