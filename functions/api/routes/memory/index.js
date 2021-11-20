const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Memory
 *  description: Memorys management
 */

/**
 * @swagger
 * /memory/list/:month:
 *  get:
 *    summary: 해당 월 전체 메모리 조회 API
 *    tags: [Memorys]
 *    parameters:
 *      - in: path
 *        type: int
 *        required: true
 *        default: 11
 *        name: month
 *        description: 해당 월
 */
router.get("/list/:month", require("./memoryListGET"));

/**
 * @swagger
 * /memory/:memoryId:
 *  get:
 *    summary: 해당 메모리 정보 조회 API
 *    tags: [Memorys]
 *    parameters:
 *      - in: path
 *        type: int
 *        required: true
 *        default: 1
 *        name: memoryId
 *        description: 메모리 아이디
 */
router.get("/:memoryId", require("./memoryGET"));

/**
 * @swagger
 * /memory/write:
 *  post:
 *    summary: 게시글 작성 API
 *    tags: [Memorys]
 *
 */
router.post("/write", require("./memoryPOST"));

module.exports = router;
