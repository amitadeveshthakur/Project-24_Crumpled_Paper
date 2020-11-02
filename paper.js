class paper {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':2.2
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("black");
      strokeWeight(3);
      stroke("white")
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  