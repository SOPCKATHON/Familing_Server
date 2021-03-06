const functions = require("firebase-functions");
const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const { memoryDB } = require("../../../db");
const db = require("../../../db/db");

module.exports = async (req, res) => {
  let today = new Date();
  let thisMonth = today.getMonth() + 1;
  let lastMonth;

  if (thisMonth === 1) {
    lastMonth = 12;
  } else {
    lastMonth = thisMonth - 1;
  }

  let client;

  try {
    client = await db.connect(req);

    const thisMonthMemory = await memoryDB.getMonthMemory(client, thisMonth);
    const lastMonthMemory = await memoryDB.getMonthMemory(client, lastMonth);
    const food = thisMonthMemory.filter(
      (obj) => obj.category === "stamp0"
    ).length;
    const picnic = thisMonthMemory.filter(
      (obj) => obj.category === "stamp1"
    ).length;
    const travel = thisMonthMemory.filter(
      (obj) => obj.category === "stamp2"
    ).length;
    const exercise = thisMonthMemory.filter(
      (obj) => obj.category === "stamp3"
    ).length;
    const others = thisMonthMemory.filter(
      (obj) => obj.category === "stamp4"
    ).length;

    const profileInfo = {
      thisMonthLength: thisMonthMemory.length,
      lastMonthLength: lastMonthMemory.length,
      stamp0: food,
      stamp1: picnic,
      stamp2: travel,
      stamp3: exercise,
      stamp4: others
    };

    res
      .status(statusCode.OK)
      .send(
        util.success(
          statusCode.OK,
          responseMessage.PROFILE_GET_SUCCESS,
          profileInfo
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
