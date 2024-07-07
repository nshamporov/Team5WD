//  Dynamic background
let attractionsMain;
let attractionsCanvas;
let maxDist;
let spacing;
let distance;
let ellipseSize;

function setup() {
    attractionsMain = document.querySelector('main');

    attractionsCanvas = createCanvas(attractionsMain.offsetWidth, attractionsMain.offsetHeight);     //  creating canvas with the size of the main tag
    attractionsCanvas.parent('attractionsCanvas');   //  assigning canvas to attractionsCanvas division by id

    maxDist = dist(0, 0, width, height);
    spacing = 40;   // Adjust spacing between ellipses
}

function draw() {
    background(255);
    fill(255, 217, 217);    //  Color of the ellipses
    noStroke();

    //  for loop to draw ellipses
    for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
            distance = dist(mouseX, mouseY, x, y);
            ellipseSize = map(distance, 0, maxDist, 60, -50);
            ellipse(x, y, ellipseSize, ellipseSize);
        }
    }
}