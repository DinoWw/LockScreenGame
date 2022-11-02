class Field {
  
  constructor(dimX = 3, dimY = 3){
    this.dimX = dimX;
    this.dimY = dimY;
    this.chain = [];
  }
  
  connectNext(x, y) {

    // check for if x and y are within dimesnions
    if(x < 0 || y < 0 || x >= this.dimX || y >= this.dimY) throw new Error(`Point (${x}, ${y}) outside grid`);

    // if no points are connected, initalize the chain with (x, y)
    if(this.chain.length == 0){
      this.chain.push({"x": x, "y": y});
      return;
    }
    
    // check if point is free
    if(this.chain.some(a => a.x == x && a.y == y)){
      throw new Error(`Point (${x}, ${y}) already connected`);
      
    }

    let lastPoint = this.chain[this.chain.length - 1];

    let d = {
      "x": x - lastPoint.x,
      "y": y - lastPoint.y
      };
    
    if(d.x == 0) {
      for(let i = lastPoint.y + Math.sign(d.y); i != y + Math.sign(d.y); i += Math.sign(d.y)) {
        if(!this.chain.some(a => a.x == x && a.y == i)){
          this.chain.push({"x": x, "y": i});  
        }
      }
      return;
    }
    else {
      // dx != 0 bc dx != 0 & dy != 0
      for(let i = Math.sign(d.x); i != x - lastPoint.x + Math.sign(d.x); i += Math.sign(d.x)) {
        
        let yNew = 1.0 * d.y / d.x * i;
        
        if(yNew % 1 != 0) continue;
        if(!this.chain.some(a => a.x == lastPoint.x + i && a.y == lastPoint.y + yNew)){
          this.chain.push({"x": lastPoint.x + i, "y": lastPoint.y + yNew});
        }
        
      }
      return;
    }
    
    
  }
}


