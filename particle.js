class Particle {
  constructor() {
    this.pos = createVector(height / 2, width / 2);
    this.rays = [];
    for (let i = 0; i < 360; i += 0.1) {
      this.rays.push(new ray(this.pos, radians(i)));
    }
  }
  look(walls) {
    for (let k of this.rays) {
      let record = Infinity;
      let close = null;

      for (let wall of walls) {
        const check = k.cast(wall);
        if (check) {
          const d = p5.Vector.dist(this.pos, check);
          if (d < record) {
            record = d;
            close = check;
          }
        }
      }
      if (close) {
        line(this.pos.x, this.pos.y, close.x, close.y);
      }
    }
  }
  update(x, y) {
    this.pos.x =x;
    this.pos.y = y;
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 1);
    for (let k of this.rays) {
      k.show();
    }
  }
}
