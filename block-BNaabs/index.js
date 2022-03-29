var express = require('express');

// var logger = require('morgan');

// var cookieparser = require('cookie-parser');

var app = express();

// app.use(logger('dev'));

// app.use(cookieparser);

// app.use(express.json())



app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
    
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/public/form.html');
})

app.post('/new' ,(req ,res)=>{
    res.send(req.body);
})


app.get('/users/:username',(req,res)=>{
    var username = req.params.username;
    res.send(username);
})


app.listen(4444,()=>{
    console.log('WELCOME in the 4444 server');
})