const express = require("express");
const router = express.Router();

router.get("/", require("./profileGET"));

module.exports = router;
