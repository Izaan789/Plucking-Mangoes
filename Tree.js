class Tree{
    constructor(x,y,width,height){

        var options={
            isStatic:false,
            'friction':11111.0,
            'density':11111.0
          }
        this.body = Bodies.rectangle(x,y,width,height,options)
        
       
        this.width=width;
        this.height=height;

        this.image = loadImage("tree.png")

    }
    display(){

        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

    }
}