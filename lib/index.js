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

Genius.prototype.getArtistSongs = function(artistId, callback) {
  var options = {
    url: "https://api.genius.com/artists/" + artistId + "/songs",
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

Genius.prototype.getAnnotation = function(annotationId, callback) {
  var options = {
    url: "https://api.genius.com/annotations/" + annotationId,
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

Genius.prototype.createAnnotation = function(annotation, callback) {
  var options = {
    url: "https://api.genius.com/annotations/",
    headers: { "Authorization": "Bearer " + this.accessToken },
    json: true,
    method: "POST",
    body: annotation
  };
  request(options, function (error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

Genius.prototype.deleteAnnotation = function (annotationId, callback) {
  // throw "This method has been disabled because I cannot figure out why the Genius API is not working. It denies access no matter what";
  var options = {
    url: "https://api.genius.com/annotations/" + annotationId,
    headers: { "Authorization": "Bearer " + this.accessToken },
    method: "DELETE",
  };
  request(options, function (error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

Genius.prototype.upvoteAnnotation = function (annotationId, callback) {
  var options = {
    url: "https://api.genius.com/annotations/" + annotationId + "/upvote",
    headers: { "Authorization": "Bearer " + this.accessToken },
    method: "PUT",
  };
  request(options, function (error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

Genius.prototype.unvoteAnnotation = function (annotationId, callback) {
  var options = {
    url: "https://api.genius.com/annotations/" + annotationId + "/unvote",
    headers: { "Authorization": "Bearer " + this.accessToken },
    method: "PUT",
  };
  request(options, function (error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

Genius.prototype.downvoteAnnotation = function (annotationId, callback) {
  var options = {
    url: "https://api.genius.com/annotations/" + annotationId + "/downvote",
    headers: { "Authorization": "Bearer " + this.accessToken },
    method: "PUT",
  };
  request(options, function (error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

Genius.prototype.downvoteAnnotation = function (annotationId, callback) {
  var options = {
    url: "https://api.genius.com/annotations/" + annotationId + "/downvote",
    headers: { "Authorization": "Bearer " + this.accessToken },
    method: "PUT",
  };
  request(options, function (error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};

Genius.prototype.getMe = function (callback) {
  var options = {
    url: "https://api.genius.com/account",
    headers: { "Authorization": "Bearer " + this.accessToken }
  };
  request(options, function (error, response) {
    if (response.statusCode > 399) {
      callback(response.body);
      return;
    }
    callback(null, response.body);
  });
};


module.exports = Genius;