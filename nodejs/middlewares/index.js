// part two cleaner way 

const express = require('express');
const app = express();
const port =3000;


function usercheck(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "Roni" || password != "pass") {
        res.status(403).json({
            msg:"user doesnt exist"
        })   
        return;     
    }else{
        next();
    }
}

function kidneycheck(req,res,next){
    const kidneyId = req.query.kidneyId;
    const kidneyId1 = req.query.kidneyId1;
    if (kidneyId === 1 || kidneyId1 === 2 ) {
        res.status(411).json({
            msg: "Wrong inputs",
        
        })        
        return;
    }else{
        next();
    }
}

//cleaner way for creating middleware

app.get('/health-checkup',usercheck,kidneycheck,(req,res)=>{
    // do something with kidney here
    res.json({
        msg :"your kidney is fine"
    })
})
let requesthits= 0;
// introducing app.use here the second way of using middleware 
function middlewarecheck1(req,res,next){
    requesthits++;
    console.log(requesthits);
    next();
}
app.use(middlewarecheck1);

app.get("/request-hits",(req,res)=>{
    res.json({
        msg:'hi there from the request-hits'
    })
})
app.listen(port);