angular.module('commentApp',[])
.controller("commentController", function($scope){
    $scope.comments = [];

    $scope.add = (comment) =>{
        if(comment && comment !== ""){
            $scope.comments.push(new commentObject(comment));     
        }
    }

    $scope.like = (index) =>{
        var selectedComment = $scope.comments[index];                
        selectedComment.increment();
    }

    $scope.getLikes = (index) => {
        var selectedComment = $scope.comments[index];
        return  selectedComment.getLikes();       
    }

    class commentObject {
        constructor(message) {
            this.message = message;
            this.likes = 0;
            return {
                increment: () => {
                    this.likes += 1;
                },
                getLikes: () => {
                    return this.likes;
                }
            };
        }
    }
    
});