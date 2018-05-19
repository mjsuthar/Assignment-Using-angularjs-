(function(){
	var app = angular.module('gemStore', []);
	var gem = { name: 'Azurite', price: 2.95 };

	app.controller('StoreController', function(){
		this.product = gem;
	});

	app.controller('Practice', function(){
		this.tab = 1;

		this.setTab = function(value){
			this.tab = value;
		};

		this.isSet = function(check){
			return this.tab === check;
		};
	});

	app.controller('AboutDetails',function(){
		this.show = true;

		var today = new Date();
		
		this.age = new Date(today.getFullYear(), today.getMonth(), today.getDate());

		this.work = function(){
			this.show = false
		};

		this.back = function(){
			this.show = true;
		};

		this.output = function(){
			return this.show ;
		};
	});


})();