const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
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

app.listen(port, () => console.log(`Listening on port ${port}`));


//----------------work from idea-------------------

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
  res.send('PORT 5000');
})


app.listen(port, (err) => {
  if (err) { console.log(err) };
  console.log('Listening on port ' + port);
})