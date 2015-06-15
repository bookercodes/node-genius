var Genius = require("./lib/index.js");

var geniusClient = new Genius(process.env.GENIUS_ACCESS_TOKEN);

// geniusClient.getAnnotation("6898682", function(error, annotation) {
//   console.log(error);
//   console.log(annotation);
// });

// var request = {
//   "annotation": {
//     "body": {
//       "markdown": "hello **cheese!**"
//     }
//   },
//   "referent": {
//     "raw_annotatable_url": "https://docs.genius.com/",
//     "fragment": "annotation"
//   }
// };

// geniusClient.createAnnotation(request, function(error, response) {
//   console.log(error);
//   console.log(response);
// });

// geniusClient.deleteAnnotation("6898682", function (error, response) {
//   console.log("error", error );
//   console.log("response", response );
// });

geniusClient.upvoteAnnotation("6757505", function (error, response) {
  console.log("error", error );
  console.log("response", response );
});