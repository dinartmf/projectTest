var User = require('../user');

module.exports = function() {

	setUp: function(callback){

		this.test1 = new User('test1@test2.com', 'Aa234567!');
	},
	informarUserFormatacao1252: function(test) {

		this.test1.equal(this.test1.username, 'test1%40teste2.com');
		this.test1.equal(this.test1.password, 'Aa234567%21');
	},
	tearDown: function (callback) {

		this.test1 = undefined;
	}
};
