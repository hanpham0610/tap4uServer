const express = require("express");
const bodyParser = require("body-parser");
const User = require('./model/user'); // Import model User
const app = express();
app.use(bodyParser.json());

app.post('/api/auth/register', async (req, res) => {
  const {username, password, email, name ='', date='', phone='', diachi='', imgtk=''} = req.body;

  try {
    const newUser = await User.create({username, password, email, name,date, phone, diachi, imgtk });
    res.status(200).send({ message: "Đăng ký tài khoản thành công!", user: newUser });
  } catch (err) {
    res.status(500).send({ message: "Lỗi khi đăng ký tài khoản", error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

