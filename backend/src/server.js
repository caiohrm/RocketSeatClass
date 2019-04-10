const express = require('express');
const mongoose = require('mongoose');


const app = express();
const cors = require('cors');
app.use(cors)

const path = require('path');
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

mongoose.connect("mongodb+srv://caio:260793@cluster0-2p4b5.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true,
});

app.use((req, res, next) => {
    req.io = io;
    next();
})
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(require('./routes.js'));

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

server.listen(process.env.PORT || 3333);