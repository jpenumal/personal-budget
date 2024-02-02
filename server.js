const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use("/", express.static("public"));

app.get("/budget", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error loading budget data");
    }
    const budget = JSON.parse(data);
    res.json(budget);
  });
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
