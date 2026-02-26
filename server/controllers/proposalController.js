const Proposal = require("../models/Proposal");

exports.createProposal = async (req, res) => {
  try {
    const proposal = new Proposal(req.body);
    await proposal.save();

    res.status(201).json({
      success: true,
      message: "Proposal saved successfully",
    });

  } catch (error) {
    console.error("Proposal Save Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};