// p5.chart.js Logo
const palette = ["#D4A373", "#E76F51", "#F4A261", "#E9C46A", "#F28482", "#E5989B", "#B5838D", "#F7B267"];

function setup() {
  createCanvas(1500, 1000);
  noLoop();
  textFont('Roboto');
}

function draw() {
  drawGradientBg();
  drawPie(width/2, height/2 - 130, 320);
  drawLogoText();
  drawPaletteDots();
}

function drawGradientBg() {
  for (let y = 0; y < height; y++) {
    let t = y / (height - 1);
    let c = lerpColor(color("#E9C46A"), color("#B5838D"), t);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawPie(cx, cy, d) {
  push();
  translate(cx, cy);
  let vals = [12,13,12,13,12,13,12,13];
  let total = 100;
  let a0 = -HALF_PI;
  // Set drop shadow for pie
  drawingContext.shadowColor = 'rgba(0,0,0,0.4)';
  drawingContext.shadowBlur = 15;
  drawingContext.shadowOffsetX = 6;
  drawingContext.shadowOffsetY = 6;
  for (let i = 0; i < vals.length; i++) {
    let a1 = a0 + (vals[i] / total) * TWO_PI;
    fill(palette[i]);
    noStroke();
    arc(0, 0, d, d, a0, a1, PIE);
    a0 = a1;
  }
  // Reset shadow
  drawingContext.shadowColor = 'transparent';
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  pop();
}

function drawLogoText() {
  push();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(125);
  // Main text with drop shadow
  fill('#E76F51');
  drawingContext.shadowColor = 'rgba(0,0,0,0.4)';
  drawingContext.shadowBlur = 18;
  drawingContext.shadowOffsetX = 7;
  drawingContext.shadowOffsetY = 7;
  text('p5.chart.js', width/2, height/2 + 104);
  // Reset shadow
  drawingContext.shadowColor = 'transparent';
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  pop();
}

function drawPaletteDots() {
  let n = palette.length;
  let margin = 120;
  let spacing = (width - 2 * margin) / (n - 1);
  // Set drop shadow for dots
  drawingContext.shadowColor = 'rgba(0,0,0,0.4)';
  drawingContext.shadowBlur = 7;
  drawingContext.shadowOffsetX = 3;
  drawingContext.shadowOffsetY = 3;
  for (let i = 0; i < n; i++) {
    let x = margin + i * spacing;
    noStroke();
    fill(palette[i]);
    circle(x, height - 60, 20);
  }
  // Reset shadow
  drawingContext.shadowColor = 'transparent';
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
}

