const express = require("express");
const router = express.Router();
const config = require("./config");
const fetch = require("node-fetch");

router.get("/season", (req, res) => {
  const apiKey = config.apiKey;
  const url = `https://api.sportradar.us/rugby/trial/v2/union/en/seasons.json?api_key=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      res.send({
        data
      });
    })
    .catch(err => {
      res.redirect("/error");
    });
});

module.exports = router;
