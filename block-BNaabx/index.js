var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');


var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'))

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})



app.post('/json',(req,res)=>{
    res.json(req.body);
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(5000,()=>{
    console.log('WELCOME in the 5k server');
})