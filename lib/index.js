"use strict";

var request = require("request");

function Genius(accessToken) {

  function _makeRequest(options, callback) {
    var baseRequest = request.defaults({
      baseUrl: "https://api.genius.com",
      headers: { "Authorization": "Bearer " + accessToken }
    });

    baseRequest(options, function(error, response) {
      if (response.statusCode > 399) {
        callback(response.body);
        return;
      }
      callback(null, response.body);
    });
  }

  /**
   * Search genius.com.
   * @param  {String}   query    The term to search for.
   * @param  {Function} callback The function to call once the search results are available.
   * @see https://docs.genius.com/#search-h2
   * @example
   * search("Kendrick Lamar", function (error, searchResults) { });
   */
  this.search = function(query, callback) {
    var request = {
      url: "https://api.genius.com/search",
      qs: { "q": query }
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up an artist.
   * @param  {String}   artistId The artist's id.
   * @param  {Object}   options  The possible options e.g. text_format.
   * @param  {Function} callback The function to call once the artist data is available.
   * @see https://docs.genius.com/#artists-h2
   * @example
   * getArtist("16775", function (error, artist) { });
   */
  this.getArtist = function(artistId, options, callback) {
    if (typeof options === "function") {
      callback = options;
    }

    var request = {
      url: "artists/" + artistId,
      qs: options
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up songs by the given artist.
   * @param  {String}   artistId The artist's id.
   * @param  {Object}   options  The possible options e.g text_format, page, per_page
   * @param  {Function} callback The function to call once the collection of songs is available.
   * @see https://docs.genius.com/#artists-h2
   * @example
   * getArtistSongs("16775", {"page": "1", "per_page": 10}, function (error, songs) { });
   */
  this.getArtistSongs = function(artistId, options, callback) {
    if (typeof options === "function") {
      callback = options;
    }

    var request = {
      url: "artists/" + artistId + "/songs",
      qs: options
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up a song on Genius.
   * @param  {[type]}   songId   The song's id.
   * @param  {Object}   options  The possible options e.g. text_format
   * @param  {Function} callback The function to call once the song data is available.
   * @see https://docs.genius.com/#songs-h2
   * @example
   * getSong("378195", function (error, song) { });
   */
  this.getSong = function(songId, options, callback) {
    if (typeof options === "function") {
      callback = options;
    }

    var request = {
      url: "songs/" + songId,
      qs: options
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up an annotation.
   * @param  {String}   annotationId The annotation's id.
   * @param  {Object}   options      The possible options e.g. text_format
   * @param  {Function} callback     The function to call once the song data is available.
   * @see https://docs.genius.com/#annotations-h2
   * @example
   * getAnnotation("6737668", function (error, annotation) { });
   */
  this.getAnnotation = function(annotationId, options, callback) {
    if (typeof options === "function") {
      callback = options;
    }

    var request = {
      url: "annotations/" + annotationId,
      qs: options
    };
    _makeRequest(request, callback);
  };

  this.createAnnotation = function(annotation, callback) {
    var request = {
      url: "annotations",
      json: true,
      method: "POST",
      body: annotation
    };
    _makeRequest(request, callback);
  };

  this.deleteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId,
      method: "DELETE",
    };
    _makeRequest(request, callback);
  };

  this.upvoteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId + "/upvote",
      method: "PUT",
    };
    _makeRequest(request, callback);
  };

  this.unvoteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId + "/unvote",
      method: "PUT",
    };
    _makeRequest(request, callback);
  };

  this.downvoteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId + "/downvote",
      method: "PUT",
    };
    _makeRequest(request, callback);
  };

  this.downvoteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId + "/downvote",
      method: "PUT",
    };
    _makeRequest(request, callback);
  };

  this.getMe = function (options, callback) {
    if (typeof options === "function") {
      callback = options;
    }

    var request = {
      url: "account",
      qs: options
    };
    _makeRequest(request, callback);
  };
}

module.exports = Genius;