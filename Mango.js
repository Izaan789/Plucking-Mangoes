class Mango{
    constructor(x,y,r){

        var options={
            isStatic:true
          }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
       
       this.r = r

        this.image = loadImage("mango.png")

    }
    display(){

        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)

    }
}