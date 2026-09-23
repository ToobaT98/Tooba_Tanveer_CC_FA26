let r = 0

   
function setup(){

    createCanvas(windowWidth,windowHeight)

    rectMode(CENTER)
    angleMode(DEGREES)

     background(0)
    noFill()
    strokeWeight(2)
    stroke(255)


    for(let x = 0; x<20; x++){
    for(let y=0; y<10; y++){
        push();
        translate(900,100);
        let spacing = 50;
        ellipse(50+x*spacing, 50+y*spacing, 10, 10)
        pop();
  
    }
    }
     
    for(let x = 0; x<20; x++){
    for(let y=0; y<10; y++){
        let spacing = 50;
        ellipse(70+x*spacing, 70+y*spacing, 10, 10)
    }
    }







}
 
