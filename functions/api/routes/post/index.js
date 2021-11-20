const express = require("express");
const router = express.Router();

router.post("/regist", require("./postingPOST"));

module.exports = router;