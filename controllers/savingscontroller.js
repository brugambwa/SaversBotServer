const request = require('request')

const PAGE_ACCESS_TOKEN = "EAAT6YvpZCwooBAC8F8vcP9ebvb6CGmDkBJRfN5hi5J30axdqT9VRYn7FuJZC5JewYctYBrfKOa2A9zhcQQLyb9fUT4CfCQ7n8ZAyzHNcpnZBC49nhLzZAmYJ0UCq05k4QzYFfddfC2C5SZAlDOIx53rZAgZCxBfWIZBInAugOIOJnwAZDZD"

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