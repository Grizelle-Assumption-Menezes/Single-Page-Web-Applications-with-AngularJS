(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	
	function ToBuyController(ShoppingListCheckOffService) {
	  var toBuy = this;
	  toBuy.items = ShoppingListCheckOffService.gettoBuy();
	  toBuy.buy = function(index) {
		ShoppingListCheckOffService.buyItem(index);
	  };
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
	  var bought = this;
	  bought.items = ShoppingListCheckOffService.getbought();

	}

	function ShoppingListCheckOffService() {
	  var service = this;
	  var toBuy = [
		{ name: "eggs", quantity: 6 },
		{ name: "fish", quantity: 2 },
		{ name: "cookies", quantity: 10 },
		{ name: "milk", quantity: 2 },
		{ name: "chips", quantity: 4 },
		{ name: "coke", quantity: 3 }
		];

	  var bought = [];

	  service.buyItem = function(index) {
		bought.push(toBuy[index]);
		toBuy.splice(index, 1);
	  };

	  service.gettoBuy = function () {
		return toBuy;
	  };

	  service.getbought = function () {
		return bought;
	  };
	}

})();