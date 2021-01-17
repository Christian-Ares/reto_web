const bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = 3000

//Configuración de Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//CORS para conexión entre front y back
app.use(cors({
    origin: ['http://localhost:3001']
}));

//Rutas o EndPoints
const index = require('./routes/index');
app.use('/', index);

const phones = require('./routes/phones');
app.use('/telefonos', phones);

//Listener para verificar que está conectado.
app.listen(PORT, ()=>{
    console.log('Puerto correcto conectado!')
});