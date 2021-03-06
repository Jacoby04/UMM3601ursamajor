'use strict';

angular.module('umm3601ursamajorApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, $location) {
    if(!Auth.isAdmin()) {
        $location.path('/');
    }

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.isAdmin = Auth.isAdmin;

//    $scope.submissions = [];
//
//    $http.get('/api/submissions').success(function(submissions) {
//        $scope.submissions = submissions;
//    });


    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
