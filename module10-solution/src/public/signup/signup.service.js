(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  var user = {};

  service.setUser = function (userData) {
    service.user = userData;
    // console.log(service.user);
  };

  service.getUser = function () {
    return service.user;
  };

}

})();
