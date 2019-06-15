// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
const friends = require("../data/friends");


 // ROUTING
module.exports = function(app) {
  
    // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) { 

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = 0;

    res.json({ ok: true });
  });
};
