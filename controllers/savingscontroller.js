const request = require('request');
var mongoose = require('mongoose');

const PAGE_ACCESS_TOKEN = "EAAIyrDyMCOkBAN9VdNlXJjqgSLZAb0SpLDHNFv34AtSvUrs98OnayZBtxknNZCCqSKZBzPuMIMP2Ea6ROIPN13VwGtvmsZB8ds9DsrJXV8PdZAdbnZCYk77tM9RMZCBOkG3xF989KGHMA0Nad9Dw1QYednZAlTq9ZAIiROnDGcjMkpTQZDZD"

module.exports = {
	
	registerUser: function(data)
	{

		var fbID = data.fb_id;
  		var fName = data.fb_first_name;
  		var lName = data.fb_last_name;
  		var telephone = data.user_number;

  		mongoose.model('Member').create({
            fbID : fbID,
            fName : fName,
            lName :lName,
            telephone: telephone
        }, function (err, member) {
              if (err) {
                  res.send("Couldnot create record on the DB.");
              } else {
                  res.format({
                    //JSON response will show the newly created citizen
                    json: function(){
                        res.json(member);
                    }
                });
              }
        })
	}
}