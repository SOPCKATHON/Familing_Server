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

const addMemory = async (client, category, date, content) => {
  const arr = date.split(".");
  const month = arr[1];
  const newDate = arr.join("-");

  const { rows } = await client.query(
    `
    INSERT INTO memory
    (category, date, content, month)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
    `,
    [category, newDate, content, month]
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllMemory, getMemory, getMonthMemory, addMemory };
