# p5.chart.js

**Interactive, Mobile-Responsive Data Visualization Library for p5.js**

*By: Siddharth Chattoraj*

## Installation

You only need to use **one** of the following methods:

### 1. NPM

Install via npm:

```sh
npm install p5.chart
```

Then create an `html` file like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
    <script src="node_modules/p5.chart/p5.chart.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body></body>
</html>
```

You can now create a `sketch.js` file to build your charts.

### 2. CDN

Create an `html` file like this (include p5.js first, then p5.chart.js):

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/p5.chart/p5.chart.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body></body>
</html>
```

You can now create a `sketch.js` file to build your charts.

### 3. Local File

Download `p5.chart.js` and `libraries/p5.min.js`, place them in your project folder, and create an `html` file like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="p5.min.js"></script>
    <script src="p5.chart.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body></body>
</html>
```

You can now create a `sketch.js` file to build your charts.

### 4. Clone or Download the Repo

Clone or download this repository and start experimenting directly in `sketch.js`. This option is useful for quickly exploring examples or modifying charts without setting up a separate project.

## Directory

`documentation`: Folder containing comprehensive methods exposed to user in both .pdf and .tex form.

`examples`: Folder containing examples for each of the charts

• `base`: Basic chart examples relying almost entirely on the library

• `slightly_more_advanced`: More complex examples, including versions that are integrated with the greater p5.js ecosystem

`libraries`: p5.js is located here

`logo`: Contains the logo for submission to the Processing Foundation

`p5.chart.js`: Library

`sketch.js`: Build your own charts in this template file