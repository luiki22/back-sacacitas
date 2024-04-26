const express = require('express');
const cors = require('cors');
const app = express();

// Middleware CORS
app.use(cors());

// Middleware para permitir solicitudes CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());

// Middleware para manejar solicitudes POST a '/enviar-datos'
app.post('/enviar-datos', (req, res) => {
    // Aquí puedes manejar la lógica para procesar los datos recibidos en la solicitud
    // y enviar una respuesta adecuada al cliente
    console.log(req.body);
    res.status(200).json({ mensaje: 'Datos recibidos correctamente' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
