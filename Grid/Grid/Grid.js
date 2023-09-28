// MIT License
// Copyright © 2023 Zaron
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

class Grid {
	constructor({
		cols,
		rows,
		grid_w = width,
		grid_h = height,
		order = "SHUFFLE",
		layer = globalThis,
	}) {
		this.init(cols, rows, grid_w, grid_h, order, layer)
	}

	init(cols, rows, grid_w, grid_h, order, layer) {
		this.cols = floor(cols)
		this.rows = floor(rows)
		this.grid_w = grid_w
		this.grid_h = grid_h
		this.cell_w = this.grid_w / cols
		this.cell_h = this.grid_h / rows
		this.cells = []
		this.isReset = true
		this.order = order
		this.set_order(this.order)
		this.layer = layer
	}

	generate(content) {
		for (let id = 0; id < this.cells.length; id++) {
			this.layer.push()
			let x = this.cells[id].col
			let y = this.cells[id].row
			this.layer.translate(x * this.cell_w, y * this.cell_h)
			content(this.cells[id], this.cell_w, this.cell_h)
			this.layer.pop()
		}
	}

	setGridLayer(layer = globalThis) {
		this.layer = layer
	}

	set_grid(
		{
			cols = this.cols,
			rows = this.rows,
			grid_w = this.grid_w,
			grid_h = this.grid_h,
			order = this.order,
		},
		reset = false
	) {
		let isSame =
			this.cols == cols &&
			this.rows == rows &&
			this.grid_w == grid_w &&
			this.grid_h == grid_h &&
			this.order == order
		if (!(isSame && !reset)) {
			this.init(cols, rows, grid_w, grid_h, order)
		} else {
			this.isReset = false
		}
	}

	set_order(order) {
		this.order = order
		if (this.order == "SHUFFLE") {
			this.shuffle_order()
		} else {
			this.order_by_(this.order)
		}
	}

	shuffle_order() {
		let numbers = Array.from({ length: this.cols * this.rows }, (_, i) => i)
		shuffle(numbers, true)
		for (let x = 0; x < this.cols; x++) {
			for (let y = 0; y < this.rows; y++) {
				this.set_cell(x, y, numbers[x * this.rows + y])
			}
		}
	}

	order_by_(order) {
		let fst_order = order.slice(0, 2)
		let sec_order = order.slice(2, 4)
		for (let x = 0; x < this.cols; x++) {
			for (let y = 0; y < this.rows; y++) {
				let fst = { TB: y, BT: this.rows - y - 1, LR: x, RL: this.cols - x - 1 }
				let sec = {
					TB: y * this.cols,
					BT: (this.rows - y - 1) * this.cols,
					LR: x * this.rows,
					RL: (this.cols - x - 1) * this.rows,
				}
				this.set_cell(x, y, fst[fst_order] + sec[sec_order])
			}
		}
	}

	set_cell(x, y, id) {
		if (this.cells[id] != undefined) {
			this.cell_update(x, y, id)
		} else {
			this.cell_init(x, y, id)
		}
	}

	cell_init(x, y, id) {
		this.cells[id] = {
			col: x,
			row: y,
			id: id,
		}
	}

	cell_update(x, y, id) {
		this.cells[id].col = x
		this.cells[id].row = y
		this.cells[id].id = id
	}
}
