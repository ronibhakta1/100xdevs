const mongoose = require('mongoose');

//create a .env file 
mongoose.connect("mongodb+srv://roni:9850097464Roni@nexxus.y5qbb.mongodb.net/todos",{ connectTimeoutMS: 50000 });

const todoSchema = mongoose.Schema({ 
    title : String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports ={
    todo
}