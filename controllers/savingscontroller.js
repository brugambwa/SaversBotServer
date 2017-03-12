const request = require('request');
var mongoose = require('mongoose');

const PAGE_ACCESS_TOKEN = "EAAIyrDyMCOkBAN9VdNlXJjqgSLZAb0SpLDHNFv34AtSvUrs98OnayZBtxknNZCCqSKZBzPuMIMP2Ea6ROIPN13VwGtvmsZB8ds9DsrJXV8PdZAdbnZCYk77tM9RMZCBOkG3xF989KGHMA0Nad9Dw1QYednZAlTq9ZAIiROnDGcjMkpTQZDZD"

module.exports = {
	
	registerUser: function(req, res)
	{
		var fbID = req.body.fb_id;
  		var fName = req.body.b_first_name;
  		var lName = req.body.b_last_name;
  		var telephone = req.body.user_number;

  		mongoose.model('Member').create({
            fbID : fbID,
            fName : fName,
            lName :lName,
            telephone: telephone
        }, function (err, member) {
              if (err) {
                  console.log("Couldnot create record on the DB.");
              } else {
                  console.log("Created.");
              }
        })
	}
}