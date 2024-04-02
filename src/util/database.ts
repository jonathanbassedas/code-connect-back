import { createPool } from 'mysql2/promise';

import { databaseConfig } from '@/config/index';

export const pool = createPool({
  host: databaseConfig.host,
  user: databaseConfig.user,
  database: databaseConfig.database,
  password: databaseConfig.password,
  port: databaseConfig.port,
});
