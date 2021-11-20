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

const getMemory = async (client, memoryId) => {
  const { rows } = await client.query(
    `
    SELECT * FROM "memory" m
    WHERE memory_id = $1
    `,
    [memoryId]
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllMemory, getMemory };
