const dayjs = require("dayjs");
const functions = require("firebase-functions");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");
const db = require("../../../db/db");
const { memoryDB } = require("../../../db");

module.exports = async (req, res) => {
  const { month } = req.params;
  let client;

  if (!month || month > 12 || month < 1) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  try {
    client = await db.connect(req);

    const memories = await memoryDB.getMonthMemory(client, month);
    let newMemories = [];

    for (let m of memories) {
      m = { ...m, date: dayjs(m.date).format("YYYY.MM.DD") };
      newMemories.push(m);
    }

    res
      .status(statusCode.OK)
      .send(
        util.success(
          statusCode.OK,
          responseMessage.MEMORY_LIST_GET_SUCCESS,
          newMemories
        )
      );
  } catch (error) {
    functions.logger.error(
      `[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`,
      `[CONTENT] ${error}`
    );
    console.log(error);

    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  } finally {
    client.release();
  }
};
