const express = require("express");
const router = express.Router();

router.post("/regist", require("./memoryPOST"));
router.get("/:month", require("./memoryListGET"));
router.get("/:memoryId", require("./memoryGET"));

module.exports = router;
