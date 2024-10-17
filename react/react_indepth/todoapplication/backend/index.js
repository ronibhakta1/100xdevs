// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;
app.use(express.json());

app.post('/todos', async (req, res) => {
    const createPaload = req.body;
    const parsedPayload = createTodo.safeParse(createPaload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent wrong inputs",
        });
        return;
    }

    // pur it in mongodb
    // async await is added here because the dp might take some time to respond so it will wait for the response
    // then it will move to the next line
    await todo.create({
        title: createPayload.title,
        description : createPayload.description,
    });

    res.json({
        msg: "todo created",
    })

});

app.get('/todos', (req, res) => {

});

app.put('/completed', (req, res) => {
    const updatePlayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePlayload);
    if(parsedPlayload.success){
        res.status(411).json({
            msg: "you sent wrong inputs",
        });
        return;
    }
});

app.listen(3000);