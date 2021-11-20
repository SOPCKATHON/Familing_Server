const express = require("express");
const router = express.Router();

router.get("/list/:month", require("./memoryListGET"));
router.get("/:memoryId", require("./memoryGET"));

module.exports = router;
