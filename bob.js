class Ball{
    constructor(x,y,r){

      var  Option ={
        isStatic: false,
        restitution:1,
         density:1.2,
        friction:0.5
      }

      this.body=Bodies.circle(x,y,r,Option);
      World.add(world,this.body);
      this.r=r;

      
    }

    display(){

        var pos= this.body.position;
        var angle= this.body.angle;
        
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        
        fill("aqua")
        stroke("white")
        strokeWeight(4)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop ()
    

    }
}