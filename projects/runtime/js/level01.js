var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
            function createSawBlade (x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            }

            createSawBlade(800, 250);
            createSawBlade(1190, 350);
            createSawBlade(1600, 255);

            // function createBlazingSun (x, y){
            //     var hitZoneSize = 20;
            //     var damageFromObstacle = 5;
            //     var blazingSunHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            //     blazingSunHitZone.x = x;
            //     blazingSunHitZone.y = y;
            //     game.addGameItem(blazingSunHitZone);
            //     var obstacleImage = draw.bitmap("img/blazingsun.png");
            //     blazingSunHitZone.addChild(obstacleImage);
            //     obstacleImage.x = -25;
            //     obstacleImage.y = -25;
            //     }

            //     createBlazingSun(700, 230);
            
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
