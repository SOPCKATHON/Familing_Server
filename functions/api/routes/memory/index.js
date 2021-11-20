const express = require("express");
const router = express.Router();

router.get("/:month", require("./memoryListGET"));
// router.get("/:memoryId", require("./memoryGET"));

module.exports = router;
