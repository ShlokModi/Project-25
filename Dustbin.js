class  Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        this.height = height;
        this.width = width;
    }
        display (){
            var pos = this.body.position;
            //push();
            //rectMode(CENTER);
            fill("white");
            rect(pos.x,pos.y,this.width,this.height);
           
            //pop();
        }
};