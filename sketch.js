var zombie, zombieImg, zombieImg2, deadzImg;
var player, playerImg, playerImg2;
var edgeWall, edgeWall2, edgeWall3, edgeWall4, wallImg, wall2Img, wall3Img;
var wall1, wall2, wall, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall12, wall13, wall14, wall15, wall16, extraWall,
wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34;
var bullet, bulletImg, bulletImg2;
var gameState = 1;
var gameOver, gameOverImg;
var restart, restartImg;
var menu, menuImg
var ammo = 10;
var logo, logoImg;
var nsew, nsewImg;
var zombieno = 5;
var zombietest1 = 1, zombietest = 1, zombietest2 = 1, zombietest3 = 1, zombietest4 = 1;
var youwin, youwinImg;
var gun1, gun2, gunImg1, gunImg2, guntest, guntest2;
var zombie1, zombie2, zombie3, zombie4;

function preload(){
  playerImg = loadImage("images/gunman1.png")
  playerImg2 = loadImage("images/gunman2.png")
  playerImg3 = loadImage("images/gunman3.png")
  playerImg4 = loadImage("images/gunman4.png")
  zombieImg = loadImage("images/zombie.png")
  zombieImg2 = loadImage("images/zombie2.png")
  wallImg = loadImage("images/wall.png")
  wallImgExt = loadImage("images/wallExt.png")
  bulletImg = loadImage("images/bullet.png")
  wall2Img = loadImage("images/wall2.png")
  wall3Img = loadImage("images/wall3.png")
  gameOverImg = loadImage("images/gameOver.png")
  restartImg = loadImage("images/restart.png")
  endImage = loadImage("images/end.png")
  menuImg = loadImage("images/menu.png")
  logoImg = loadImage("images/logo.png")
  nsewImg = loadImage("images/nsew.png")
  bulletImg2 = loadImage("images/bullet2.png")
  deadzImg = loadImage("images/deadz.png")
  youwinImg = loadImage("images/youwin.jpg")
  gunImg1 = loadImage("images/gun1.png")
  gunImg2 = loadImage("images/gun2.png")
  zombieImg3 = loadImage("images/zombie3.png")
  zombieImg4 = loadImage("images/zombie4.png")
}

function setup() {
  createCanvas(1600,780);

  var nsew = createSprite(70, 75)
  nsew.addImage(nsewImg)
  nsew.scale = 0.2;

  gun1 = createSprite(100, 450)
  gun1.addImage(gunImg1)
  gun1.scale = 0.1;

  gun2 = createSprite(800, 100)
  gun2.addImage(gunImg2)
  gun2.scale = 0.1;

  player = createSprite(100, 550, 20, 20);
  player.addImage(playerImg)
  player.scale = 0.3;

  zombie = createSprite(1500, 70, 20, 20)
  zombie.addImage(zombieImg2)
  zombie.scale = 0.3;
  zombie.velocityX = 6;

  zombie1 = createSprite(350, 70, 20, 20)
  zombie1.addImage(zombieImg4)
  zombie1.scale = 0.3;
  zombie1.velocityY = 6;

  zombie2 = createSprite(450, 70, 20, 20)
  zombie2.addImage(zombieImg4)
  zombie2.scale = 0.3;
  zombie2.velocityY = 5;

  zombie3 = createSprite(550, 70, 20, 20)
  zombie3.addImage(zombieImg4)
  zombie3.scale = 0.3;
  zombie3.velocityY = 7;

  zombie4 = createSprite(650, 70, 20, 20)
  zombie4.addImage(zombieImg4)
  zombie4.scale = 0.3;
  zombie4.velocityY = 4;

  youwin = createSprite(displayWidth/2, displayHeight/2-200)
  youwin.addImage(youwinImg)

  gameOver = createSprite(displayWidth/2, displayHeight/2- 200)
  gameOver.addImage(gameOverImg)
  
  restart = createSprite(displayWidth/2, displayHeight/2- 90)
  restart.addImage(restartImg)
  restart.scale = 0.2;

  guntest = 1;
  guntest2 = 1;

  bulletGroup= new Group()

  if(zombieno === 0)
  {
    gameState = 4;
  }


  //------------------walls----------------------

  for (var i = 0; i < 1650; i=i+50) 
  {
  edgeWall2 = createSprite(800, 600, 1600, 20);
  edgeWall2.addImage(wallImgExt)
  edgeWall2.scale = 2.2;

  edgeWall = createSprite(displayWidth/2, 10, 20, 20);
  edgeWall.addImage(wallImgExt)
  edgeWall.scale = 2.2;
  }

  for (var i = 80; i < 550; i=i+50) 
  {
  edgeWall3 = createSprite(-70, i, 20, 20);
  edgeWall4 = createSprite(1670, i, 20, 20);
  edgeWall3.addImage(wallImg)
  edgeWall4.scale = 0.3;
  edgeWall4.addImage(wallImg)
  edgeWall3.scale = 0.3;
  }

  logo = createSprite(displayWidth/2, displayHeight/2+240)
  logo.addImage(logoImg)
  logo.scale = 0.5;

  //----------------------------------------------

  //walls for level 1;-----------------------------

if(gameState === 1)
{

    wall1 = createSprite(67, 490, 200, 20)
    wall1.addImage(wall2Img)
    wall1.scale = 0.1;
  
    wall2 = createSprite(135, 490, 200, 20)
    wall2.addImage(wall2Img)
    wall2.scale = 0.1;
  
    wall3 = createSprite(203, 490, 200, 20)
    wall3.addImage(wall2Img)
    wall3.scale = 0.1;
  
    wall4 = createSprite(360, 542, 200, 20)
    wall4.addImage(wall3Img)
    wall4.scale = 0.1;
  
    wall5 = createSprite(360, 480, 200, 20)
    wall5.addImage(wall3Img)
    wall5.scale = 0.1;
  
    wall6 = createSprite(360, 412, 200, 20)
    wall6.addImage(wall3Img)
    wall6.scale = 0.1;
  
    wall7 = createSprite(110, 360, 200, 20)
    wall7.addImage(wall3Img)
    wall7.scale = 0.1;
  
    wall8 = createSprite(110, 292, 200, 20)
    wall8.addImage(wall3Img)
    wall8.scale = 0.1;
  
    wall9 = createSprite(110, 224, 200, 20)
    wall9.addImage(wall3Img)
    wall9.scale = 0.1;
  
    wall10 = createSprite(110, 160, 200, 20)
    wall10.addImage(wall3Img)
    wall10.scale = 0.1;
  
    wall11 = createSprite(110, 120, 200, 20)
    wall11.addImage(wall3Img)
    wall11.scale = 0.1;
  
    wall12 = createSprite(230, 280, 200, 20)
    wall12.addImage(wallImg)
    wall12.scale = 0.1;
  
    wall13 = createSprite(295, 280, 200, 20)
    wall13.addImage(wallImg)
    wall13.scale = 0.1;
  
    wall14 = createSprite(360, 280, 200, 20)
    wall14.addImage(wallImg)
    wall14.scale = 0.1;
  
    wall39 = createSprite(425, 280, 200, 20)
    wall39.addImage(wallImg)
    wall39.scale = 0.1;
  
    wall15 = createSprite(490, 280, 200, 20)
    wall15.addImage(wallImg)
    wall15.scale = 0.1;
  
    wall16 = createSprite(555, 280, 200, 20)
    wall16.addImage(wallImg)
    wall16.scale = 0.1;
  
    wall17 = createSprite(620, 280, 200, 20)
    wall17.addImage(wallImg)
    wall17.scale = 0.1;
  
    wall18 = createSprite(685, 280, 200, 20)
    wall18.addImage(wallImg)
    wall18.scale = 0.1;
  
    wall19 = createSprite(750, 280, 200, 20)
    wall19.addImage(wallImg)
    wall19.scale = 0.1;
  
    wall20 = createSprite(815, 280, 200, 20)
    wall20.addImage(wallImg)
    wall20.scale = 0.1;
  
    wall21 = createSprite(880, 280, 200, 20)
    wall21.addImage(wallImg)
    wall21.scale = 0.1;
  
    wall22 = createSprite(300, 60, 200, 20)
    wall22.addImage(wall3Img)
    wall22.scale = 0.1;
  
    wall23 = createSprite(300, 128, 200, 20)
    wall23.addImage(wall3Img)
    wall23.scale = 0.1;
  
    wall24 = createSprite(400, 60, 200, 20)
    wall24.addImage(wall3Img)
    wall24.scale = 0.1;
  
    wall25 = createSprite(400, 128, 200, 20)
    wall25.addImage(wall3Img)
    wall25.scale = 0.1;
  
    wall26 = createSprite(500, 60, 200, 20)
    wall26.addImage(wall3Img)
    wall26.scale = 0.1;
  
    wall27 = createSprite(500, 128, 200, 20)
    wall27.addImage(wall3Img)
    wall27.scale = 0.1;
  
    wall28 = createSprite(600, 60, 200, 20)
    wall28.addImage(wall3Img)
    wall28.scale = 0.1;
  
    wall29 = createSprite(600, 128, 200, 20)
    wall29.addImage(wall3Img)
    wall29.scale = 0.1;
  
    wall30 = createSprite(750, 150, 200, 20)
    wall30.addImage(wallImg)
    wall30.scale = 0.1;
  
    wall31 = createSprite(815, 150, 200, 20)
    wall31.addImage(wallImg)
    wall31.scale = 0.1;
  
    wall32 = createSprite(880, 150, 200, 20)
    wall32.addImage(wallImg)
    wall32.scale = 0.1;
  
    wall33 = createSprite(1080, 60, 200, 20)
    wall33.addImage(wall3Img)
    wall33.scale = 0.1;
  
    wall34 = createSprite(1080, 128, 200, 20)
    wall34.addImage(wall3Img)
    wall34.scale = 0.1;
  
    wall35 = createSprite(1080, 128+68, 200, 20)
    wall35.addImage(wall3Img)
    wall35.scale = 0.1;
  
    wall36 = createSprite(1080, 128+68+68, 200, 20)
    wall36.addImage(wall3Img)
    wall36.scale = 0.1;
  
    wall37 = createSprite(1080, 128+68+68+68, 200, 20)
    wall37.addImage(wall3Img)
    wall37.scale = 0.1;
  
    wall38 = createSprite(1080, 128+68+68+68+68, 200, 20)
    wall38.addImage(wall3Img)
    wall38.scale = 0.1;

    extraWall = createSprite(1553, 66)
    extraWall.addImage(wall3Img)
    extraWall.scale = 0.1;

    wall40 = createSprite(750, 450, 200, 20)
    wall40.addImage(wallImg)
    wall40.scale = 0.1;

    wall41 = createSprite(750-68, 450, 200, 20)
    wall41.addImage(wallImg)
    wall41.scale = 0.1;

    wall42 = createSprite(750-68-68, 450, 200, 20)
    wall42.addImage(wallImg)
    wall42.scale = 0.1;

    wall55 = createSprite(750-68-68-68, 450, 200, 20)
    wall55.addImage(wallImg)
    wall55.scale = 0.1;
   
    wall43 = createSprite(750+68+68, 450, 200, 20)
    wall43.addImage(wallImg)
    wall43.scale = 0.1;

    wall44 = createSprite(750+68, 450, 200, 20)
    wall44.addImage(wallImg)
    wall44.scale = 0.1;

    wall45 = createSprite(800, 499, 200, 20)
    wall45.addImage(wall3Img)
    wall45.scale = 0.1;

    wall54 = createSprite(800, 499+45, 200, 20)
    wall54.addImage(wall3Img)
    wall54.scale = 0.1;

    wall46 = createSprite(1400, 499-45, 200, 20)
    wall46.addImage(wall3Img)
    wall46.scale = 0.1;

    wall47 = createSprite(1400, 499-45-45, 200, 20)
    wall47.addImage(wall3Img)
    wall47.scale = 0.1;
    
    wall48 = createSprite(1400, 499-45-45-45, 200, 20)
    wall48.addImage(wall3Img)
    wall48.scale = 0.1;

    wall49 = createSprite(1400, 499-45-45-45-40, 200, 20)
    wall49.addImage(wallImg)
    wall49.scale = 0.1;

    wall50 = createSprite(1400-68, 499-45-45-45-40, 200, 20)
    wall50.addImage(wallImg)
    wall50.scale = 0.1;

    wall51 = createSprite(1400+68+68, 499-45-45-45-40, 200, 20)
    wall51.addImage(wallImg)
    wall51.scale = 0.1;
    


    wall53 = createSprite(1400-68-68, 499-45-45-45-40, 200, 20)
    wall53.addImage(wallImg)
    wall53.scale = 0.1;

}


  //----------------------------------------------

  menu = createSprite(displayWidth/2, 400)
  menu.addImage(menuImg)
  menu.scale = 0.9;

}

function draw() {
  background("black");
  
  edges = createEdgeSprites();
//bounce off------------------------------------
  player.bounceOff(edges[0]); //left edge 
  player.bounceOff(edges[1]); //right edge 
  player.bounceOff(edges[2]); //top edge 
  player.bounceOff(edges[3]); //bottom edge

  player.bounceOff(edgeWall2);
  player.bounceOff(edgeWall);
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);
  player.bounceOff(wall10);
  player.bounceOff(wall11);
  player.bounceOff(wall12);
  player.bounceOff(wall13);
  player.bounceOff(wall14);
  player.bounceOff(wall15);
  player.bounceOff(wall16);
  player.bounceOff(wall17);
  player.bounceOff(wall18);
  player.bounceOff(wall19);
  player.bounceOff(wall20);
  player.bounceOff(wall21);
  player.bounceOff(wall22);
  player.bounceOff(wall23);
  player.bounceOff(wall24);
  player.bounceOff(wall25);
  player.bounceOff(wall26);
  player.bounceOff(wall27);
  player.bounceOff(wall28);
  player.bounceOff(wall29);
  player.bounceOff(wall30);
  player.bounceOff(wall31);
  player.bounceOff(wall32);
  player.bounceOff(wall33);
  player.bounceOff(wall34);
  player.bounceOff(wall35);
  player.bounceOff(wall36);
  player.bounceOff(wall37);
  player.bounceOff(wall38);
  player.bounceOff(wall39);
  player.bounceOff(wall40);
  player.bounceOff(wall42);
  player.bounceOff(wall43);
  player.bounceOff(wall44);
  player.bounceOff(wall45);
  player.bounceOff(wall46);
  player.bounceOff(wall47);
  player.bounceOff(wall48);
  player.bounceOff(wall49);
  player.bounceOff(wall50);
  player.bounceOff(wall51);
  player.bounceOff(wall53);
  player.bounceOff(wall54);
  player.bounceOff(wall55);
  zombie.bounceOff(wall33)
  zombie.bounceOff(extraWall)
  zombie1.bounceOff(wall12);
  zombie1.bounceOff(wall13);
  zombie1.bounceOff(wall14);
  zombie1.bounceOff(wall15);
  zombie1.bounceOff(wall16);
  zombie1.bounceOff(wall17);
  zombie1.bounceOff(wall18);
  zombie1.bounceOff(wall19);
  zombie1.bounceOff(wall20);
  zombie1.bounceOff(wall21);
  zombie1.bounceOff(edgeWall);
  zombie2.bounceOff(wall12);
  zombie2.bounceOff(wall13);
  zombie2.bounceOff(wall14);
  zombie2.bounceOff(wall15);
  zombie2.bounceOff(wall16);
  zombie2.bounceOff(wall17);
  zombie2.bounceOff(wall18);
  zombie2.bounceOff(wall19);
  zombie2.bounceOff(wall20);
  zombie2.bounceOff(wall21);
  zombie2.bounceOff(edgeWall);
  zombie3.bounceOff(wall12);
  zombie3.bounceOff(wall13);
  zombie3.bounceOff(wall14);
  zombie3.bounceOff(wall15);
  zombie3.bounceOff(wall16);
  zombie3.bounceOff(wall17);
  zombie3.bounceOff(wall18);
  zombie3.bounceOff(wall19);
  zombie3.bounceOff(wall20);
  zombie3.bounceOff(wall21);
  zombie3.bounceOff(edgeWall);
  zombie4.bounceOff(wall12);
  zombie4.bounceOff(wall13);
  zombie4.bounceOff(wall14);
  zombie4.bounceOff(wall15);
  zombie4.bounceOff(wall16);
  zombie4.bounceOff(wall17);
  zombie4.bounceOff(wall18);
  zombie4.bounceOff(wall19);
  zombie4.bounceOff(wall20);
  zombie4.bounceOff(wall21);
  zombie4.bounceOff(edgeWall);

//bounce off------------------------------------
if(ammo > 0)
{
  if(keyDown(RIGHT_ARROW))
  {
    FireRight()
    ammo = ammo - 1;

  }

  if(keyDown(LEFT_ARROW))
  {
    FireLeft()
    ammo = ammo - 1;

  }

  if(keyDown(UP_ARROW))
  {
    FireUp()
    ammo = ammo -1;
  }

  if(keyDown(DOWN_ARROW))
  {
    FireDown()
    ammo = ammo -1;
  }
}

  player.debug = true;
  player.setCollider("rectangle", 0, 0, 240, 200);
  
  zombie.debug = true;
  zombie.setCollider("rectangle", 0, 0, 180, 200);

  zombie1.debug = true;
  zombie1.setCollider("rectangle", 0, 0, 180, 200);

  zombie2.debug = true;
  zombie2.setCollider("rectangle", 0, 0, 180, 200);

  zombie3.debug = true;
  zombie3.setCollider("rectangle", 0, 0, 180, 200);

  zombie4.debug = true;
  zombie4.setCollider("rectangle", 0, 0, 180, 200);
 

  if(player.isTouching(zombie)) 
  {

    zombie1.velocityY = 0;
    zombie2.velocityY = 0;
    zombie3.velocityY = 0;
    zombie4.velocityY = 0;
    player.addImage(zombieImg)
    gameState = 2;    
    zombie.velocityY = 0;
  }

  if(player.isTouching(zombie1)) 
  {

    zombie1.velocityY = 0;
    zombie2.velocityY = 0;
    zombie3.velocityY = 0;
    zombie4.velocityY = 0;
    player.addImage(zombieImg)
    gameState = 2;  
    zombie.velocityX = 0; 
     
  }

  if(player.isTouching(zombie2)) 
  {

    zombie1.velocityY = 0;
    zombie2.velocityY = 0;
    zombie3.velocityY = 0;
    zombie4.velocityY = 0;
    player.addImage(zombieImg)
    gameState = 2;  
    zombie.velocityX = 0; 
     
  }
  if(player.isTouching(zombie3)) 
  {

    zombie1.velocityY = 0;
    zombie2.velocityY = 0;
    zombie3.velocityY = 0;
    zombie4.velocityY = 0;
    player.addImage(zombieImg)
    gameState = 2;  
    zombie.velocityX = 0; 
     
  }

  if(player.isTouching(zombie4)) 
  {

    zombie1.velocityY = 0;
    zombie2.velocityY = 0;
    zombie3.velocityY = 0;
    zombie4.velocityY = 0;
    player.addImage(zombieImg)
    gameState = 2;  
    zombie.velocityX = 0; 
     
  }
//---------------------------PLAY-----------------------------------------------------------
  if(gameState === 1)
  {
    console.log(zombieno)
    if(bulletGroup.isTouching(zombie))
    {
      //zombie.visible = false;
      bulletGroup.destroyEach()
      zombie.setCollider("rectangle",0,0, 1, 1)
      zombie.debug = true;
      zombie.addImage(deadzImg)
      zombie.velocityX = 0;

      if(zombietest === 1)
      {
        zombieno = zombieno - 1;
        zombietest = zombietest - 1;
      }
    }

    if(bulletGroup.isTouching(zombie2))
    {
      //zombie.visible = false;
      bulletGroup.destroyEach()
      zombie2.setCollider("rectangle",0,0, 1, 1)
      zombie2.debug = true;
      zombie2.addImage(deadzImg)
      zombie2.velocityY = 0;

      if(zombietest2 === 1)
      {
        zombieno = zombieno - 1;
        zombietest2 = zombietest2 - 1;
      }
    }

    if(bulletGroup.isTouching(zombie1))
    {
      //zombie.visible = false;
      bulletGroup.destroyEach()
      zombie1.setCollider("rectangle",0,0, 1, 1)
      zombie1.debug = true;
      zombie1.addImage(deadzImg)
      zombie1.velocityY = 0;

      if(zombietest1 === 1)
      {
        zombieno = zombieno - 1;
        zombietest1 = zombietest1 - 1;
      }
    }

    if(bulletGroup.isTouching(zombie3))
    {
      //zombie.visible = false;
      bulletGroup.destroyEach()
      zombie3.setCollider("rectangle",0,0, 1, 1)
      zombie3.debug = true;
      zombie3.addImage(deadzImg)
      zombie3.velocityY = 0;


      if(zombietest3 === 1)
      {
        zombieno = zombieno - 1;
        zombietest3 = zombietest3 - 1;
      }
    }

    if(bulletGroup.isTouching(zombie4))
    {
      //zombie.visible = false;
      bulletGroup.destroyEach()
      zombie4.setCollider("rectangle",0,0, 1, 1)
      zombie4.debug = true;
      zombie4.addImage(deadzImg)
      zombie4.velocityY = 0;

      if(zombietest4 === 1)
      {
        zombieno = zombieno - 1;
        zombietest4 = zombietest4 - 1;
      }
    }

    if(guntest === 1)
    {
      gun1.visible = true;
    }
    else
    {
      gun1.visible = false;
    }

    if(player.isTouching(gun1) && guntest === 1)
    {
      ammo = 30;
      guntest = 0;
      //console.log(guntest)
    }

    if(guntest2 === 1)
    {
      gun2.visible = true;
    }
    else
    {
      gun2.visible = false;
    }

    if(player.isTouching(gun2) && guntest === 1)
    {
      ammo = 40;
      guntest2 = 0;
      //console.log(guntest)
    }


    youwin.visible = false;
    gameOver.visible = false;
    restart.visible = false;

    fill("white")
    textSize(30)
    text("Press P to pause", 50, 700)
    textSize(23)
    text("Ammo Left: "+ ammo, 1400, 650)
    text("Remeber the dead zombies can still effect you !!!", 50, 730)

if(keyCode === 83)

    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    wall13.visible = true;
    wall14.visible = true;
    wall15.visible = true;
    wall16.visible = true;
    wall17.visible = true;
    wall18.visible = true;
    wall19.visible = true;
    wall20.visible = true;
    wall21.visible = true;
    wall22.visible = true;
    wall23.visible = true;
    wall24.visible = true;
    wall25.visible = true;
    wall26.visible = true;
    wall27.visible = true;
    wall28.visible = true;
    wall29.visible = true;
    wall30.visible = true;
    wall31.visible = true;
    wall32.visible = true;
    wall33.visible = true;
    wall34.visible = true;
    wall35.visible = true;
    wall36.visible = true;
    wall37.visible = true;
    wall38.visible = true;
    wall39.visible = true;
    wall40.visible = true;
    wall41.visible = true;
    wall42.visible = true;
    wall43.visible = true;
    wall44.visible = true;
    wall45.visible = true;
    wall46.visible = true;
    wall47.visible = true;
    wall48.visible = true;
    wall49.visible = true;
    wall50.visible = true;
    wall51.visible = true;
    wall53.visible = true;
    wall54.visible = true;
    wall55.visible = true;

    player.visible = true;
    zombie.visible = true;
    zombie1.visible = true;
    zombie2.visible = true;
    zombie3.visible = true;
    zombie4.visible = true;

    extraWall.visible = true;
    logo.visible = true;
    menu.visible = false;

  }

  //---------------------------LOSE-------------------------------------------------


  if(gameState === 2)
  {
    youwin.visible = false;
    gameOver.visible = true;
    restart.visible = true;

  if(keyCode === 82)
  {
    Restart()
  }

  gun1.visible = false;
  gun2.visible = false;

    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
    wall28.visible = false;
    wall29.visible = false;
    wall30.visible = false;
    wall31.visible = false;
    wall32.visible = false;
    wall33.visible = false;
    wall34.visible = false;
    wall35.visible = false;
    wall36.visible = false;
    wall37.visible = false;
    wall38.visible = false;
    wall39.visible = false;
    wall40.visible = false;
    wall41.visible = false;
    wall42.visible = false;
    wall43.visible = false;
    wall44.visible = false;
    wall45.visible = false;
    wall46.visible = false;
    wall47.visible = false;
    wall48.visible = false;
    wall49.visible = false;
    wall50.visible = false;
    wall51.visible = false;
    wall53.visible = false;
    wall54.visible = false;
    wall55.visible = false;
    extraWall.visible = false;

    menu.visible = false;
    logo.visible = false;

    zombie.visible = false;
    zombie1.visible = false;
    zombie2.visible = false;
    zombie3.visible = false;
    zombie4.visible = false;


  }

  //---------------------------MENU---------------------------------------------------------


  if(keyDown("p"))
  {
    gameState = 3
  }

  if(gameState === 3)
  {
    gun1.visible = false;
    gun2.visible = false;
    youwin.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
    wall28.visible = false;
    wall29.visible = false;
    wall30.visible = false;
    wall31.visible = false;
    wall32.visible = false;
    wall33.visible = false;
    wall34.visible = false;
    wall35.visible = false;
    wall36.visible = false;
    wall37.visible = false;
    wall38.visible = false;
    wall39.visible = false;
    wall40.visible = false;
    wall41.visible = false;
    wall42.visible = false;
    wall43.visible = false;
    wall44.visible = false;
    wall45.visible = false;
    wall46.visible = false;
    wall47.visible = false;
    wall48.visible = false;
    wall49.visible = false;
    wall50.visible = false;
    wall51.visible = false;
    wall53.visible = false;
    wall54.visible = false;
    wall55.visible = false;

    player.visible = false;
    zombie.visible = false;
    zombie1.visible = false;
    zombie2.visible = false;
    zombie3.visible = false;
    zombie4.visible = false;

    extraWall.visible = false;
    logo.visible = false;
    menu.visible = true;

    if(keyCode === 71)
    {
      menu.visible = false;
      gameState = 1;
    }

    if(keyCode === 67)
    {
      menu.visible = false;
      textSize(30)
      fill("white")
      text("Move up - W", 650, 210);
      text("Move Down - S", 650, 240)
      text("Move Right - D", 650, 270)
      text("Move Left - A", 650, 300)
      text("Fire In North - Up_Arrow", 650, 330)
      text("Fire In South - Down_Arrow", 650, 360)
      text("Fire In East - Right_Arrow", 650, 390)
      text("Fire In West - Left_Arrow", 650, 420)
      textSize(15)
      text("Press ESC to go to back to menu", 180, 80)
    }

    if(keyCode === 83)
    {
      menu.visible = false;
      textSize(30)
      fill("white")
      text("Zombie Apocalypse has started !!!", 570, 200)
      textSize(20)
      text("There is a gas which is converting humans to zombies. Fight the zombies with multiple types of guns and reach the end by defeating the zombies", 140, 300)
      text("To win kill all the zombies and reach the end with golden plate. If a zombie touches you, you die !!!", 360, 330)
      textSize(15)
      text("Press ESC to go to back to menu", 180, 80)
    }


  }

  if(zombieno === 0)
  {
    gameState = 4;
  }

//Youwin------------------------------------------------------------------------------------------------------
  if(gameState === 4)
  {
    gun1.visible = false;
    gun2.visible = false;
    youwin.visible = true;
    gameOver.visible = false;
    restart.visible = false;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
    wall28.visible = false;
    wall29.visible = false;
    wall30.visible = false;
    wall31.visible = false;
    wall32.visible = false;
    wall33.visible = false;
    wall34.visible = false;
    wall35.visible = false;
    wall36.visible = false;
    wall37.visible = false;
    wall38.visible = false;
    wall39.visible = false;
    wall40.visible = false;
    wall41.visible = false;
    wall42.visible = false;
    wall43.visible = false;
    wall44.visible = false;
    wall45.visible = false;
    wall46.visible = false;
    wall47.visible = false;
    wall48.visible = false;
    wall49.visible = false;
    wall50.visible = false;
    wall51.visible = false;
    wall53.visible = false;
    wall54.visible = false;
    wall55.visible = false;

    player.visible = false;
    zombie.visible = false;
    zombie1.visible = false;
    zombie2.visible = false;
    zombie3.visible = false;
    zombie4.visible = false;
 
    extraWall.visible = false;
    logo.visible = false;
    menu.visible = false;
  }

  playerMove()
  drawSprites();
}

function playerMove()
{

  if(gameState === 1)
  {
    if (keyDown("d")) 
  { player.x = player.x+4;
    player.addImage(playerImg)
  }

if (keyDown("s")) 
{ player.y = player.y+4;
  player.addImage(playerImg4)
}

if (keyDown("w")) 
{ player.y = player.y-4;
  player.addImage(playerImg3)
}

if (keyDown("a")) 
{ player.x = player.x-4;
  player.addImage(playerImg2)
}
  }

}

function FireRight()
{

  bullet = createSprite(200, 550, 20, 20)
  bullet.addImage(bulletImg)
  bullet.scale = 0.1;
  bullet.x = player.x;
  bullet.y = player.y;

  player.addImage(playerImg)

  
  if(ammo > 0)
  {
    bullet.velocityX = 8;
    bullet.lifetime = 30;
  }

  if(ammo === 1)
  {
    bullet.visible = false;
  }
  else
  {
    bullet.visible = true;
  }

  bulletGroup.add(bullet)
  return bullet;

}

function FireLeft()
{

  bullet = createSprite(200, 550, 20, 20)
  bullet.addImage(bulletImg)
  bullet.scale = 0.1;
  bullet.x = player.x;
  bullet.y = player.y;

  player.addImage(playerImg2)

  
  if(ammo > 0)
  {
    bullet.velocityX = -8;
    bullet.lifetime = 30;
  }

  if(ammo === 1)
  {
    bullet.visible = false;
  }
  else
  {
    bullet.visible = true;
  }

  bulletGroup.add(bullet)
  return bullet;

}

function FireUp()
{

  bullet = createSprite(200, 550, 20, 20)
  bullet.addImage(bulletImg2)
  bullet.scale = 0.1;
  bullet.x = player.x;
  bullet.y = player.y;

  player.addImage(playerImg3)

  
  if(ammo > 0)
  {
    bullet.velocityY = -8;
    bullet.lifetime = 30;
  }

  if(ammo === 1)
  {
    bullet.visible = false;
  }
  else
  {
    bullet.visible = true;
  }

  bulletGroup.add(bullet)
  return bullet;

}

function FireDown()
{

  bullet = createSprite(200, 550, 20, 20)
  bullet.addImage(bulletImg2)
  bullet.scale = 0.1;
  bullet.x = player.x;
  bullet.y = player.y;

  player.addImage(playerImg4)

  
  if(ammo > 0)
  {
    bullet.velocityY = 8;
    bullet.lifetime = 30;
  }

  if(ammo === 1)
  {
    bullet.visible = false;
  }
  else
  {
    bullet.visible = true;
  }

  bulletGroup.add(bullet)
  return bullet;

}

function Restart()
{
  gameState = 1;
  zombie.addImage(zombieImg2)
  zombie1.addImage(zombieImg4)
  zombie2.addImage(zombieImg4)
  zombie3.addImage(zombieImg4)
  zombie4.addImage(zombieImg4)
  player.x = 100;
  player.y = 550;
  player.addImage(playerImg)
  gameOver.visible = false;
  restart.visible = false;
  ammo = 10;
  guntest = 1;
  guntest2 = 1;
  zombie.velocityX = 6;
  zombie1.velocityY = -4;
  zombie2.velocityY = -5;
  zombie3.velocityY = -2;
  zombie4.velocityY = -4;
  zombieno = 5;

  zombietest = 1;
  zombietest1 = 1;
  zombietest2 = 1;
  zombietest3 = 1;
  zombietest4 = 1;


}

