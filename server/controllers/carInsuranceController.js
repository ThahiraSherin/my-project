const CarInsurance = require("../models/CarInsurance");

const renewCarInsurance = async (req, res) => {
  try {
    const quote = await CarInsurance.create(req.body);
    res.status(200).json({ 
      success: true,
      quoteId: quote._id,
      message: "Quote request submitted successfully" 
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { renewCarInsurance };