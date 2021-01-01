class Drops {
    constructor(x,y,r) {
      var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:0.04
      }
     
        this.body = Bodies.circle(x,y,r,options);
        this.r=r
      
        World.add(world, this.body);
    }

    
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      if(pos.y>600){
       Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,400)})
      }
      ellipseMode(CENTER);
      fill("blue");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };