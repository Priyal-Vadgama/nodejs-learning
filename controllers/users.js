const User = require("../models/users");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.status(200).json("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.status(400).json({
      error: "Invalid Username or Password",
    });

  const jwt = setUser(user);
  return res.status(200).json({msg: jwt});
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};