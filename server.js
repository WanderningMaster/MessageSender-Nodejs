const express = require('express');
const sendToTelegram = require('./middlewares/sendToTelegram');
const sendToEmail = require('./middlewares/sendToEmail');

const server = express();

server.use(express.static('public'));
server.use(express.json());

server.get('/', (req, res) => {
    res.send('index.html');
});

server.post('/', sendToTelegram, sendToEmail, (req, res) => {
    const {mail, url} = req;
    console.log(mail, url);
    res
        .status(200)
        .json({data: null});
});

server.listen(8000, ()=>console.log("Started on 8000 port"));