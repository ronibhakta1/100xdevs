const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", function (req, res){
    const createPayload =req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPlayload.sucess){
        res.status(411).json({
            msg: "you have sent wrong inputs"
        })
    }

});

app.get("/todos", function(req, res){
    
});

app.put("/complete", function(req, res){
    const updatePlayload = req.body;
    const parsedPlayload = updateTodo.safeParse(updatePlayload);
    if(!parsedPlayload.sucess){
        res.status(411).json({
            msg: "you have sent wrong inputs"
        })
    }
});

app.listen(3000);
