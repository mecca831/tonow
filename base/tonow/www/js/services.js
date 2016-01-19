angular.module('tonow.services', ['ionic'])

.factory('OverviewService', function () {
    return {
        getNotes: function() {
          return [
            {
              "day": "12-17-2015",
              "title": "12-17-2015",
              "tasks": [
                {"text": "Doing the dishes", "state": 1},
                {"text": "Shower less", "state": 0}
              ]
            },
            {
              "day": "12-18-2015",
              "title": "12-18-2015",
              "tasks": [
                {"text": "Clean bathroom", "state": 0},
                {"text": "Make bread", "state": 1},
                {"text": "Something w/ someone", "state": 0}
              ]
            },
            {
              "day": "12-19-2015",
              "title": "12-19-2015",
              "tasks": [
                {"text": "Buy car wipes", "state": 1},
                {"text": "Shower", "state": 0}
              ]
            },
            {
              "day": "12-20-2015",
              "title": "Today | 12-20-2015",
              "tasks": [
                {"text": "Doing the dishes", "state": 1},
                {"text": "Shower less", "state": 0}
              ]
            },
            {
              "day": "12-21-2015",
              "title": "12-21-2015",
              "tasks": [
                {"text": "Doing the dishes", "state": 1},
                {"text": "Shower less", "state": 0}
              ]
            },
            {
              "day": "12-22-2015",
              "title": "12-22-2015",
              "tasks": [
                {"text": "Clean bathroom", "state": 0},
                {"text": "Make bread", "state": 1},
                {"text": "Something w/ someone", "state": 0}
              ]
            },
            {
              "day": "12-23-2015",
              "title": "12-23-2015",
              "tasks": [
                {"text": "Buy car wipes", "state": 1},
                {"text": "Shower", "state": 0}
              ]
            }
          ];
        }
    }
})

.factory('LoginService', function () {
  return {
      performLogin: function(username, password) {
          authObj = {
            "result": false,
            "lastLogin": ""
          }
          // Query DB
          userObj = {
            "username": username,
            "password": "test"
          }
          //

          if (userObj && password == userObj.password) {
            authObj.result = true;
          }

          return authObj;
      }
  }
});
