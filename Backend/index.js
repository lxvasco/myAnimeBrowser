const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api para mi Anime Browser!");
});

app.post("/scoresAverage", (req, res) => {
  const scores = req.body;
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / scores.length;
  res.json({ avg });
});

app.listen(PORT, () => {
  console.log("Server running on port 3001");
});
