const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.routers');
const taskRouter = require('./routers/task.router');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World. Das ist jetzt der Test');
});

//Ausgabe in Localhost
app.get('/db-test', (req, res) => {
    res.send('DB-Test Route funktioniert');
});

app.use(cors());
app.use(express.json());

//Für jede eingehende Anfrage: Wenn JSON im Body ist parse es 
//und speichere in req.body
app.use(body_parser.json());

app.use('/user', userRouter);
app.use('/task', taskRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        status:false,
        message: err.message || 'Internal Server Error'
    });
});
//export
module.exports = app;