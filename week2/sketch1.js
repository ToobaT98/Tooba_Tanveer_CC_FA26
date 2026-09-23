function setup(){
    createCanvas(400,400)
    background(255)

    fill(100,0,0)
    // noStroke()
    // strokeWeight(15)
    stroke(200,100,0)

}
function draw(){
// fill (mouseX, mouseY, 100)

fill (mouseY,255-mouseY,mouseX)
ellipse(width/2, mouseY ,50+ mouseY/2)
print(mouseY)

}

// function mouseClicked(){
//         background(100)


// }
