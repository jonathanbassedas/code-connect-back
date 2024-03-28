import bodyParser from 'body-parser';
import express from 'express';
import corsConfig from './config/cors.js';
import codigosRoutes from './routes/codigos.js';

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(corsConfig);

app.use('/api/codigos', codigosRoutes);

const server = app.listen(ports, () =>
  console.log(`Listening in port ${ports}`)
);

server.on('error', (error) => {
  console.log('Error: ', error);
});
