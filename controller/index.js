const { Pool } = require('pg');

// Tạo pool kết nối với PostgreSQL
const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: '192.168.1.40',
    port: '5432',
    database: 'banhang',
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
