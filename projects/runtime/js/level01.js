var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
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
                { "type": "enemy", "x": 400, "y": groundY - 20 },
                { "type": "reward", "x": 500, "y": groundY - 20 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////
        for (var i = 0; i < levelData.gameItems; i++ ){}

        createSawBlade(800, 250);
        createSawBlade(1190, 350);
        createSawBlade(1600, 255);
        createEnemy(400, groundY - 20);
        createEnemy(800, groundY - 110);
        createEnemy(1200, groundY - 115);
        createReward(500, groundY - 20);
        createReward(910, groundY - 30);
        createReward(1300, groundY - 40);

        /////////////////////////////////////////////////////////////////////////////////////////////////

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
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

        // createSawBlade(800, 250);
        // createSawBlade(1190, 350);
        // createSawBlade(1600, 255);
        

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // function createSaucer(x,y){ 
        // var hitZoneSize = 25;
        // var damageFromObstacle = 10;
        // var saucerHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        // saucerHitZone.x = x;
        // saucerHitZone.y = y;
        // game.addGameItem(saucerHitZone);
        // var saucer = draw.bitmap("img/images9.png");
        // saucerHitZone.addChild(saucer);
        // saucer.x = -25;
        // saucer.y = -25;
        // }

        // createSaucer(1500, 200);

        /////Couldn't find png that would work/////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

        function createEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "red");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            // enemy.rotationalVelocity = 2;

            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-8);
                enemy.shrink();
            };

            enemy.onProjectileCollision = function () {
                game.increaseScore(40);
                enemy.shrink();
            };
        }
        // createEnemy(400, groundY - 20);
        // createEnemy(800, groundY - 110);
        // createEnemy(1200, groundY - 115);


        function createReward(x, y) {
            var reward = game.createGameItem("reward", 25);
            var goldSquare = draw.rect(50, 50, "gold");
            goldSquare.x = -25;
            goldSquare.y = -25;
            reward.addChild(goldSquare);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -1;
            // reward.rotationalVelocity = 2;

            reward.onPlayerCollision = function () {
                game.changeIntegrity(20);
                reward.shrink();
            };
        }
        
        // createReward(500, groundY - 20);
        // createReward(910, groundY - 30);
        // createReward(1300, groundY - 40);


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE ///////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
