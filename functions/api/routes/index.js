const express = require("express");
const router = express.Router();

router.use("/memory", require("./memory"));

module.exports = router;
