angular.module('tonow.controllers', ['ionic'])

.controller('OverviewCtrl', function($scope, $state) {
  console.log('OverviewCtrl Executed');
  $scope.hide = false;
  $scope.variable = "Today";
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];
  $scope.cards = [
    {
      "day": "Yesterday",
      "title": "This is yesterday",
      "tasks": [
        {"text": "Doing the dishes", "state": 1},
        {"text": "Shower less", "state": 0}
      ]
    },
    {
      "day": "Today",
      "title": "This is today",
      "tasks": [
        {"text": "Clean bathroom", "state": 0},
        {"text": "Make bread", "state": 1},
        {"text": "Something w/ someone", "state": 0}
      ]
    },
    {
      "day": "Tomorrow",
      "title": "This is tomorrow",
      "tasks": [
        {"text": "Buy car wipes", "state": 1},
        {"text": "Shower", "state": 0}
      ]
    }
  ];

  $scope.addTask = function() {
    console.log('addTask');
    $state.go('task');
  };

  // $scope.go = function(direction) {
  //       $scope.hide = true;
  //       $scope.past = (direction > 0);
  //
  //       $timeout(function() {
  //         $scope.variable = "Today "+direction;
  //         $scope.hide = false;
  //       }, 150);
  // }
})

.controller('TaskCtrl', function($scope) {
  console.log('TaskCtrl');
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];
  
})

.controller('LoginCtrl', function($scope, $state) {
  console.log('LoginCtrl');
  $scope.tasks = ["Clean bathroom", "Make bread", "Something w/ someone"];

  $scope.login = function(username, password) {
    console.log(username + password);
    if (username == 'test' && password == 'test') {
      // authentication
      $state.go('overview');
    } else {
      $state.go('login');
    }
  };
  
})
