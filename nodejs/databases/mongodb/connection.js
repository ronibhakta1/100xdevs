const mongoose = require("mongoose");
const { string } = require("zod");

// connection made using the cluster in compass on mongodb site to mongodb compass

mongoose.connect("mongodb+srv://roni:9850097464Roni@cluster0.nrqgn2x.mongodb.net/userappnew",);

// table schema is created here

const User = mongoose.model('users', {
    name: String,
    email: String,
    password: String
});
// data data sent to the table 
const user = new User({
    name: 'Roni Bhakta',
    email: 'ronibhakta1@gmail.com',
    password: '12345678'
});

// push the data to the database through the link present in the mongoose connect
user.save().then(() => console.log('pushed successfully')); 