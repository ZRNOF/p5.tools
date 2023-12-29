# Shadow

---

## Introduction

A simple utility for adding shadows to graphical elements in p5.js.

---

## Usage

### Example

```js
function setup() {
	createCanvas(400, 400)
	noStroke()
	background(0)
	shadow("#FFF", 50, 20, 20)
	circle(100, 100, 100)
	shadowColor("#FF0")
	circle(300, 100, 100)
	shadowOffset(-20, -20)
	circle(100, 300, 100)
	noShadow()
	circle(300, 300, 100)
}
```

<img src="https://github.com/ZRNOF/p5.tools/blob/main/src/Decoration/Shadow/example.png" width="300" height="300">

---

## Demo

[Shadow Demo - OpenProcessing](https://openprocessing.org/sketch/1991418)

<img src="https://github.com/ZRNOF/p5.tools/blob/main/src/Decoration/Shadow/demo.png" width="300" height="300">

---

## Functions

### 1. `setShadowLayer(layer = this)`

- Set the shadowLayer variable.
  - `layer`: the layer to set as the shadowLayer

### 2. `shadowColor(clr = "#000")`

- Set the shadow color.
  - `clr`: the color for the shadow

### 3. `shadowBlur(blur = 20)`

- Set the shadow blur.
  - `blur`: the blur value for the shadow

### 4. `shadowOffsetX(xOff = 0)`

- Set the shadow offset in the X direction.
  - `xOff`: the X offset for the shadow

### 5. `shadowOffsetY(yOff = 0)`

- Set the shadow offset in the Y direction.
  - `yOff`: the Y offset for the shadow

### 6. `shadowOffset(xOff = 0, yOff = 0)`

- Set both the X and Y shadow offsets.
  - `xOff`: the X offset for the shadow
  - `yOff`: the Y offset for the shadow

### 7. `shadow(clr = "#000", blur = 20, xOff = 0, yOff = 0)`

- Set the shadow properties, including color, blur, and offsets.
  - `clr`: the color for the shadow
  - `blur`: the blur value for the shadow
  - `xOff`: the X offset for the shadow
  - `yOff`: the Y offset for the shadow

### 8. `noShadow()`

- Remove the shadow by resetting its properties to default values.

---
