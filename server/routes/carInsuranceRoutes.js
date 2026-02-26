const express = require("express");
const { renewCarInsurance } = require("../controllers/carInsuranceController");

const router = express.Router();

router.post("/renew", renewCarInsurance);

module.exports = router;