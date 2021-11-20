const functions = require("firebase-functions");
const { success, fail } = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");
const db = require("../../../db/db");
const { memoryDB } = require("../../../db");

module.exports = async (req, res) => {
  const { category, date, content } = req.body;

  let client;
  try {
    client = await db.connect(req);
    const memory = await memoryDB.addMemory(client, category, date, content);
    res
      .status(statusCode.OK)
      .send(
        success(statusCode.OK, responseMessage.MEMORY_POST_SUCCESS, memory)
      );
  } catch (error) {
    functions.logger.error(
      `[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`,
      `[CONTENT] ${error}`
    );
    console.log(error);
  } finally {
    client.release();
  }
};
