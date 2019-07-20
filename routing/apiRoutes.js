var people = require('../data/people.js');

module.exports = function (app){
    app.get('/api/people', function(req,res){
       return res.json(people);
    });

    app.post('/api/people', function(req,res){
        people.push(req.body)
        res.end();
})
    
}
    