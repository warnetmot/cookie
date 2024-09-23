const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Habilitar el middleware cookie-parser
app.use(cookieParser());

// Ruta para crear una cookie
app.get('/set-cookie', (req, res) => {
    // Crear una cookie que dure 1 hora
    res.cookie('nombre_cookie', 'valor_cookie', { maxAge: 3600000 }); // 1 hora
    res.send('Cookie creada');
});

// Ruta para leer la cookie
app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies['nombre_cookie'];
    if (cookie) {
        res.send(`El valor de la cookie es: ${cookie}`);
    } else {
        res.send('No se encontró la cookie.');
    }
});

// Ruta para eliminar la cookie
app.get('/delete-cookie', (req, res) => {
    res.clearCookie('nombre_cookie');
    res.send('Cookie eliminada');
});

// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
