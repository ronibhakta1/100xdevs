const mongoose = require("mongoose");
const { string } = require("zod");

// connection made using the cluster in compass on mongodb site to mongodb compass

mongoose.connect("<use the token>",);
// if i keep the token its getting exposed on git hub repos so while using it just add it and then delete

// table schema is created here

const User = mongoose.model('users', {
    name: String,
    email: String,
    password: String
});
// data data sent to the table 
const user = new User({
    name: 'Rakesh Bhakta',
    email: 'bhakta1@gmail.com',
    password: '1234678'
});

// push the data to the database through the link present in the mongoose connect
user.save().then(() => console.log('pushed successfully')); 