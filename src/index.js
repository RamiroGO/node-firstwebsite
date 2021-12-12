const express = require('express');
const path = require('path');

// La variable 'app' es el servidor
const app = express();
// Definir el valor del puerto.
const PORT = 3000;

///Settings
// Guardamos el valor del puerto en una variable contenida dentro de 'app'
app.set('port', PORT);
// Establecer la ruta de los archivos en la carpeta 'views'
app.set('views', path.join(__dirname, 'views'));
// Definir el uso de archivos con extensión HTML para renderizarlos como EJS
app.engine('html', require('ejs').renderFile);
// Definir el Motor de Plantillas para archivos html y ejs
app.set('view engine', 'ejs');

// Middlewares

// Routes
app.use(require('./routes/index.js'));

// Statics Files
/// Entrega de archivos e imágenes disponibles para el servidor
app.use(express.static(path.join(__dirname, 'public')));

// Listening the Server
app.listen(app.get('port'), () => {
	console.log('Server on Port', app.get('port'));
});
