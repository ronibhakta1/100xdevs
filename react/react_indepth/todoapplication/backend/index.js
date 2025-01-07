// write basic express boilerplate code
// with express.json() middleware

const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:5173' // react app port
// }));
//or
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
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
        completed: false,
    });

    res.json({
        msg: "todo created",
    })

});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos,
    })
});

app.put('/completed', async (req, res) => {
    const updatePlayload = req.body;
    const parsedPlayload = updateTodo.safeParse(updatePlayload);
    if(parsedPlayload.success){
        res.status(411).json({
            msg: "you sent wrong inputs",
        });
        return;
    }
    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    });
    res.json({
        msg: "todo updated",
    });
});

app.listen(port);