const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://caio:260793@cluster0-2p4b5.mongodb.net/test?retryWrites=true",{
    useNewUrlParser:true,
});

app.use(express.json());

app.use(express.urlencoded( {extended: true}));

app.use(require('./routes.js'))

app.listen(3333);
