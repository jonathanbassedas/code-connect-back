const express = require('express');

const bodyParser = require('body-parser');

const codigosRoutes = require('./routes/codigos');
const authRoutes = require('./routes/auth');

const app = express();

const ports = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/api/codigos' , codigosRoutes);
app.use('/api/auth' , authRoutes);


const server = app.listen(ports, () => console.log(`Listening in port ${ports}`));

