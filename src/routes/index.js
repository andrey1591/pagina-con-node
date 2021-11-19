const express = require('express');
const ruta = express.Router();


ruta.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    //res.sendFile(__dirname + '/views/index.html');
    res.render('index.ejs', {titulo: 'Iniciando con NODE'});
});

ruta.get('/contacto', (req, res) => {
    res.render('contacto.ejs', {titulo: 'Contacto'});
});



module.exports = ruta;