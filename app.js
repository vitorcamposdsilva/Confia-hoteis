const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('../models/db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: false }));

app.get('/', function (req, res){
    res.sendFile(__dirname + './site/login');
});

const User = mongoose.model('User', UserSchema, 'user');
app.post('./site/login' , function(req, res){
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    newUser.save();
    res.redirect('./site/home');
});
module.exports = User;

app.listen(5000, function (){
    console.log('server is running')
});