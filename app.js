const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: false }));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/login');
});


app.post('./site/login' , function(req, res){
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    newUser.save();
    res.redirect('./home');
});


app.listen(5000, function (){
    console.log('server is running')
});