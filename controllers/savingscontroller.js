const request = require('request')

const PAGE_ACCESS_TOKEN = "EAAIyrDyMCOkBAN9VdNlXJjqgSLZAb0SpLDHNFv34AtSvUrs98OnayZBtxknNZCCqSKZBzPuMIMP2Ea6ROIPN13VwGtvmsZB8ds9DsrJXV8PdZAdbnZCYk77tM9RMZCBOkG3xF989KGHMA0Nad9Dw1QYednZAlTq9ZAIiROnDGcjMkpTQZDZD"

module.exports = {
	
	registerUser: function(event)
	{
	    var fromId = event.sender.id;
	    var myId = event.recipient.id;
	    var timestamp = event.timestamp;
	    var message = event.message;

	    console.log("Page %d received message from user %d." , myId, fromId);
	    console.log("    Message: " + JSON.stringify(message));

	    this.processMessage(fromId, myId, timestamp, message)
	}
}