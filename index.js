const app = require('./app');
const connectDB = require('./config/db');

const port = 3000;

async function startServer() {
    await connectDB(); 

    app.listen(port, () => {
        console.log(`Server Listening on Port http://localhost:${port}`);
    });
}

startServer();

app.get('/', (req, res)=>{
    res.send("Hello World. Das ist jetzt der Test")
});