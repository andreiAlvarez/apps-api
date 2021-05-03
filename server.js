const express = require("express");
const app = express();
const apps = require("./seeds.json");

app.get("/apps", (req, res) => {
  res.json(apps);
});

app.listen(process.env.PORT || 3000);
