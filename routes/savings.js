var express = require('express');
var request = require('request');
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
	        res.send('Hello world')
	    }
	})

router.route('/savings/register')
	.post(function(req, res, next){

	})

router.route('/savings/checkbalance')
	.get(function(req, res, next){
		var data = req.body;

	    // Make sure this is a page subscription
	    if (data.object === 'page')
	    {
	        // Iterate over each entry - there may be multiple if batched
	        data.entry.forEach(function(entry)
	        {
		        var pageID = entry.id;
		        var timestamp = entry.time;

		        // Iterate over each messaging event
		        entry.messaging.forEach(function(event)
		        {
		            if (event.message)
		            {
		                if (event.message.is_echo)
		                      console.log("Bot received message written event");
		                else
		                      console.log("Bot received message " + event.message.text);
		                      //functs.receivedMessage(event);
		            }
		            else  if (event.delivery)
		              console.log("Bot received delivery event");
		            else  if (event.read)
		              console.log("Bot received message-was-read event");
		            else  if (event.postback)
		              functs.doPostback(event);
		            else
		              console.log("Bot received unknown EVENT: ");
		          });
	        });
	    }
	    else
	    {
	      console.log("Bot received unknown OBJECT (not page): ", data.object);
	    }

	    // All good, sent response status 200

	    res.sendStatus(200)
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