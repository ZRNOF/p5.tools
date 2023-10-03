# Control

---

## Introduction

Control interactive events, such as setting a mouse click to loop/noLoop a p5 canvas or setting a key press to run a specific function or toggle, etc...

---

## Usage

### Example

```js
let circleSize = 50
let isClear = false

function setup() {
	createCanvas(600, 600)
	background(220)
	stroke(0)
	strokeWeight(5)

	/* Please set Control function in the setup function */

	// mouse click to loop/noLoop
	//ClickLoopToggle()
	// press space to loop/noLoop
	PressLoopToggle(" ")
	// press i to increase circleSize
	PressDo("i", () => (circleSize += 5))
	// press d to decrease circleSize
	PressDo("d", () => (circleSize -= 15))
	// press c to clear background
	PressDo("c", () => background(220))
}

function draw() {
	circle(width / 2, height / 2, circleSize)
}
```

---

## Demo

[Control Demo - OpenProcessing](https://openprocessing.org/sketch/2031309)

---

## Functions

### 1. `PressLoopToggle(btn)`

- Enables toggling between loop/noLoop when a specified key is pressed.
  - `btn`: the key to listen for

### 2. `PressToggle(btn, func1, func2, func1Args = [], func2Args = [])`

- Enables toggling between two functions when a specified key is pressed.
  - `btn`: the key to listen for
  - `func1`: the first function to toggle
  - `func2`: the second function to toggle
  - `func1Args`: optional arguments for the first function
  - `func2Args`: optional arguments for the second function

### 3. `PressDo(btn, func, args = [])`

- Enables running a specified function when a key is pressed.
  - `btn`: the key to listen for
  - `func`: the function to execute on key press
  - `args`: optional arguments for the function

### 4. `ClickLoopToggle()`

- Enables toggling between loop/noLoop when a mouse click event occurs.

### 5. `ClickToggle(func1, func2, func1Args = [], func2Args = [])`

- Enables toggling between two functions when a mouse click event occurs.
  - `func1`: the first function to toggle
  - `func2`: the second function to toggle
  - `func1Args`: optional arguments for the first function
  - `func2Args`: optional arguments for the second function

### 6. `ClickDo(func, args = [])`

- Enables running a specified function when a mouse click event occurs.
  - `func`: the function to execute on mouse click
  - `args`: optional arguments for the function

---
