class Log{
    constructor(x,y,width,angle){
        var positions ={
         'friction':0.4,
        'restitution':0.5,
        'density':0.3
        }
        this.body=Bodies.rectangle(x,y,width,20,angle);
        this.width=width;
        Matter.Body.setAngle(this.body,angle)
        this.height=20; 
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.postion;
    push();
    translate (pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("brown");
    rect(0,0,this.width,this.height);
    pop();
    }

}
