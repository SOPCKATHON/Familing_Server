const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /post/regist:
 */
router.post("/regist", require("./postingPOST"));

module.exports = router;
