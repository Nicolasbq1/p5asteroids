  function Laser(spos,sang) {
  this.pos = createVector(spos.x,spos.y).add(p5.Vector.fromAngle(sang).mult(20));
  this.vel = p5.Vector.fromAngle(sang).mult(10);


  this.update = function(){
    this.pos.add(this.vel);
  }

  this.render =function(){
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x,this.pos.y);
    pop();
  }

  this.hits = function(aster){
    var d = dist(this.pos.x,this.pos.y, aster.pos.x, aster.pos.y);
    if(d<aster.r){
      console.log('HIT');
    }
  }
}
