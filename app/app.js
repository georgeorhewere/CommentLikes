angular.module('commentApp',[])
.controller("commentController", function($scope){
    $scope.comments = [];

    $scope.add = (comment) =>{
        if(comment && comment !== ""){
            $scope.comments.push(comment);     
        }
    }
});