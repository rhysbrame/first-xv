const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const competitions = require("./routes/competitions");
const tournament = require("./routes/tournament")
const teamProfile = require("./routes/teamProfile");
const playerProfile = require("./routes/playerProfile");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(competitions);
app.use(tournament);
app.use(teamProfile);
app.use(playerProfile);

app.get("/", (req, res) => {
  res.send("Express server Home page");
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port " + port);
});
