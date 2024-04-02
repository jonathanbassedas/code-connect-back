const databaseConfig = {
  host: process.env.HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DATABASE || 'codeconnect_db',
  password: process.env.PASSWORD || 'root',
  port: process.env.DB_PORT || 3030,
};

export { databaseConfig };
