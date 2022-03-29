var express = require('express');

var logger = require('morgan');

var app = express();

app.use(logger('dev'));


app.use('/admin', (req, res, next) => {
    next('Unauthorized');
})


// middleware which throws err
app.use((req, res, next) => {
    // if requested url is /admin throw error
    if (req.url === "/admin") {
      return next("Unauthorized");
    }
    // other let it pass to next middleware by simply calling next()
    next();
  });


app.get('/', (req, res) => {
    res.send('WELCOME')
})

app.get('/about', (req, res) => {
    res.send('ABOUT')
})

app.use((req, res, next) => {
    res.send('PAGE NOT FOUND');
})

app.use((err, req, res, next) => {
    res.send(err);
})


app.listen(2002, () => {
    console.log('WELCOME in 2002 server');
})