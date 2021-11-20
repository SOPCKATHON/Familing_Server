const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /profile:
 *  get:
 */
router.get("/", require("./profileGET"));

module.exports = router;
