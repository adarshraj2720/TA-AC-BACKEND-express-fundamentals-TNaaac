var express = require('express')


var app = express();

app.use((req,res,next)=>{
    console.log(req.method,req.url,req.body);
    next()
})

app.use(express.json())

app.use(express.urlencoded({extended:false}))


app.post('/json',(req,res,next)=>{
    console.log(req.body);
    res.end()    
})

app.post('/contact',(req,res,next)=>{
    console.log(req.body);
    res.end()    
})

app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000,()=>{
    console.log('WELCOME in 3k Port');
})