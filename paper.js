class Paper {
    constructor(x, y) {
        
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 80;
      this.image = loadImage("paper.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      Paper.velocityX = 0;
      Paper.velocityY = 0;


     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);

      //fill("green");
      image(this.image,0, 0, this.width, this.height);
      
      pop();
    }
  };