const { Pool } = require('pg');

const pool = new Pool({
  user: 'sigl',
  host: 'localhost',
  database: 'so-close',
  password: 'admin',
  port: 5432,
});

module.exports = pool;