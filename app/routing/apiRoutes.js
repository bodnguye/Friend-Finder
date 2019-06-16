// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
const friendsArray = require("../data/friends");


 // ROUTING
module.exports = function(app) {
  
    // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) { 
    let userInput = req.body;
    // console.log('userInput = ' + JSON.stringify(userInput));

    // initital value for comparison 
    let lowestDifference = 4444;

    // index with the lowest, closest difference
    let lowestIndex = 0;

    // loop through friendsArray
    for (let i = 0; i < friendsArray.length; i++) {
        let tempDifference = 0;

        // loop through the user's score
        for (let j = 0; j < userInput.scores.length; j++) {
            tempDifference += Math.abs(userInput.scores[j] - friendsArray[i].scores[j])
        }

        // if this userscore difference is lower than the current lowest, 
        // assign the index of the friend and reassign the lowest difference.
        if (tempDifference < lowestDifference) {
            lowestIndex = i;
            lowestDifference = tempDifference;
        }
    }

     // Add the new user to the friends object
     friendsArray.push(userInput);
     // Send the matching user back to our form.
     res.json(friendsArray[lowestIndex]);

  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsArray.length = 0;

    res.json({ ok: true });
  });
};
