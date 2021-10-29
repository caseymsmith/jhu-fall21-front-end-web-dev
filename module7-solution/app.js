(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .filter('itemTotal', itemTotalFilter);

  function ShoppingListCheckOffService() {
    var service = this;

    service.items = [
    { name: "cookies", quantity: 10, pricePerItem: 2},
    { name: "chips", quantity: 1, pricePerItem: 4},
    { name: "apples", quantity: 4, pricePerItem: 1},
    { name: "cupcakes", quantity: 8, pricePerItem: 5},
    { name: "frozen pizza", quantity: 2, pricePerItem: 7}
    ];

    service.itemsAlreadyBought = [];

    service.buyItem = function (index, items) {
      var bought = {
        name: '',
        quantity: '',
        pricePerItem: ''
      }

      bought.name = items[index].name;
      bought.quantity = items[index].quantity;
      bought.pricePerItem = items[index].pricePerItem;

      items.splice(index, 1);
      service.itemsAlreadyBought.push(bought);
    };

  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.items;

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex, toBuy.items);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.itemsAlreadyBought = ShoppingListCheckOffService.itemsAlreadyBought;
  };

  function itemTotalFilter(){
    return function(item) {
      return '$$$' + item.quantity * item.pricePerItem
    }
  }

})();
