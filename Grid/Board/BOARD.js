/*
	MIT License
	Copyright (c) 2023 Zaron
	See LICENSE file for details.
	https://github.com/ZRNOF/p5.js-Toolbox
*/

class Board {
  constructor(parent_col=3, 
              parent_row=3, 
              child_col=3, 
              child_row=3) {
		this.posX = 0;
		this.posY = 0;
		this.width = width;
		this.height = height;
    this.parent_col = parent_col;
    this.parent_row = parent_row;
    this.child_col = child_col;
    this.child_row = child_row;
    this.outline_color = "#5555FF";
    this.outline_weight = 5;
    this.inside_color = "#FF5555";
    this.inside_weight = 1;
  }
	
  board() {
		push();
    this.childBoard();
    this.parentBoard();
		pop();
  }
	
  generate(line_color, line_weight, col_offset, row_offset) {
    push();
    stroke(line_color);
    strokeWeight(line_weight);
    noFill();
    if (col_offset != Infinity) {
      for (let c = 0; int(c) <= this.width; c += col_offset) {
        line(c, 0, c, this.height);
      }
    }
    if (row_offset != Infinity) {
      for (let r = 0; int(r) <= this.height; r += row_offset) {
        line(0, r, this.width, r);
      }
    }
    pop();
  }
	
  parentBoard() {
		push();
		translate(this.posX, this.posY);
    let col_offset = this.width/max(this.parent_col, 0);
    let row_offset = this.height/max(this.parent_row, 0);
    this.generate(
			this.outline_color,
			this.outline_weight,
			col_offset,
			row_offset
		);
		pop();
  }
	
  childBoard() {
		push();
		translate(this.posX, this.posY);
    let col_offset = this.width/max(this.child_col*this.parent_col, 0);
    let row_offset = this.height/max(this.child_row*this.parent_row, 0);
    this.generate(
			this.inside_color,
			this.inside_weight,
			col_offset,
			row_offset
		);
		pop();
  }
	
  set_child(child_col, child_row) {
		this.child_col = child_col;
		this.child_row = child_row;
	}
	
  set_parent(parent_col, parent_row) {
		this.parent_col = parent_col;
		this.parent_row = parent_row;
	}
	
  set_board(parent_col, parent_row, child_col, child_row) {
		this.parent_col = parent_col;
		this.parent_row = parent_row;
		this.child_col = child_col;
		this.child_row = child_row;
	}
	
	set_position(posX, posY, mode="CORNER") {
		if (mode == "CORNER") {
			this.posX = posX;
			this.posY = posY;
		}
		else if (mode == "CENTER") {
			this.posX = posX-this.width/2;
			this.posY = posY-this.height/2;
		}
	}
	
	set_size(wid, hei) {
		this.width = wid;
		this.height = hei;
	}
	
  set_outline_color(outline_color) {
		this.outline_color = outline_color;
	}
	
  set_outline_weight(outline_weight) {
		this.outline_weight = outline_weight;
	}
	
  set_outline(outline_color, outline_weight) {
		this.outline_color = outline_color;
		this.outline_weight = outline_weight;
	}
	
  set_inside_color(inside_color) {
		this.inside_color = inside_color;
	}
	
  set_inside_weight(inside_weight) {
		this.inside_weight = inside_weight;
	}
	
  set_inside(inside_color, inside_weight) {
		this.inside_color = inside_color;
		this.inside_weight = inside_weight;
	}
}
