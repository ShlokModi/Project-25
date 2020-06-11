class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2,
        }
        this.body = Bodies.circle(50,330,23,options);
        this.diameter = 23;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
        pop();
    }
};