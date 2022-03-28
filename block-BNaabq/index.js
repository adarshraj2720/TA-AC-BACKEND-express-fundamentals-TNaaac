var express = require('express');

var  logger = require('morgan')


var cookieParser = require('cookie-parser')


var app = express()



app.use(logger('dev'));

app.use(cookieParser())

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.cookies)
    res.cookie("username","Adarsh");
    next();
    
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
    //res.send()
})

app.listen(9999,()=>{
    console.log('WELCOME into 1k server')
})


