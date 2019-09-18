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

    it('should load a list',()=>
    {

        expect(scope.list()).toBeDefined();       

    });

    describe('When adding a comment', () => {
        
    });



});