const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const axios = require('axios');

const PORT = process.env.PORT || 8080;
const MongoDB = process.env.MONGODB_URL || 8080;
app.use(express.json());
app = express()
app.use(cors());

app.get("/", (_, res) => {
  res.status(200).json({ status: "Server is healthy! Enjoy............" });
});


app.get('/github/:username', async (req, res) => {
  try {
      const username = req.params.username;

      // Fetch user profile
      const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: { Authorization: `token ${GITHUB_ACCESS_TOKEN}` }
      });

      // Fetch repos
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: { Authorization: `token ${GITHUB_ACCESS_TOKEN}` }
      });

      res.json({
          profile: userResponse.data,
          repos: reposResponse.data
      });
  } catch (error) {
      res.status(500).json({ error: "Error fetching GitHub data" });
  }
});


app.listen(PORT, async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    console.log(`Server is running at ${PORT} and database is connected`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
