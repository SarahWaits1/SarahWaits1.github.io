var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 10, 10);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        for (var i = 0; i < 100; i++){
            drawCircle();
        }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            for (var i = 0; i < 100; i++){
                var eachCircle = circles[i]
                physikz.updatePosition(eachCircle);
                
            }
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            for (var i = 0; i < 100; i++){
                game.checkCirclePosition(eachCircle);
            }
//circles[i]
            // TODO 9 : Iterate over the array
        //Function calls are deleted to keep my code dry and avoid hard coding//  
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {
            var leftEdge = circle.x -circle.radius;
            var rightEdge = circle.x + circle.radius;
            var topEdge = circle.y -circle.radius;
            var bottomEdge = circle.y + circle.radius;
            
           // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if (leftEdge > canvas.width) {
                circle.x = canvas.width -circle.radius;
            }
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            
            //When circle goes off screen on the left, it comes back on screen starting from the right//
            if (rightEdge < 0 -circle.radius) {
                circle.x = 0 + circle.radius;
            }

            //When circle goes off screen at the bottom, it comes back on screen starting from the top//
            if (topEdge > canvas.height) {
                circle.y = 0 -circle.radius;
            }
            //When circle goes off screen at the top, it comes back on screen starting from the top//
            if (bottomEdge < 0){
                circle.y = canvas.height + circle.radius;
            }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
