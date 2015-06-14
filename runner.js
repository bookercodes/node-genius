var Genius = require("./lib/index.js");

var geniusClient = new Genius(process.env.GENIUS_ACCESS_TOKEN);

geniusClient.getArtist("16775", function(error, artist) {
  console.log(artist);
});