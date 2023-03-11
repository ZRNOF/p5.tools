# Grid

---

## Introduction
Generate a grid. Just write a content function and the result will be applied to every cell of the grid.

---

## Usage
### Example
```js
let gs;  // Store grid system

function setup() {
  createCanvas(400, 400);
  // Create grid system
  gs = new Grid({
    cols: 3,
    rows: 5,
  });
  background("#0D1117");
}

function draw() {
  gs.generate(content);  // Generate content
}

// Customize your content here
function content(cell, w, h) {
  push();
  fill(255);
  translate(w/2, h/2);
  rectMode(CENTER);
  rect(0, 0, w/2, h/2);
  pop();
}
```
<img src="https://github.com/ZRNOF/p5.js-Toolbox/blob/main/Grid/Grid/grid_example.png" width="300" height="300">

---

## Demo
[Grid_demo - OpenProcessing](https://openprocessing.org/sketch/1864179)

<img src="https://github.com/ZRNOF/p5.js-Toolbox/blob/main/Grid/Grid/grid_example_OpenProcessing.png" width="300" height="300">

---

## Functions
### 1. `generate(content)`
* Generate cell content of grid. content is a function that user define.
* The content function takes 3 things - `cell`, `w` and `h`:
  * `cell`: current cell that processing now
  * `w`: width of cell
  * `h`: height of cell
* To define content function:
```js
function content(cell, w, h) {
  // Customize your cell content here
}
```
* See [Usage](https://github.com/ZRNOF/p5.js-Toolbox/tree/main/Grid/Grid#usage) and [demo](https://openprocessing.org/sketch/1864179) to see how this work

### 2. `set_grid({cols, rows, grid_w, grid_h, order}, reset=false)`
* Set parameters of grid.
  * `cols`: amount of columns of grid
  * `rows`: amount of rows of grid
  * `grid_w`: width of grid
  * `grid_h`: height of grid
  * `order`: order of cells
* Set reset value to true 

### 3. `set_order(order)`
* Set order of cells.

---