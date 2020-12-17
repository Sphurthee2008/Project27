class Roof {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(500,100,300,10,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      fill("Turquoise");
      rect(pos.x,pos.y,300,10);
      pop()
    }
  };