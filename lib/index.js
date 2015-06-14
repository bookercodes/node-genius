"use strict";

var request = require("request");

function Genius(accessToken) {
  this.accessToken = accessToken;
}

Genius.prototype.getArtist = function(artistId, callback) {
  var options = {
    url: "https://api.genius.com/artists/" + artistId,
    headers: { "Authorization": "Bearer " + this.accessToken },
    qs: { "text_format": "plain" }
  };
  request(options, function(error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

module.exports = Genius;