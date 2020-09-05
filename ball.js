class Ball{
    constructor(x,y,radius){
      var options ={
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
            
    }
      display(){
      var pos =this.body.position;
      fill("white");
      ellipseMode(RADIUS);
      ellipse(image.x,image.y,20,20);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,60,60);
    }
    
}