
var friendsData = require('../data/friends.js');


function apiRoutes(app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  app.post('/api/friends', function (req, res) {

    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }
    newFriend.scores = scoresArray;


    var arrayOfScores = [];
    for(var i=0; i < friendsData.length; i++){

      var totalDifference = 0;
      for(var j=0; j < newFriend.scores.length; j++){
        totalDifference += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
      }

      arrayOfScores.push(totalDifference);
    }

    var bestMatchedFriend = 0; 
    for(var i=1; i < arrayOfScores.length; i++){
      
      if(arrayOfScores[i] <= arrayOfScores[bestMatchedFriend]){
        bestMatchedFriend = i;
      }

    }

    var bestFriendMatch = friendsData[bestMatchedFriend];



    res.json(bestFriendMatch);



    friendsData.push(newFriend);

  });

}


module.exports = apiRoutes;