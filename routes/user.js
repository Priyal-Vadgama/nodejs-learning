const express = require("express");
const router = express.Router();

router.route("/").post(async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.gender ||
    !body.email
  ) {
    return res.status(400).json({ msg: "All fields are required..." });
  }
  const result = await User.create({
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName,
    gender: body.gender,
  });

  console.log(result, "result");

  return res.status(200).json({ msg: "user created..." });
});

module.exports = router;