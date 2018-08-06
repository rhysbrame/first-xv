const express = require("express");
const router = express.Router();
const config = require("./config");
const fetch = require("node-fetch");

router.get("/team_profile", (req, res) => {
  const query = config.query.teamProfileQuery;
  const apiKey = config.API.key;

  const url = `https://api.sportradar.us/rugby/trial/v2/union/en${query}api_key=${apiKey}`
  
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
