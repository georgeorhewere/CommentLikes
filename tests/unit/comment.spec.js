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
        let comment = "Angular js DevOps";
        scope.add(comment);
        expect(scope.comments.length).toBe(1);
        comment = "Tech Lead is a fun job to do";
        scope.add(comment);
        expect(scope.comments.length).toBe(2);        
    });

    it('should not add empty strings', () => {
        let comment = "";
        scope.add(comment);
        expect(scope.comments.length).toBe(0);        
    });
    it('should not add null', () => {        
        scope.add();
        expect(scope.comments.length).toBe(0);                
    });


    describe('When a comment is liked the like count should increase', () => 
    {
        it('should allow user like', () => 
        {
            let commentId = 1
            scope.like(commentId);
            expect(scope.getLikes(commentId)).toBe(1);            
        });    


        
    });



});