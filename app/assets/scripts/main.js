var app = angular.module('esteoliverApp', ['ngRoute', 'ngAnimate']);

app.controller('MainCtrl', [
  '$scope',
  '$interval',
  function ($scope, $interval) {

  }
]);

app.controller('TechCtrl', [
  '$scope',
  '$interval',
  function ($scope, $interval) {

    $scope.tech = {

      // FE

      fe: [
        {
          name: 'AngularJS',
          level: 'Advanced',
          img: 'assets/images/techs/angularjs.png',
        },
        {
          name: 'Bootstrap',
          level: 'Advanced',
          img: 'assets/images/techs/bootstrap.jpg',
        },
        {
          name: 'Bower',
          level: 'Medium',
          img: 'assets/images/techs/bower.png',
        },
        {
          name: 'CSS',
          level: 'Advanced',
          img: 'assets/images/techs/css.png',
        },
        {
          name: 'Grunt',
          level: 'Basic',
          img: 'assets/images/techs/grunt.png',
        },
        {
          name: 'Gulp',
          level: 'Basic',
          img: 'assets/images/techs/gulp.svg',
        },
        {
          name: 'HTML',
          level: 'Advanced',
          img: 'assets/images/techs/html.png',
        },
        {
          name: 'jQuery',
          level: 'Medium',
          img: 'assets/images/techs/jquery.png',
        },
        {
          name: 'JavaScript',
          level: 'Advanced',
          img: 'assets/images/techs/js.png',
        },
        {
          name: 'Sass',
          level: 'Advanced',
          img: 'assets/images/techs/sass.png',
        },
        {
          name: 'TypeScript',
          level: 'Medium',
          img: 'assets/images/techs/ts.png',
        },
        {
          name: 'UI Kit',
          level: 'Medium',
          img: 'assets/images/techs/uikit.svg'
        },
        {
          name: 'Polymer',
          level: 'Medium',
          img: 'assets/images/techs/polymer.png'
        },
        {
          name: 'PHP',
          level: 'Basic',
          img: 'assets/images/techs/php.png'
        }
      ],

      // BE

      be: [
        {
          name: 'Rails',
          level: 'Advanced',
          img: 'assets/images/techs/rails.png',
        },
        {
          name: 'Django',
          level: 'Basic',
          img: 'assets/images/techs/django.png',
        },
        {
          name: 'Node',
          level: 'Medium',
          img: 'assets/images/techs/node.png',
        },
        {
          name: 'Express',
          level: 'Basic',
          img: 'assets/images/techs/express.png',
        }
      ],

      // DATABASE

      db: [
        {
          name: 'PostgreSQL',
          level: 'Medium',
          img: 'assets/images/techs/postgres.png',
        },
        {
          name: 'Oracle',
          level: 'Basic',
          img: 'assets/images/techs/oracle.png',
        },
        {
          name: 'MongoDB',
          level: 'Basic',
          img: 'assets/images/techs/mongo.jpg',
        },
        {
          name: 'neo4j',
          level: 'Basic',
          img: 'assets/images/techs/neo4j.png',
        },
        {
          name: 'MySQL',
          level: 'Basic',
          img: 'assets/images/techs/mysql.png',
        }
      ],

      // OTHERS

      others: [
        {
          name: 'Git',
          level: 'Medium',
          img: 'assets/images/techs/git.png',
        },
        {
          name: 'Heroku',
          level: 'Basic',
          img: 'assets/images/techs/heroku.png',
        },
        {
          name: 'Atlassian',
          level: 'Medium',
          img: 'assets/images/techs/atlassian.png',
        },
        {
          name: 'Trello',
          level: 'Basic',
          img: 'assets/images/techs/trello.png',
        },
        {
          name: 'Slack',
          level: 'Advanced',
          img: 'assets/images/techs/slack.svg',
        },
        {
          name: 'OpenShift',
          level: 'Basic',
          img: 'assets/images/techs/openshift.png',
        },
        {
          name: 'Postman',
          level: 'Basic',
          img: 'assets/images/techs/postman.png',
        }
      ]

    }
  }
]);
