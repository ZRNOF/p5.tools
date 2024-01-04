# Shadow

---

## Introduction

A simple utility for adding shadows to graphical elements in p5.js.

---

## Usage

### Example

```js
import mountShadow from "./Shadow.js"

mountShadow(p5)

new p5((p) => {
  p.setup = () => {
    p.createCanvas(400, 400)
    p.noStroke()
    p.background(0)
    p.shadow("#FFF", 50, 20, 20)
    p.circle(100, 100, 100)
    p.shadowColor("#FF0")
    p.circle(300, 100, 100)
    p.shadowOffset(-20, -20)
    p.circle(100, 300, 100)
    p.noShadow()
    p.circle(300, 300, 100)
  }
})
```

<img src="https://github.com/ZRNOF/p5.tools/blob/main/src/Decoration/Shadow/example.png" width="300" height="300">

---

## Demo

[Shadow Demo - OpenProcessing](https://openprocessing.org/sketch/1991418)

<img src="https://github.com/ZRNOF/p5.tools/blob/main/src/Decoration/Shadow/demo.png" width="300" height="300">

---

## Functions

### 1. `shadowColor(color = "#000")`

- Set the shadow color.
  - `color`: the color for the shadow

### 2. `shadowBlur(blur = 20)`

- Set the shadow blur.
  - `blur`: the blur value for the shadow

### 3. `shadowOffsetX(xOff = 0)`

- Set the shadow offset in the X direction.
  - `xOff`: the X offset for the shadow

### 4. `shadowOffsetY(yOff = 0)`

- Set the shadow offset in the Y direction.
  - `yOff`: the Y offset for the shadow

### 5. `shadowOffset(xOff = 0, yOff = 0)`

- Set both the X and Y shadow offsets.
  - `xOff`: the X offset for the shadow
  - `yOff`: the Y offset for the shadow

### 6. `shadow(color = "#000", blur = 20, xOff = 0, yOff = 0)`

- Set the shadow properties, including color, blur, and offsets.
  - `color`: the color for the shadow
  - `blur`: the blur value for the shadow
  - `xOff`: the X offset for the shadow
  - `yOff`: the Y offset for the shadow

### 7. `noShadow()`

- Remove the shadow by resetting its properties to default values.

---
