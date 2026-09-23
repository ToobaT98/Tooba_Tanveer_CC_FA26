let spiralSize = 0;

let lerpedMouseX = 0;
let lerpedMouseY = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    lerpedMouseX = mouseX;
    lerpedMouseY = mouseY;

    fill(150, 50, 25);
    stroke(0);
    strokeWeight(1);
}

function draw() {
    background(220);

    // Smooth mouse movement
    lerpedMouseX = lerp(lerpedMouseX, mouseX, 0.1);
    lerpedMouseY = lerp(lerpedMouseY, mouseY, 0.1);

    // Grow the spiral when mouse is pressed
    if (mouseIsPressed) {
        spiralSize = lerp(spiralSize, 80, 0.1);
    } else {
        spiralSize = lerp(spiralSize, 0, 0.1);
    }

    push();

    // Put the spiral where the mouse is
    translate(lerpedMouseX, lerpedMouseY);

    // Create the spiral
    for (let i = 0; i < spiralSize; i++) {

        push();

        // Rotate the coordinate system
        rotate(i * 30);

        // Move farther from the centre
        translate(i * 2, 0);

        // Draw a small circle
        ellipse(0, 0, 8, 8);

        pop();
    }

    pop();
}


