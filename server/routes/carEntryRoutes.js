const express = require("express");
const router = express.Router();
const CarEntry = require("../models/CarEntry");

// save vehicle number
router.post("/", async (req, res) => {
  try {
    const entry = await CarEntry.create({
      vehicleNumber: req.body.vehicleNumber,
    });

    res.json({
      success: true,
      entryId: entry._id,
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

// get vehicle number
router.get("/:id", async (req, res) => {
  const entry = await CarEntry.findById(req.params.id);
  res.json(entry);
});

module.exports = router;