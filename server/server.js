const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 5000;
const config = require("./config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/team", (req, res) => {
  const protocol = config.baseUrl.protocol;
  const hostname = config.baseUrl.hostname;
  const path = config.baseUrl.path;
  const query = config.query.seasonQuery;
  const apiKey = config.API.builder + config.API.key;

  const urlBuilder = (url1, url2, url3, url4, url5) => {
    let newUrl = url1 + url2 + url3 + url4 + url5;
    return newUrl;
  };

  const apiUrl = urlBuilder(protocol, hostname, path, query, apiKey);
  console.log("url****", apiUrl);
  
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    console.log("data****", data);
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
