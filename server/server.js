const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const season = require("./routes/season");
const teamProfile = require("./routes/teamProfile");
const player = require("./routes/player");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(season);
app.use(teamProfile);
app.use(player);

app.get("/", (req, res) => {
  res.send("Express server Home page");
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port " + port);
});
