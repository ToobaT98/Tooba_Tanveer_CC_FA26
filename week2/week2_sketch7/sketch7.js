
let size = 20
let speed = 1

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
  size = 20
}
}

   