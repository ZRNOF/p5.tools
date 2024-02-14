// MIT License
// Copyright © 2024 Zaron Chen
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

class Grid {
	constructor({ p, cols, rows, gridW, gridH, order }) {
		this._init(p, cols, rows, gridW, gridH, order)
	}

	_init(p, cols, rows, gridW, gridH, order) {
		this.p = p
		this.cols = Math.floor(cols)
		this.rows = Math.floor(rows)
		this.gridW = gridW
		this.gridH = gridH
		this.cellW = this.gridW / cols
		this.cellH = this.gridH / rows
		this.cells = []
		this._isReset = true
		this._order = order
		this.order(this._order)
	}

	/**
	 * Generate cells content of grid
	 * @param { Function } content - a function that user define
	 */
	generate(content) {
		for (const cell of this.cells) {
			this.p.push()
			this.p.translate(cell.col * this.cellW, cell.row * this.cellH)
			content({ w: this.cellW, h: this.cellH, ...cell })
			this.p.pop()
		}
	}

	/**
	 * Set parameters of grid
	 * @param { object } GridProperties - Grid properties
	 * @param { boolean } reset - Set `reset` to `true` will make the grid update even if none of the parameter values have changed. The default value of `reset` is `false`
	 */
	config(
		{
			cols = this.cols,
			rows = this.rows,
			gridW = this.gridW,
			gridH = this.gridH,
			order = this._order,
		},
		reset = false
	) {
		const isSame =
			this.cols === cols &&
			this.rows === rows &&
			this.gridW === gridW &&
			this.gridH === gridH &&
			this._order === order
		if (!isSame || reset) this._init(this.p, cols, rows, gridW, gridH, order)
		else this._isReset = false
	}

	/**
	 * Set order of cells
	 * @param { p5.SHUFFLE | p5.LRTB | p5.LRBT | p5.RLTB | p5.RLBT | p5.TBLR | p5.TBRL | p5.BTLR | p5.BTRL } order
	 */
	order(order) {
		this._order = order
		if (this._order === this.p.SHUFFLE) this._shuffleOrder()
		else this._orderBy(this._order)
	}

	/**
	 * Calculate ID for a cell based on its column and row position
	 * @param { number } col - The column index of the cell
	 * @param { number } row - The row index of the cell
	 * @returns { number } The calculated cell ID, or -1 if the provided column or row is out of bounds
	 */
	getID(col, row) {
		if (col < 0 || row < 0 || col >= this.cols || row >= this.rows) return -1
		return col + row * this.cols
	}

	_shuffleOrder() {
		const numbers = Array.from({ length: this.cols * this.rows }, (_, i) => i)
		this.p.shuffle(numbers, true)
		for (let x = 0; x < this.cols; x++) {
			for (let y = 0; y < this.rows; y++) {
				this._setCell(x, y, numbers[x * this.rows + y])
			}
		}
	}

	_orderBy(order) {
		const fst_order = order.slice(0, 2)
		const sec_order = order.slice(2, 4)
		for (let x = 0; x < this.cols; x++) {
			for (let y = 0; y < this.rows; y++) {
				const fst = {
					TB: y,
					BT: this.rows - y - 1,
					LR: x,
					RL: this.cols - x - 1,
				}
				const sec = {
					TB: y * this.cols,
					BT: (this.rows - y - 1) * this.cols,
					LR: x * this.rows,
					RL: (this.cols - x - 1) * this.rows,
				}
				this._setCell(x, y, fst[fst_order] + sec[sec_order])
			}
		}
	}

	_setCell(x, y, id) {
		if (this.cells[id] !== undefined) this._updateCell(x, y, id)
		else this._initCell(x, y, id)
	}

	_initCell(x, y, id) {
		this.cells[id] = { id, col: x, row: y }
	}

	_updateCell(x, y, id) {
		this.cells[id].id = id
		this.cells[id].col = x
		this.cells[id].row = y
	}
}

/**
 * Mount Grid to p5
 * @param { p5 } p5 - p5
 */
export const mountGrid = (p5) => {
	/**
	 * Create Grid object
	 * @param { object } GridProperties - Grid properties
	 * @returns { Grid } A new instance of the Grid class
	 */
	p5.prototype.Grid = function ({
		cols,
		rows,
		gridW = this._renderer.width,
		gridH = this._renderer.height,
		order = this.SHUFFLE,
	}) {
		return new Grid({ p: this, cols, rows, gridW, gridH, order })
	}
	p5.prototype.TBRL = "TBRL"
	p5.prototype.TBLR = "TBLR"
	p5.prototype.BTRL = "BTRL"
	p5.prototype.BTLR = "BTLR"
	p5.prototype.RLTB = "RLTB"
	p5.prototype.RLBT = "RLBT"
	p5.prototype.LRTB = "LRTB"
	p5.prototype.LRBT = "LRBT"
	p5.prototype.SHUFFLE = "SHUFFLE"
}
