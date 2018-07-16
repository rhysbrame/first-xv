const PlayerAPI = {
  players: [
    {
      id: 1,
      picture: '../ieuan.jpg',
      name: "Ben Blocker",
      age: "22",
      positions: ["Hooker"]
    },
    {
      id: 2,
      picture: "../ieuan.jpg",
      name: "Ieuan Evans",
      age: "34",
      positions: ["Fullback", "Wing"]
    },
    {
      id: 3,
      picture: "../dai.jpg",
      name: "Dai Morris",
      age: "74",
      positions: ["No. 8"]
    }
  ],
  all: function() {
    return this.players;
  },
  get: function(id) {
    const isPlayer = p => p.id === id;
    return this.players.find(isPlayer);
  }
};

export default PlayerAPI;
