function setup() {
  createCanvas(380, 570);
  noLoop();
}

function draw() {
  background(242, 238, 228);
  noStroke();

  let cx = width / 2;
  let cy = height / 2 - 20;

  fill(210, 205, 195);
  for (let i = 0; i < 40; i++) {
    let x = (i * 73) % width;
    let y = (i * 47) % height;
    ellipse(x, y, 3, 3);
  }

  noFill();
  stroke(30, 35, 45);
  strokeWeight(14);
  arc(cx, cy + 20, 220, 160, PI, 0);

  noStroke();
  fill(50, 58, 72);
  ellipse(cx - 110, cy + 70, 110, 110);
  ellipse(cx + 110, cy + 70, 110, 110);

  noFill();
  stroke(90, 105, 125);
  strokeWeight(6);
  ellipse(cx - 110, cy + 70, 80, 80);
  ellipse(cx + 110, cy + 70, 80, 80);

  noStroke();
  fill(220, 225, 235);
  ellipse(cx - 110, cy + 70, 46, 46);
  ellipse(cx + 110, cy + 70, 46, 46);

  fill(160, 175, 190);
  ellipse(cx - 110, cy + 70, 20, 20);
  ellipse(cx + 110, cy + 70, 20, 20);

  fill(30, 35, 45);
  rect(cx - 125, cy - 10, 30, 30, 4);
  rect(cx + 95, cy - 10, 30, 30, 4);

  fill(255, 255, 255, 90);
  ellipse(cx - 130, cy + 50, 22, 10);
  ellipse(cx + 90, cy + 50, 22, 10);

  stroke(80, 90, 105);
  strokeWeight(4);
  line(cx - 15, cy + 120, cx - 15, cy + 180);
  line(cx + 15, cy + 120, cx + 15, cy + 180);
}