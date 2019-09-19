//list of test conditions
//1. defined list for comments
//2. should be able to add to comment list
//3. should be able to like an item in the list
//4. should be able to return like count


describe('When the app is running',()=>{

    var scope = {};
    beforeEach(()=>{
        module('commentApp');
        //inject controller
        inject(($controller)=>{
            $controller('commentController',{$scope:scope});
        });
    })

    it('should have a defined list of comments',()=>
    {
        expect(scope.comments).toBeDefined();
    });

    it('should allow comments to be added to the list', () => {
        const comment = "Angular js DevOps";
        scope.add(comment);
        expect(scope.comments.length).toBe(1);        
    });

    describe('When adding a comment', () => {
        
    });



});