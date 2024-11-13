// models/User.js
const pool = require("../index"); // Import kết nối cơ sở dữ liệu

const User = {
  // Thêm người dùng vào cơ sở dữ liệu
  async create({
    username,
    password,
    email,
    name = "",
    date = "",
    phone = "",
    diachi = "",
    imgtk = "",
  }) {
    const query = `
      INSERT INTO users (username, password, email, name,date, phone, diachi, imgtk)
      VALUES ($1, $2, $3, $4, $5,$6,$7,$8)
      RETURNING *
    `;
    const values = [
      username,
      password,
      email,
      name,
      date,
      phone,
      diachi,
      imgtk,
    ];
    console.log("values ", values);

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw new Error("Lỗi khi tạo người dùng mới: " + err.message);
    }
  },
};

module.exports = User;
