var app = angular.module("wiki",['ui.router']);
app.config(function($stateProvider){
  $stateProvider

  .state({
    name: 'index',
    url:'/',
    templateUrl:'index.html',
    controller: 'pages_controller'
  })

  .state({
    name: 'page_view',
    url:'/{page_name}',
    templateUrl:'page_view.html',
    controller: 'pages_controller'
  })

  .state({
    name: 'page_edit',
    url:'/{page_name}/edit',
    templateUrl:'page_edit.html',
    controller: 'edit_page_controller'
  });

  $urlRouterProvider.otherwise('/');
});

app.controller('pages_controller',function($scope,$stateParams,$state){

    $scope.pageName = $stateParams.page_name;
    $scope.page = pages[$scope.pageName];
});

app.controller('edit_page_controller',function($scope,$stateParams,$state){

  $scope.pageName = $stateParams.page_name;
  $scope.page = pages[$scope.pageName];

  if(!$scope.page){
    var page = new WikiPage('pageName','');
    pages[$scope.pageName] = page;
    $scope.page = page;
  }

});

function WikiPage(title, content) {
  this.title = title;
  this.content = content;
}

var pages = {
  Python: new WikiPage('Python', 'Python is a fun to use programming language. It is great for beginners.'),
  HTML: new WikiPage('HTML', 'HTML is the markup language used for making pages on the world wide web.')
};
