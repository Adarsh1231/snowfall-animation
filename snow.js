class Snow {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 60;
      this.height = 60;
      this.image = loadImage("snow5.webp")
     
      World.add(world, this.body);
    }

    updateY(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body , {x:random(0,1280), y:0});
        }
    }

    display(){
        rectMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
  };