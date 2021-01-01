class Umbrella {
    constructor(x,y) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y,100,280, options);
      this.image=loadImage("Walking Frame/walking_1.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      this.body.debug=true
     // rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,0,0,350,350);
     // rect(0, 0, this.width, this.height);
      pop();
    }
  };
  