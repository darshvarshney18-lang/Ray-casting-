let walls=[] ;
let rayy;
let parti;
function setup() {
  createCanvas(500, 500);
  for (let i = 0 ; i <=5; i ++){
    const x1  =  random(width)
    const x2 =  random(width)
    const y1  =  random(height)
    const y2  =  random(height)
    walls[i] = new boundary(x1,y1,x2,y2)

  }
  walls.push(new boundary(0,0,width,0))
  walls.push(new boundary(width,0,width,height))
  walls.push(new boundary(0,height,0,0))
  walls.push(new boundary(0,height,width,height))


  parti = new Particle

}

function draw() {
  background(0);

  for (let wall of walls ){
    wall.show()
    
  }

  parti.show()
  parti.look(walls)
  parti.update(mouseX,mouseY) 
 
}
