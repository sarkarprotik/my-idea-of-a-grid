import React from 'react';

import P5Wrapper from 'react-p5-wrapper';



function sketch (p) {
  let cols, rows
  let w = 50
  let grid = []
  console.log(p.height, p.width, window.innerHeight)
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    cols = (p.width/w)
    rows = (p.height/w)
  
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++){
        let cell = new Cell(i, j)
        grid.push(cell)
      }
    }

  };



class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.show = function () {
      let x = this.i * w;
      let y = this.j * w;
      p.stroke(255);
      p.noFill();
      p.rect(x, y, w, w);
    };
  }
}

  
  p.draw = function () {
    p.background(51);
    for (let i = 0; i < grid.length; i++){
      grid[i].show()
    }

  };


};


function App() {
  return <P5Wrapper sketch={sketch} />
}

export default App;
