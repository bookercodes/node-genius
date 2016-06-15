![](http://images.rapgenius.com/bdba3ee0c5a1e954cdc3668f4c6a72a7.1000x238x1.png)

*Node client for the [**Genius API**](https://docs.genius.com/).*

##Installation

```
$ npm install --save node-genius
```

##Usage

```JavaScript
// Instantiate a Genius instance:
var Genius = require("node-genius");
var geniusClient = new Genius(process.env.GENIUS_ACCESS_TOKEN);

// Call functions on that instance:
geniusClient.getSong("378195", function (error, song) {
  if (error)
    console.error("Whops. Something went wrong:", error);
  else
    console.log("Hoorah. Here is the song: ", song);
});
```

##Examples
```JavaScript
var Genius = require("node-genius");
var geniusClient = new Genius(process.env.GENIUS_ACCESS_TOKEN);

// Look up an annotation.
geniusClient.getAnnotation("6737668", function (error, annotation) {
});

// Create an annotation.
geniusClient.createAnnotation({
  "annotation": {
    "body": {
      "markdown": "Genius is **awesome!**"
    }
  },
  "referent": {
    "raw_annotatable_url":
      "http://genius.com/Marianne-moore-marriage-annotated",
    "fragment": "out of respect for which"
  }
}, function(error, annotation) {

});

// Update an annotation.
geniusClient.updateAnnotation("123", {
  "annotation": {
    "body": {
      "markdown": "This is an updated annotation"
    }
  }
}, function(error, annotation) {

});

// Permanently delete an annotation.
geniusClient.deleteAnnotation("123", function (error, response) {
});

// Upvote an annotation.
geniusClient.upvoteAnnotation("6737668", function (error, response) {
});

// Removes vote (up or down) for the annotation.
geniusClient.unvoteAnnotation("6737668", function (error, response) {
});

// Downvote an annotation.
geniusClient.downvoteAnnotation("6737668", function (error, response) {
});

// Look up a song.
geniusClient.getSong("378195", function (error, song) {
});

// Look up an artist.
geniusClient.getArtist("16775", {"text_format": "plain"}, function (error, artist) {
});

// Look up songs by the given artist.
geniusClient.getArtistSongs("16775", {"page": "1", "per_page": "10"},
  function (error, songs) {
  });

// Look up an album.
geniusClient.getAlbum("104614", function (error, album) {
});

// Look up all referents/annotations for a song.
geniusClient.getReferents({"song_id": "378195", "text_format": "plain"}, function (error, results) {
});

// Search Genius.
geniusClient.search("Kendrick Lamar", function (error, results) {
});

// Look up a web page to which annotations may be attached.
geniusClient.getWebPage({"raw_annotatable_url": "https://docs.genius.com"},
  function(error, page) {
  });

// Look up information about the currently authenticated user.
geniusClient.getMe(function (error, account) {
});

```
