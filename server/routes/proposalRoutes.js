const express = require("express");
const router = express.Router();
const proposalController = require("../controllers/proposalController");

router.post("/proposal", proposalController.createProposal);

module.exports = router;