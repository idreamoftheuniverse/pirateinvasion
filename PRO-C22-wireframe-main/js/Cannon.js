class Cannon {
    constructor(x,y,w,h,angle){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.angle = angle
        this.cannon_base = loadImage("assets/cannonBase.png")
        this.cannon_image = loadImage("assets/canon.png")
        
    }

    display(){

        if(keyIsDown(RIGHT_ARROW) && this.angle < 70){
           // console.log("right")
            this.angle = this.angle + 1
            //console.log(this.angle)
     
        }

        
        if(keyIsDown(LEFT_ARROW) && this.angle > -30){
          //  console.log("left")
           this.angle = this.angle - 1
           //console.log(this.angle)
     
        }

        push()
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.cannon_image, 0, 0, this.w, this.h)
        pop()
        image(this.cannon_base,70, 20, 200 ,200)
    }
}