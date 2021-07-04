class Game{
    constructor() {

    }

    getGameState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateGameState(state) {
        console.log("updating the gameState:   "+state);
        database.ref("/").update({
           gameState :  state
        }) 

        
    }

    async start() {
        if (gameState === 0) {
           
            player = new Player();
            
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
          
            form = new Form();
            form.display();
           
        }
         
        p1 = createSprite(100,200);
        p2 = createSprite(300,200);
        p3 = createSprite(500,200);
        p4 = createSprite(700,200);
        players = [p1,p2,p3,p4];
 

    }

    play() {
        form.hide();
        Player.getPlayersInfo();
        if (allPlayers != undefined) {
            var x = 100;
            var y = 200;
            var index = 0;
            
            for (var plr in allPlayers) {
                index = index + 1;
                var x = allPlayers[plr].x;
                var y = height - allPlayers[plr].y;
        
                players[index - 1].x = x;
                players[index - 1].y = y;
                
                if (index === player.index) {
                    players[index - 1].shapeColor = "red";
                    camera.position.y = players[index - 1].position.y;
                }
                else {
                    players[index - 1].shapeColor = "black";
                }

            }



            

        }

        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.y = player.y + 5;  
            player.updatePlayer();
        }

        if (keyIsDown(DOWN_ARROW) && player.index != null) {
            player.y = player.y - 5;  
            player.updatePlayer();

        }

        if (keyIsDown(RIGHT_ARROW) && player.index != null) {
            player.x = player.x + 5;  
            player.updatePlayer();

        }

        if (keyIsDown(LEFT_ARROW) && player.index != null) {
            player.x = player.x - 5; 
            player.updatePlayer();

        }
        drawSprites();    
    }


}