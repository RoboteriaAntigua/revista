const express = require('express');
const app = express();
const path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Le pasamos una url base al router
app.use('/', indexRouter);
app.use('/users', usersRouter);

//Para poder usar los archivos estaticos en la carpeta public, express.static('ruta'):
app.use('/',express.static(__dirname+'/public'));



app.listen(3000,(req,res)=>{
    console.log('servidor corriendo en el http://localhost:3000')
})

module.exports = app;