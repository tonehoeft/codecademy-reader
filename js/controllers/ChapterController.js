app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    $scope.book = data[$routeParams.id];
    $scope.chapter = data[$routeParams.id].chapters[$routeParams.chapterId];


    // If there no more chapters left, go back to the bookshelf view
    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    } else if($routeParams.chapterId <= 0) {
      $scope.prevChapterIndex = "#";
    }
  });

  // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
  $scope.currentBookIndex = parseInt($routeParams.id);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.prevChapterIndex = $scope.currentChapterIndex - 1;
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
  
}]);