require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

const User = require('./models/User');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@cluster0.xyn5b.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> console.log('Connect to MongoDB...'))
    .catch(err=> console.log("Could not connect to MongoDB...", err));

app.post('/api/user', async(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const result = await user.save();
    res.send(result);
});
app.listen(3000, ()=>{
    console.log('serveris sukasi, galiu testuoti per Postman');
});


