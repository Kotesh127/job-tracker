const express = require("express");
const { createJob,
    getJobs,
    updateJob,
    deleteJob,
 } = require("../controllers/jobController");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
router.post("/",protect, createJob);
router.get("/", protect, getJobs);
router.put("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);

module.exports = router;