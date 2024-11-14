const { Pool } = require('pg');

// Tạo pool kết nối với PostgreSQL
const pool = new Pool({
    user: 'postgres',
    password: 'a123456',
    host: '209.126.5.177',
    port: '5432',
    database: 'postgres',
});

// Kiểm tra kết nối
pool.connect((err) => {
  if (err) {
    console.error('Lỗi khi kết nối PostgreSQL:', err);
  } else {
    console.log('Kết nối PostgreSQL thành công!');
  }
});

module.exports = pool;
