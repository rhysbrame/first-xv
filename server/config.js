module.exports = {
  baseUrl: {
    protocol: "https://",
    hostname: "api.sportradar.us",
    path: "/rugby/trial/v2/union/en"
  },

  query: {
    scarletQuery: "/teams/sr:competitor:4205/profile.json?",
    seasonQuery: "/seasons.json?",
    seasonStatsQuery: "/seasons/sr:season:44378/live_standings.json?"
  },
  API: {
    builder: "api_key=",
    key: "czvunrws6gmkaa5veyk4qchk"
  }
};
