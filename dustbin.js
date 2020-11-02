class dustbin{
    constructor(x,y,height,angle){
var options={
    'isStatic':true,
    'restitution':0.8,
    'friction':0.4,
    'density':0.8
}
this.body=Bodies.rectangle(x,y,5,height,options);
this.width=5;
this.height=height;
Matter.Body.setAngle(this.body,angle);
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        rect(0,0,10,this.height,angle)
        pop();
    }
}
