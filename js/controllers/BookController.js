app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    $scope.currentIndex = parseInt($routeParams.id);
    $scope.currentBookIndex = data[$routeParams.id];
  });
}]);