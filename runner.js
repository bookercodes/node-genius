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
//     "raw_annotatable_url": "http://genius.com/Marianne-moore-marriage-annotated",
//     "fragment": "out of respect for which"
//   }
// };

// geniusClient.createAnnotation(request, function(error, response) {
//   console.log(error);
//   console.log(response);
// });

//https://genius.com/annotations/6898683
// geniusClient.deleteAnnotation("6898683", function (error, response) {
//   console.log("error", error );
//   console.log("response", response );
// });

// geniusClient.upvoteAnnotation("6757505", function (error, response) {
//   console.log("error", error );
//   console.log("response", response );
// });

geniusClient.unvoteAnnotation("5088421", function (error, response) {
  console.log("error", error );
  console.log("response", response );
});