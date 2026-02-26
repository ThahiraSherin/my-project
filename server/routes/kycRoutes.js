const express = require("express");

const router = express.Router();

router.post("/kyc", (req, res) => {
  const { name, email, phone, panNumber, aadharNumber } = req.body;

  // Simulate saving KYC details to database
  console.log("KYC Details:", { name, email, phone, panNumber, aadharNumber });

  res.status(200).json({
    success: true,
    message: "KYC details submitted successfully",
    data: { name, email, phone, panNumber, aadharNumber },
  });
});

module.exports = router;