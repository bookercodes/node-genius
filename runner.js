var Genius = require("./lib/index.js");

var geniusClient = new Genius(process.env.GENIUS_ACCESS_TOKEN);

geniusClient.search("Kendrick Lamar", function(error, results) {
  console.log(error);
  console.log(results);
});