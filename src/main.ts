import 'dotenv/config';

import cors from 'cors';
import express, { json, urlencoded } from 'express';
import { PoolConnection } from 'mysql2/promise';

import { serverConfig } from '@/config/index';
import { createCodigoRouter } from '@/routes/index';
import { pool } from '@/util';

async function main() {
  const app = express();
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
  app.disable('x-powered-by');

  const connection: PoolConnection = await pool.getConnection();

  app.use('/api', createCodigoRouter(connection));

  const { port } = serverConfig;

  const server = app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });

  server.on('error', (error) => {
    console.log('Error: ', error);
  });
}

main();
