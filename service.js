var app = angular.module('userProfiles');

app.service('mainService', function ($http) {

  this.getUsers = function (pageNum) {
    return $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=' + pageNum
    }).then(function (response) {
      return response.data;
    });
  };
});