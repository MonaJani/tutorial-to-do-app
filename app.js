const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.routers');

const app = express();
//Ausgabe in Localhost
app.get('/db-test', (req, res) => {
    res.send('DB-Test Route funktioniert');
});

console.log('userRouter:', userRouter);
console.log('typeof userRouter:', typeof userRouter);

//Für jede eingehende Anfrage: Wenn JSON im Body ist parse es 
//und speichere in req.body
app.use(body_parser.json());


console.log(require.resolve('./routers/user.routers'));

app.use('/', userRouter);
//export
module.exports = app;