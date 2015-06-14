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

Genius.prototype.search = function(query, callback) {
  var options = {
    url: "https://api.genius.com/search",
    headers: { "Authorization": "Bearer " + this.accessToken },
    qs: { "q": query }
  };
  request(options, function(error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

Genius.prototype.getSong = function(songId, callback) {
  var options = {
    url: "https://api.genius.com/songs/" + songId,
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