const express = require("express");
const router = express.Router();
const config = require("./config");
const fetch = require("node-fetch");

router.get("/team_profile", (req, res) => {
  const query = config.team_id;
  const apiKey = config.apiKey;
  const url = `https://api.sportradar.us/rugby/trial/v2/union/en/teams/${query}/profile.json?api_key=${apiKey}`;
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
