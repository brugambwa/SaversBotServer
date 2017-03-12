var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

router.route('/savings')
	.get(function(req, res, next) {
		console.log("/webhook Verify Token");

    	// Facebook verification

    	console.log("Verify Token sent");
    	if (req.query['hub.mode'] === 'subscribe')
    	{
	        console.log("Subscribe Verify Token, check: " + req.query['hub.verify_token']);
	        if (req.query['hub.verify_token'] === 'YOUR_TOKEN')
	        {
	            console.log("Validating webhook");
	            res.send(req.query['hub.challenge'])
	        }
	        else
	        {
	            console.log("Oh No, invalid Verify Token: " + req.query['hub.verify_token']);
	            res.send("Error, wrong token.");
	        }
	    }
	    else
	    {
	        console.log("not subscribing");
	        res.send('Hello world')
	    }
	})






router.route('/savings/register')
	.post(function(req, res, next){
  		var fbID = req.body.fb_id;
  		var fName = req.body.fb_first_name;
  		var lName = req.body.fb_last_name;
  		var telephone = req.body.user_number;

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
	})

router.route('/savings/checkbalance')
	.get(function(req, res, next){
		console.log(req.body);
		res.json({message: 'Check Balance Request'});
	})

router.route('/savings/requestloan')
	.get(function(req, res, next){
		console.log(req.body);
		res.json({message: 'Request Loan'});
	})

router.route('/savings/processloanrequest')
	.post(function(req, res, next){
		console.log(req.body);
		res.json({message: 'Process Loan Request'});
	})

router.route('/savings/contribution')
	.post(function(req, res, next){
		console.log(req.body);
		res.json({message: 'Make Payment'});
	})

module.exports = router;