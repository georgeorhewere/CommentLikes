angular.module('commentApp',[])
.controller("commentController", function($scope){
    $scope.comments = [];
    
    $scope.add = (comment) =>{
        $scope.comments.push(comment);     
    }
});