var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PAGE_ACCESS_TOKEN = "EAAIyrDyMCOkBAN9VdNlXJjqgSLZAb0SpLDHNFv34AtSvUrs98OnayZBtxknNZCCqSKZBzPuMIMP2Ea6ROIPN13VwGtvmsZB8ds9DsrJXV8PdZAdbnZCYk77tM9RMZCBOkG3xF989KGHMA0Nad9Dw1QYednZAlTq9ZAIiROnDGcjMkpTQZDZD"

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
		// Facebook verification
    	if (req.query['hub.mode'] === 'subscribe')
    	{
	        if (req.query['hub.verify_token'] === 'YOUR_TOKEN')
	        {
	            res.send(req.query['hub.challenge'])
	        }
	        else
	        {
	            res.send("Error, wrong token.");
	        }
	    }
	    else
	    {
	        res.json({message: 'Savers Bot API EndPoints'});
	    }
	})

router.route('/savings/register')
	.post(function(req, res, next){
		console.log(req.body);
		res.json({message: 'Register User'});
	})

router.route('/savings/checkbalance')
	.get(function(req, res, next){
		console.log(req.body);
		res.json({message: 'Check Balance'});
	})

router.route('/savings/requestloan')
	.get(function(req, res, next){
		console.log(req.body);
		res.json({message: 'Process Loan Request'});
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