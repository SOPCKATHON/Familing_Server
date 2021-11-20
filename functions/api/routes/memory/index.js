const express = require("express");
const router = express.Router();

router.get("/list/:month", require("./memoryListGET"));
router.get("/:memoryId", require("./memoryGET"));
router.post("/write", require("./memoryPOST"));

module.exports = router;
