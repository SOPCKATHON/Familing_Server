const _ = require("lodash");
const convertSnakeToCamel = require("../lib/convertSnakeToCamel");

const getAllMemory = async (client) => {
  const { rows } = await client.query(
    `
    SELECT * FROM "memory" m
    `
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const getMonthMemory = async (client, month) => {
  const { rows } = await client.query(
    `
    SELECT * FROM "memory" m WHERE month=${month}
    `
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = { getAllMemory, getMonthMemory };
