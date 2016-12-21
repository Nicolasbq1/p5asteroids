var ship;
var asteroids = [];
var lasers = [];
function setup() {
  createCanvas(600, 600);
  ship = new Ship();
  for(var i = 0; i < 5; i++){
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  for(var i = 0; i < asteroids.length;i++){
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  
  for(var i = 0; i < lasers.length;i++){
    lasers[i].render();
    lasers[i].update();
    for(var j = 0; j < asteroids.length;j++){
      if(lasers[i].hits(asteroids[j])){
        asteroids.splice(j,1);
      }
    }
  }
}

function keyReleased(){
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed(){
  if(key == ' '){
    lasers.push(new Laser(ship.pos,ship.heading));
  }
  if(keyCode == RIGHT_ARROW){
    ship.setRotation(.1);
  }
  else if(keyCode == LEFT_ARROW){
    ship.setRotation(-.1);    
  }
  if(keyCode == UP_ARROW){
    ship.boosting(true);
  }
}


