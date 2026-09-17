
let size = 50
let speed = 5

function setup(){
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)
}


function draw() {
background(255)


fill (random(255), random(255), random (255))
rect(width / 2, height / 2, size, size)

size = size + speed

if (size> max(width, height)) {
  size = 50
}
}

   