const _ = require("lodash");
const convertSnakeToCamel = require("../lib/convertSnakeToCamel");

const getAllMemory = async (client) => {
  const { rows } = await client.query(
    `
    SELECT * FROM "memory" u
    `
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getAllMemory };
