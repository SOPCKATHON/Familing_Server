const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Profile
 *  description: Profile management
 */

/**
 * @swagger
 * /profile:
 *  get:
 *    summary: 사용자 메모리 조회 API
 *    tags: [Profile]
 */
router.get("/", require("./profileGET"));

module.exports = router;
