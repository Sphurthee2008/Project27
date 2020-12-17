class Rope{
    constructor(body1,body2,offsetX)
    {
       
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffnes: 0.01,
            lenght: 10,
            pointB:{x:offsetX,y:0}
        }
        this.offsetX = offsetX

        this.rope = Constraint.create(options)
        World.add(world, this.rope)
        
    }
display(){
    var pointA = this.rope.bodyA.position
    var pointB = this.rope.bodyB.position
    push()
    strokeWeight(2)
    fill("black")
    line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y)
    pop()
}








}