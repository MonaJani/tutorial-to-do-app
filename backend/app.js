const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.routers');
const tasksRouter = require('./routers/task.router');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World. Das ist jetzt der Test');
});

//Ausgabe in Localhost
app.get('/db-test', (req, res) => {
    res.send('DB-Test Route funktioniert');
});

//Für jede eingehende Anfrage: Wenn JSON im Body ist parse es 
//und speichere in req.body
app.use(body_parser.json());

app.use('/user', userRouter);
app.use('/task', tasksRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        status:false,
        message: err.message || 'Internal Server Error'
    });
});
//export
module.exports = app;