const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {

    res.cookie('nombre_cookie', 'valor_cookie', { maxAge: 3600000 }); // 1 hora
    res.send('Cookie creada');
});

app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies['nombre_cookie'];
    if (cookie) {
        res.send(`El valor de la cookie es: ${cookie}`);
    } else {
        res.send('No se encontró la cookie.');
    }
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('nombre_cookie');
    res.send('Cookie eliminada');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
