const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../Routes/Auth/auth");
const Admin = require('../models/Admin.Schema');

router.post("/register", async (req, res) => {
    try {
      let { username, password, passwordCheck } = req.body;
  
      // validate
  
      if (!username || !password || !passwordCheck)
        return res.status(400).json({ msg: "Not all fields have been entered." });
      if (password.length < 5)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 5 characters long." });
      if (password !== passwordCheck)
        return res
          .status(400)
          .json({ msg: "Enter the same password twice for verification." });
  
      const existingUser = await Admin.findOne({ username: username });
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this Admins already exists." });
  
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new Admin({
        username,
        password: passwordHash,
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // validate
    if (!username || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await Admin.findOne({ username: username });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this username has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await Admin.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await Admin.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await Admin.findById(req.user);
  res.json({
    displayName: user.username,
    id: user._id,
  });
});

module.exports = router;    