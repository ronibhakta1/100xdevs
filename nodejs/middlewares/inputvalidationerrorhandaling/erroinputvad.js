const express = require('express')
const port = 3000;
const app = express();

// error handling in express
// with four parameters  

// this is used for res.json
app.use(express.json());

// routs
app.post("/health-checkup",(res,req)=>{
    const kidneys = req.body.kidneys;
    const kiddneylength = kidneys.length;
    res.setEncoding("you have "+ kiddneylength + " keidneys")
});

//global catches (Exeptions)
app.use((err, req, res, next)=>{
    errorCount++;
    // when error counts gets increased we can store the log error eceptions and store it and send to resolve it and solve the expetions 
    res.json({
        msg:"sorry something is wrong with our server right now"
    })
})
app.listen(port);