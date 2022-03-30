var express = require('express');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var app = express()

//middlewares

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));


//routes

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.get('/users',(req,res)=>{
    res.send('<h2>Hii users</h2>')
})

app.get('/main',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/projects',(req,res)=>{
    res.sendFile(__dirname + '/project.html');
})


app.use((req,res,next)=>{
    res.send('Page Not Found 404');
    next()
})

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(4000,()=>{
    console.log('WELCOME  in the 4k server');
})