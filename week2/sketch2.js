function setup(){
    createCanvas(windowWidth,windowHeight)
    background(100)

    fill(100,0,0)
    // noStroke()
    strokeWeight(3)
    stroke(200,100,0)
    

}
function draw(){
stroke (random(255), random(255), random(255))
    line(pmouseX,pmouseY,mouseX,mouseY)

}

//function mouseDragged(){

// let w = mouseX
// let h = mouseY
        
// ellipse(mouseX,mouseY,w, h)
// random([10], [70])
//fill(random(150)) 
//background(100);
// }
function mousePressed(){
        //  background(100);
}
// function keyPressed() {
// background(100);
// } 