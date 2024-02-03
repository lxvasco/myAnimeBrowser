const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server running on port 3001");
});
