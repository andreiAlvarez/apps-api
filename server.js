const express = require("express");
const app = express();
const apps = require("./seeds.json");
let port = process.env.PORT || 3000;

app.get("/apps", (req, res) => {
  // saving params in variables
  let { by, start, end, max, order } = req.query;

  // default values
  if (!max) {
    max = 50;
  }
  if (!order) {
    order = "asc";
  }

  // preparing data to response

  if (by === "id") {
    if (!start) {
      start = 1;
    }
    if (!end) {
      end = apps.length;
    }

    const data = apps.slice(--start, end).splice(0, max);

    if (order === "asc") {
      res.json(data);
    } else if (order === "desc") {
      data.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
      res.json(data);
    }
  } else if (by === "name") {
    if (!start) {
      start = "my-app-001";
    }
    if (!end) {
      end = "my-app-050";
    }

    let startIndex = apps.findIndex((i) => i.name === start);

    let endIndex = apps.findIndex((i) => i.name === end);

    const data = apps.slice(startIndex, ++endIndex).splice(0, max);

    if (order === "asc") {
      res.json(data);
    } else if (order === "desc") {
      data.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
      res.json(data);
    }
  } else
    res.status(400).json({
      message: "Please, -by- is required. Available values: id or name",
    });
});

app.listen(port, () => {
  console.log(`Apps API`);
});
