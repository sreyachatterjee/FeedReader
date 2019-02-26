
$(function() {

   /* It is a test suite that contains related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* This tests to make sure that the allFeeds variable has been defined and that it is not
         * empty. 
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a URL defined         * 
         * and that the URL is not empty.
         */

        it('url is defined', function(){
            for(let feed of allFeeds){
                expect (feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined', function(){
            for(let feed of allFeeds){
                expect (feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /* This is a test suite named "The menu" */
    
    describe('The Menu', function(){

        /* This test ensures the menu element is hidden by default and perform the
         * hiding/showing of the menu element.
         */

        let body = document.querySelector('body');

        it('the menu element is hidden',function(){
            expect (body.classList.contains('menu-hidden')).toBe(true);
        });

         /* This test ensures menu icon toggle to change visibility for each click */

        it('visibility change of menu when icon is clicked',function(){
            let icon = document.querySelector('.menu-icon-link');
            icon.click();
            expect (body.classList.contains('menu-hidden')).toBe(false);
            icon.click();
            expect (body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* This is a test suite named "Initial Entries" */

    describe('Initial Entries', function(){

        /* This test ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function (done){
            loadFeed(0,function(){
                done();
            });
        });

        it('has at least one entry element within the feed container', function(){
            let container = document.querySelector('div.feed');
            let feedEntry = container.querySelectorAll('article.entry');
            expect(feedEntry.length).toBeGreaterThan(0);
        });
    });

    /* This is a test suite named "New Feed Selection" */

    describe('New Feed Selection', function(){
    
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
        let previousFeed, currentFeed;
      
        beforeEach(function(done){
            loadFeed(0, function(){
                previousFeed = document.querySelector('div.feed').innerHTML;
               
                loadFeed(1, function(){
                    currentFeed = document.querySelector('div.feed').innerHTML;
                    
                done();

                });
            });       
        });    

        it('current feed is different than the previous feed', function(){
            expect(previousFeed).not.toBe(currentFeed);
        });
    });
    
}());
