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
		console.log(req.body);
        res.json({ message: 'Savings End Point' });
    })

router.route('/savings/register')
	.post(function(req, res, next){
  		console.log(req.body);
		res.json({message: 'Register User'});
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