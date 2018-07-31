const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/team", (req, res) => {
  const baseUrl =
    "https://api.sportradar.us/rugby/trial/v2/union/en/teams/sr:competitor:4205/profile.json?api_key=czvunrws6gmkaa5veyk4qchk";

  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.redirect("/error");
    });
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port " + port);
});
