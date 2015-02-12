var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true, min: 13, max: 99},
	email: {type: String, required: true, uniqueness: true},
	address: {type: String, required: true},
	city: {type: String, required: true},
	state: {type: String, required: true},
	zip: {type: String, required: true},
});

module.exports = mongoose.model('user', schema);