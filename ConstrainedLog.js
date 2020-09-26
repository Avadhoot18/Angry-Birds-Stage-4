class ConstrainedLog{
constructor(bodyA,bodyB){
    
    var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness: 0.04,
    length:10
}
this.constrainedlog = Constraint.create(options);
World.add(world,this.constrainedlog);
}
display(){
    var pointA = this.constrainedlog.bodyA.position;
    var pointB = this.constrainedlog.bodyB.position;
    strokeWeight(4);
}}