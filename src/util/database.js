import mysql from 'mysql2/promise';

import config from '../config/config.js';

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
  port: config.port,
});

export default pool;
