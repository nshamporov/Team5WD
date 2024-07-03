let attractionsMain;
let attractionsCanvas;
let maxDist;
let spacing;

function setup() {
    attractionsMain = document.querySelector('main');

    attractionsCanvas = createCanvas(attractionsMain.offsetWidth, attractionsMain.offsetHeight);
    attractionsCanvas.parent('attractionsCanvas');

    maxDist = dist(0, 0, width, height);
    spacing = 40;
}

function draw() {
    background(255);
    fill(255, 217, 217); // SECONDARY LIGHT
    noStroke();

    for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
            let d = dist(mouseX, mouseY, x, y);
            let ellipseSize = map(d, 0, maxDist, 50, -50);
            ellipse(x, y, ellipseSize, ellipseSize);
        }
    }
}