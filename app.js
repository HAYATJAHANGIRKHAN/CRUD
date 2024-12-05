
require('dotenv').config();
const express= require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Asalamualaikum HAYAT JAHANGIR KHAN')
});

module.exports =app;
