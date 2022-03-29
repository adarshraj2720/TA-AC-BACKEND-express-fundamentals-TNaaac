var express = require('express');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use((req,res,next)=>{
    res.cookie("Name","Adarsh Raj");
    next();
})

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send(`<h2>WELCOME to express </h2>`);
})

app.get('/about',(req,res)=>{
    res.send('My  name is Adarsh Raj')
})

app.post('/form',(req,res)=>{
    console.log(req.body)
    res.send(req.body);
})


app.post('/json',(req,res)=>{
    console.log(req.body);
    res.setHeader('content-type','text/plain')
    res.send(req.body);
})

app.get('/users/:username',(req,res)=>{
    var username =  req.params.username;
    res.send(`<h1>${username}</h1>`)
})

app.use((req,res,next)=>{
    res.send('page not found 400');
})

app.listen(3000,()=>{
    console.log('WELCOME in the 3k server')
})