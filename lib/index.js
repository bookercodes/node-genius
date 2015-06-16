"use strict";

var request = require("request");

function Genius(accessToken) {
  this.accessToken = accessToken;

  function _makeRequest(options, callback) {
    request(options, function(error, response) {
      if (response.statusCode > 399) {
        callback(response.body);
        return;
      }
      callback(null, response.body);
    });
  }

  this.getArtist = function(artistId, options, callback) {
    if (typeof options === "function") {
      callback = options;
    }
    
    var request = {
      url: "https://api.genius.com/artists/" + artistId,
      headers: { "Authorization": "Bearer " + this.accessToken },
      qs: params
    };
    _makeRequest(request, callback)
  };

  this.search = function(query, callback) {
    var options = {
      url: "https://api.genius.com/search",
      headers: { "Authorization": "Bearer " + this.accessToken },
      qs: { "q": query }
    };
    _makeRequest(options, callback);
  };

  this.getArtistSongs = function(artistId, callback) {
    var options = {
      url: "https://api.genius.com/artists/" + artistId + "/songs",
      headers: { "Authorization": "Bearer " + this.accessToken },
      qs: { "text_format": "plain" }
    };
    _makeRequest(options, callback);
  };

  this.getSong = function(songId, callback) {
    var options = {
      url: "https://api.genius.com/songs/" + songId,
      headers: { "Authorization": "Bearer " + this.accessToken },
      qs: { "text_format": "plain" }
    };
    _makeRequest(options, callback);
  };

  this.getAnnotation = function(annotationId, callback) {
    var options = {
      url: "https://api.genius.com/annotations/" + annotationId,
      headers: { "Authorization": "Bearer " + this.accessToken },
      qs: { "text_format": "plain" }
    };
    _makeRequest(options, callback);
  };

  this.createAnnotation = function(annotation, callback) {
    var options = {
      url: "https://api.genius.com/annotations/",
      headers: { "Authorization": "Bearer " + this.accessToken },
      json: true,
      method: "POST",
      body: annotation
    };
    _makeRequest(options, callback);
  };

  this.deleteAnnotation = function (annotationId, callback) {
    var options = {
      url: "https://api.genius.com/annotations/" + annotationId,
      headers: { "Authorization": "Bearer " + this.accessToken },
      method: "DELETE",
    };
    _makeRequest(options, callback);
  };

  this.upvoteAnnotation = function (annotationId, callback) {
    var options = {
      url: "https://api.genius.com/annotations/" + annotationId + "/upvote",
      headers: { "Authorization": "Bearer " + this.accessToken },
      method: "PUT",
    };
    _makeRequest(options, callback);
  };

  this.unvoteAnnotation = function (annotationId, callback) {
    var options = {
      url: "https://api.genius.com/annotations/" + annotationId + "/unvote",
      headers: { "Authorization": "Bearer " + this.accessToken },
      method: "PUT",
    };
    _makeRequest(options, callback);
  };

  this.downvoteAnnotation = function (annotationId, callback) {
    var options = {
      url: "https://api.genius.com/annotations/" + annotationId + "/downvote",
      headers: { "Authorization": "Bearer " + this.accessToken },
      method: "PUT",
    };
    _makeRequest(options, callback);
  };

  this.downvoteAnnotation = function (annotationId, callback) {
    var options = {
      url: "https://api.genius.com/annotations/" + annotationId + "/downvote",
      headers: { "Authorization": "Bearer " + this.accessToken },
      method: "PUT",
    };
    _makeRequest(options, callback);
  };

  this.getMe = function (callback) {
    var options = {
      url: "https://api.genius.com/account",
      headers: { "Authorization": "Bearer " + this.accessToken }
    };
    _makeRequest(options, callback);
  };
}

module.exports = Genius;