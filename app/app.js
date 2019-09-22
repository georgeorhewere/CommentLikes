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

    var commentObject = function(message){        
            this.message = message;
            this.likes = 0;
    }

    commentObject.prototype.increment = function(){
                this.likes += 1;     };

    commentObject.prototype.getLikes = function(){
        return this.likes;  }


    
});