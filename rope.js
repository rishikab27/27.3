class SlingShot{
    constructor(bodyA,bodyB,offsetX){
        this.offsetX=offsetX;

      var  Option ={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:0}
      }

      this.body=Constraint.create(Option);
      World.add(world,this.body);

      
    }

    display(){

        var pointA= this.body.bodyA.position;
        var pointB= this.body.bodyB.position;

        stroke("white");
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);

    }
}