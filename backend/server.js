const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
require("dotenv").config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.get("/", (req, res) => {
    res.send("Job Tracker API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// mongodb+srv://koteshambati_db_user:jobkotesh1@job-tracker-db.acjd9gf.mongodb.net/?appName=Job-Tracker-DB
// jobkotesh1
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass