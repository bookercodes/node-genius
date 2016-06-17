"use strict";

var request = require("request");

function Genius(accessToken) {

  if (!accessToken) {
    throw new Error("You need to supply an access token.");
  }

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
   * @param  {Function} callback The function to call once the search results
   *  are available.
   * @see https://docs.genius.com/#search-h2
   * @example
   * search("Kendrick Lamar", function (error, searchResults) { });
   */
  this.search = function(query, callback) {
    var request = {
      url: "/search",
      qs: { "q": query }
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up an artist.
   * @param  {String}   artistId The artist's id.
   * @param  {Object}   options  The possible options e.g. text_format.
   * @param  {Function} callback The function to call once the artist data is
   *  available.
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
   * @param  {Object}   options  The possible options e.g text_format, page,
   * per_page
   * @param  {Function} callback The function to call once the collection of
   *  songs is available.
   * @see https://docs.genius.com/#artists-h2
   * @example
   * getArtistSongs(
   *   "16775",
   *   {"page": "1", "per_page": 10},
   *   function (error, songs) { });
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
   * Look up an album on Genius.
   * @param  {String}   albumId  The album's id.
   * @param  {Object}   options  The possible options e.g. text_format
   * @param  {Function} callback The function to call once the album data is
   *  available.
   * @example
   * getAlbum("104614", function (error, album) { });
   */
  this.getAlbum = function(albumId, options, callback) {
    if (typeof options === "function") {
      callback = options;
    }

    var request = {
      url: "albums/" + albumId,
      qs: options
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up a song on Genius.
   * @param  {String}   songId   The song's id.
   * @param  {Object}   options  The possible options e.g. text_format
   * @param  {Function} callback The function to call once the song data is
   *  available.
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
   * Look up all referents/annotations associated with a song on Genius.
   * You can pass in song_id, created_by_id, or web_page_id, as well as text_format
   * @param  {Object}   options  The possible options e.g. text_format
   * @param  {Function} callback The function to call once the song data is
   *  available.
   * @see https://docs.genius.com/#referents-h2
   * @example
   * getReferents({song_id: 378195, text_format: 'plain'}, function (error, song) { });
   */
  this.getReferents = function(options, callback) {

    var request = {
      url: "/referents",
      qs: options
    };
    _makeRequest(request, callback);
  }

  /**
   * Look up an annotation.
   * @param  {String}   annotationId The annotation's id.
   * @param  {Object}   options      The possible options e.g. text_format
   * @param  {Function} callback     The function to call once the annotation is
   *  available.
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

  /**
   * Create an annotation.
   * @param  {Object}   annotation The annotation to create.
   * @param  {Function} callback   The function to call once the annotation has
   *  been created.
   * @see https://docs.genius.com/#annotations-h2
   * @example
   * createAnnotation({
   *   "annotation": {
   *     "body": {
   *       "markdown": "Genius is **awesome!**"
   *     }
   *   },
   *   "referent": {
   *     "raw_annotatable_url":
  *        "http://genius.com/Marianne-moore-marriage-annotated",
   *     "fragment": "out of respect for which"
   *   }
   * }, function (error, createdAnnotation) { });
   */
  this.createAnnotation = function(annotation, callback) {
    var request = {
      url: "annotations",
      json: true,
      method: "POST",
      body: annotation
    };
    _makeRequest(request, callback);
  };

  /**
   * Update an annotation.
   * @param  {Object}   annotation The annotation to update.
   * @param  {Function} callback   The function to call once the annotation has
   *  been updated.
   * @see https://docs.genius.com/#annotations-h2
   * @example
   * createAnnotation({
   *   "annotation": {
   *     "body": {
   *       "markdown": "This is an updated annotation."
   *     }
   *   }
   * }, function (error, updatedAnnotation) { });
   */
  this.updateAnnotation = function(annotationId, annotation, callback) {
    var request = {
      url: "annotations/" + annotationId,
      json: true,
      method: "PUT",
      body: annotation
    };
    _makeRequest(request, callback);
  };

  /**
   * Permanently delete annotation.
   * @param  {String}   annotationId The annotation's id.
   * @param  {Function} callback     The function to call once the annotation
   *  has been deleted.
   * @see https://docs.genius.com/#annotations-h2
   * @example
   * deleteAnnotation("123", function (error, response) { });
   */
  this.deleteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId,
      method: "DELETE",
    };
    _makeRequest(request, callback);
  };

  /**
   * Upvote an annotation.
   * @param  {String}   annotationId The annotation's id.
   * @param  {Function} callback     The function to call once the annotation
   *  has been upvoted.
  *  @see https://docs.genius.com/#annotations-h2
   * @example
   * upvoteAnnotation("6737668", function (error, response) { });
   */
  this.upvoteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId + "/upvote",
      method: "PUT",
    };
    _makeRequest(request, callback);
  };

  /**
   * Removes vote (up or down) for the annotation.
   * @param  {String}   annotationId The annotation's id.
   * @param  {Function} callback     The function to call once the annotation
   *  has been unvoted.
   * @see https://docs.genius.com/#annotations-h2
   * @example
   * unvoteAnnotation("6737668", function (error, response) { });
   */
  this.unvoteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId + "/unvote",
      method: "PUT",
    };
    _makeRequest(request, callback);
  };

  /**
   * Downvote an annotation.
   * @param  {String}   annotationId The annotation's id.
   * @param  {Function} callback     The function to call once the annotation
   *  has been downvoted.
   * @see https://docs.genius.com/#annotations-h2
   * @example
   * downvoteAnnotation("6737668", function (error, response) { });
   */
  this.downvoteAnnotation = function (annotationId, callback) {
    var request = {
      url: "annotations/" + annotationId + "/downvote",
      method: "PUT",
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up a web page to which annotations may be attached.
   * @param  {Object}   options  The possible options e.g. raw_annotatable_url
   * @param  {Function} callback The function to call once information about
   *  the web page is available.
   * @see  https://docs.genius.com/#web_pages-h2
   * @example
   * getWebPage({"raw_annotatable_url": "https://docs.genius.com"},
   *   function(error, page) {});
   */
  this.getWebPage = function (options, callback) {
    var request = {
      url: "web_pages/lookup",
      qs: options
    };
    _makeRequest(request, callback);
  };

  /**
   * Look up information about the currently authenticated user.
   * @param  {Object}   options  The possible options e.g. text_format
   * @param  {Function} callback The function to call once information about
   *  the user is available.
   * @see  https://docs.genius.com/#account-h2
   * @example
   * getMe(function(error, accountData) { });
   */
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
