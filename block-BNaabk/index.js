var express  = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.send('Welcome on index page')
})

app.listen(3000,()=>{
    console.log(`WELCOME to the 3k Server`)
})