# Board

---

## Introduction
Generate a board (like graph paper) to provide a positional reference when sketching.
Can also be used for background decoration or other purposes.

---

## Use
### Example
```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#0D1117");
  let cell = new Board(2, 3, 4, 5);  // Create!
  cell.set_outline("#05FFFF", 5);  // Set outline stroke color & weight
  cell.set_inside("#FFFFFF", 1);  // Set inside stroke color & weight
  cell.board();  // Show board
}
```
<img src="https://github.com/ZRNOF/p5.js-Toolbox/blob/main/Toolbox/board/board_example.png" width="300" height="300">

---

## Demo
OpenProcessing:

---

## Functions
### 1. `board()`
* Show whole board (parent & child).

### 2. `parentBoard()`
* Only show parent board.

### 3. `childBoard()`
* Only show child board.

### 4. `set_child(child_col, child_row)`
* Set column & row of child board.
  * `child_col`: amount of columns of child board
  * `child_row`: amount of rows of child board

### 5. `set_parent(parent_col, parent_row)`
* Set column & row of parent board.
  * `parent_col`: amount of columns of parent board
  * `parent_row`: amount of rows of parent board

### 6. `set_board(parent_col, parent_row, child_col, child_row)`
* Set column & row of all board.
  * `parent_col`: amount of columns of parent board
  * `parent_row`: amount of rows of parent board
  * `child_col`: amount of columns of child board
  * `child_row`: amount of rows of child board

### 7. `set_position(posX, posY, mode="CORNER")`
* Set position of whole board.
  * `posX`: x-coordinate
  * `posY`: y-coordinate
  * `mode`:
    * `"CORNER"`: position ref corner (top left)
    * `"CENTER"`: position ref center

### 8. `set_size(wid, hei)`
* Set size of whole board.
  * `wid`: width of whole board
  * `hei`: height of whole board

### 9. `set_outline_color(outline_color)`
* Set color of outline border.
  * `outline_color`: color of outline border

### 10. `set_outline_weight(outline_weight)`
* Set weight of outline border.
  * `outline_weight`: weight of outline border

### 11. `set_outline(outline_color, outline_weight)`
* Set color & weight of outline border.
  * `outline_color`: color of outline border
  * `outline_weight`: weight of outline border

### 12. `set_inside_color(inside_color)`
* Set color of inside border.
  * `inside_color`: color of inside border

### 13. `set_inside_weight(inside_weight)`
* Set weight of inside border.
  * `inside_weight`: weight of inside border

### 14. `set_inside(inside_color, inside_weight)`
* Set color & weight of inside border.
  * `inside_color`: color of inside border
  * `inside_weight`: weight of inside border
