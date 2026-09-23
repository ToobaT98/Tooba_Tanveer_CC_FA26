let x = 0;
let lerpedMouseX = 0;
let lerpedMouseY = 0;

function setup(){

    createCanvas(windowWidth,windowHeight);
    speed=0; 
    rectMode(CENTER);
    angleMode(DEGREES);
}

// week 3 skethc 5 cod e- see this
let d = dist(mouseX, mouseY, )
 
function draw(){

    background(0);

    stroke(255);
    strokeWeight(2);
    fill(150, 600, 45);


    // simple demo of what lerp is

    // push()
    // translate(0,height/2)
    // rect(0,0, 50)
    // pop()

    // push()
    // translate(width,height/2)
    // rect(0,0, 50)
    // pop()

    // x = lerp(0,width,0.25)

    // push()
    // translate(x,height/2)
    // rect(0,0, 50)
    // pop()

    // lerpedMouseX = lerp(lerpedMouseX, mouseX,0.05);
    // lerpedMouseY = lerp(lerpedMouseY, mouseY,0.05);

    // push();
    // translate(lerpedMouseX,lerpedMouseY);
    // rect(0,0, 50);
    // pop();

    // push();
    // translate(windowWidth/2,windowHeight/2);
    // rect(0,0,50);
    // pop();
// 1st building

    push();
    translate (600, 600)
    rect(0, 0, 100, 300)
    pop()

    push();
    translate (700, 800)
    rect(0, 0, 100, 100)
    pop()
// 2nd building

 push();
    translate (500, 650)
    rect(0, 0, 100, 300)
    pop()

//  /3 building
    
    push();
    translate (400, 600)
    rect(0, 0, 50, 1000)
    pop()
    
// 4 building

    push();
    translate (300, 900)
    rect(0, 0, 40, 900)
    pop()

    // 5 building

      push();
    translate (200, 600)
    rect(0, 0, 40, 900)
    pop()

    // 6 building

     push();
    translate (150, 500)
    rect(0, 0, 80, 800)
    pop()


push();
    translate (90, 650)
    rect(0, 0, 100, 300)
    pop()

   // STARS
    // nested loops + translate
    // -------------------------

    for (let x = 0; x < width; x += 50) {

        for (let y = 0; y < height ; y += 100) {

            push();

            // move each star to a new position
            translate(x + random(100, -10), y + random(100, -10));

            fill(255);
            noStroke();

            ellipse(0, 0, 3, 4);

            pop();
        }
    }

        
          
    
    // for(let x = 0; x<20; x++){
    // for(let y=0; y<10; y++){
    //     push();
    //     translate(900,100);
    //     let spacing = 50;
    //     ellipse(50+x*spacing, 50+y*spacing, 10, 10)
    //     pop();
  
    // }
    // }
     
    // for(let x = 0; x<20; x++){
    // for(let y=0; y<10; y++){
    //     let spacing = 50;
    //     ellipse(70+x*spacing, 70+y*spacing, 10, 10)
    // }
    // }

  



    
    //circle(windowWidth/2,windowHeight/2,50);
}