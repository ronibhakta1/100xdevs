// part one ugly way 
const express = require('express');
const app = express();
const port =3000;

//ugly way for creating middleware
app.get('/health-checkup',(req,res)=>{
    //do health checks here 
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    const kidneyId1 = req.query.kidneyId1;

    console.log(kidneyId)
    if (username != "Roni" && password != "pass") {
        res.status(403).json({
            msg:"user doesnt exist"
        })   
        return;     
    }
    if (kidneyId != 1 || kidneyId1 != 2 ) {
        res.status(411).json({
            msg: "Wrong inputs"
        })        
        return;
    }
    // do something with kidney here
    res.json({
        msg :"your kidney is fine"
    })
})

app.listen(port);