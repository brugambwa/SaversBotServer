var mongoose = require('mongoose');  

var memberSchema = new mongoose.Schema({  
  fbID: String,
  fName: String,
  lName: String,
  telephone: String
});

module.exports = mongoose.model('Member', memberSchema);