const express = require("express");
const router = express.Router();
const config = require("./config");
const fetch = require("node-fetch");

router.get("/tournament", (req, res) => {
    const apiKey = config.apiKey;
    // const seasonId = req.seasonId;
    // const url = `https://api.sportradar.us/rugby/trial/v2/union/en/seasons/${seasonId}/live_standings.json?api_key=${apiKey}`;
    const url = `https://api.sportradar.us/rugby/trial/v2/union/en/seasons/sr:season:55971/live_standings.json?api_key=${apiKey}`;

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
