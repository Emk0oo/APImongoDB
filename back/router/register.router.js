const express = require("express");
const router = express.Router();
const userController = require("../controller/register.controller");

router.post("/", userController.register);
router.get("/getTest", userController.getUsers);

module.exports = router;