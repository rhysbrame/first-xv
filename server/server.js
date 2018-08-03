const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

require("./routes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/team", require("./routes/team"));

app.get("/", (req, res) => {
  res.send("Express server Home page");
});

app.get("/about", (req, res) => {
  res.send("about page for the Express server");
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port " + port);
});
