//  Dynamic background
let maxDist;
let spacing;
let accommodationsMain;
let accommodationsCanvas;
let distance;
let ellipseSize;

function setup() {
    accommodationsMain = document.querySelector('main');

    accommodationsCanvas = createCanvas(accommodationsMain.offsetWidth, accommodationsMain.offsetHeight);   //  creating canvas with the size of the main tag
    accommodationsCanvas.parent('accommodationsCanvas');    //  assigning canvas to accommodationsCanvas division by id

    maxDist = dist(0, 0, width/2, height/2);
    spacing = 30;   // Adjust spacing between ellipses
}


function draw() {
    background(255);
    fill(255, 217, 217);    //  Color of the ellipses
    noStroke();

    //  for loop to draw ellipses
    for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
            distance = dist(mouseX, mouseY, x, y);
            ellipseSize = map(distance, 0, maxDist, 10, 70);
            ellipse(x, y, ellipseSize, ellipseSize);
        }
    }
}   

    


