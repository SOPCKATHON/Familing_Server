const dayjs = require("dayjs");
const functions = require("firebase-functions");
const { success, fail } = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");
const db = require("../../../db/db");
const { memoryDB } = require("../../../db");

module.exports = async (req, res) => {
  const { memoryId } = req.params;
  if (!memoryId)
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

  let client;
  try {
    client = await db.connect(req);
    let memory = await memoryDB.getMemory(client, memoryId);
    memory = { ...memory, date: dayjs(memory.date).format("YYYY.MM.DD") };
    if (!memory)
      return res
        .status(statusCode.NOT_FOUND)
        .send(fail(statusCode.NOT_FOUND, responseMessage.NO_MEMORY));
    res
      .status(statusCode.OK)
      .send(success(statusCode.OK, responseMessage.MEMORY_GET_SUCCESS, memory));
  } catch (error) {
    functions.logger.error(
      `[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`,
      `[CONTENT] ${error}`
    );
    console.log(error);

    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  } finally {
    client.release();
  }
};
