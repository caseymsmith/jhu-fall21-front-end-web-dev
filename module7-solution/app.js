(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 1 },
    { name: "apples", quantity: 4 },
    { name: "cupcakes", quantity: 8 },
    { name: "frozen pizza", quantity: 2 }
    ];

    var itemsAlreadyBought = [];

    service.buyItem = function (itemIndex) {
      var itemBought = itemsToBuy[itemIndex];
      itemsToBuy.splice(itemIndex, 1);
      itemsAlreadyBought.push(itemBought);
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsAlreadyBought = function () {
      return itemsAlreadyBought;
    };

  }
})();
