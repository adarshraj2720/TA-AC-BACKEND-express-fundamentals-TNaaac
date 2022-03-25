var express = require('express')

var app = express()

function logger(req,res,next){
    console.log(req.method,req.url);
    next()

}
app.use(logger);


app.get('/',(req,res)=>{
    res.send('WELCOME on The Page')
})

app.listen(4000,()=>{
    console.log('WELCOME on the 4k server')
})