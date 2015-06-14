var Genius = require("./lib/index.js");

var geniusClient = new Genius(process.env.GENIUS_ACCESS_TOKEN);

geniusClient.getSong("378195", function(error, song) {
  console.log(error);
  console.log(song);
});