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
    res.json({data: {url: url, email: mail}});
});

server.listen(8080, ()=>console.log("Started on 8080 port"));