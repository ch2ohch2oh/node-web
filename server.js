// Simple node express server
// Takes in requests and returns the request header
// and ip.

const express = require("express");
const app = express();

const os = require("os");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({
    headers: req.headers,
    ip: req.ip,
    server_hostname: os.hostname(),
  });
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
