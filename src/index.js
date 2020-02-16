const express = require('express');
const app = express();
const path = require('path');

//configuracion
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');


//middleWares


//Rutas
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));


// Escuchando el servidor 
app.listen(app.get('port'), () =>{
    console.log(" servidor en el puerto ", app.get('port'));
});