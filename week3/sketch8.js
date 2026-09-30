// let r = 50

// function setup(){

//     createCanvas(windowWidth,windowHeight)

//     rectMode(CENTER)
//     angleMode(DEGREES)

    
   
// }

// function draw(){

//     background(0)
//     noFill()
//     strokeWeight(2)
//     stroke(255)

//     translate(width/2-mouseX,0)
//     push() 
// // push means save from this new position

//     translate(width/2+200,height/2)
//     rotate(r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(r)
//     rect(0,0, 50)

//     pop()

//     push()

//     translate(width/2-200,height/2)
//     rotate(-r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(-r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(-r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(-r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(-r)
//     rect(0,0, 50)

//     line(0,0,0,200)
//     translate(0,200)
//     rotate(-r)
//     rect(0,0, 50)

//     pop()

    


//     push()
//     translate(width/2,3*height/4,)
//     rect(0,0, 400,height/2)
    
//     rect(0,0,50,50)

//     translate(0,-height/4 -75)
//     rect(0,0,80, 150)

//     fill(0)

//     translate(0,-100)

//     rect(0,0,150,100,10)

//     pop()


//     r++
// }

// function setup(){
//     createCanvas(windowWidth,windowHeight)
//     background(100)

//     fill(100,0,0)
//     // noStroke()
//     strokeWeight(15)
//     stroke(200,100,0)
    

// }
// function draw(){
// ellipse(mouseX,mouseY,50, 50)

// }

// function mousePressed(){
//         background(100)

// }

// function setup(){
//     createCanvas(windowWidth,windowHeight)
//     background(100)

//     fill(100,0,0)
//     // noStroke()
//     strokeWeight(3)
//     stroke(200,100,0)
    

// }
// function draw(){


// }

// function mouseDragged(){
        
//     line(pmouseX,pmouseY,mouseX, mouseY)
//    // background(100);
// }
// function mousePressed(){
//         //    background(100);
// }
// // function keyPressed() {
// //              background(100);
// // } 


// let r = 0

// function setup(){

//     createCanvas(windowWidth,windowHeight)

//     // rectMode(CENTER)
//     angleMode(DEGREES)

//      background(0)
//     noFill()
//     strokeWeight(2)
//     stroke(255)

//     frameRate(1)
   
// }

// function draw(){

//      background(0)

//       for(let i = 0; i<100; i++){
        
//         push()
//         translate(random(0,width),random(0,height))
//         ellipse(0, 0, random(100),random(100));
//         pop()

//     }


// }

let r = 0

let w, h;
let numRects = 20; 


   
function setup(){

    createCanvas(windowWidth,windowHeight)

    w = width/numRects

    h = height/numRects

    rectMode(CENTER)
    angleMode(DEGREES)

    background(0)
    fill(0)
    strokeWeight(2)
    stroke(255)

 

    // frameRate(2)
   
}

function draw(){

     background(0)

    //  translate(20,20)

    //   for(let x = 0; x<numRects; x++){
        
    //     push()
    //     translate( w*x , 0)
    //     rect(0,0,w/2,100);

    //     pop()

    // }

     //  translate(20,20)

    // for(let x = 0; x<numRects; x++){

    //     for(let y = 0; y<numRects; y++){
    //         push()
    //         translate( w * x , h * y)
    //         rotate(r)
    //         rect(0,0,10 + y*2,h/2);
    //         pop()

    //     }
    // }

    // translate(w/2, h/2)

    //   for(let x = 0; x<numRects; x++){

    //     for(let y = 0; y<numRects; y++){

          
       

    //     for(let i = 0; i<5; i++){

    //         push()
    //         translate( w * x , h * y)
    //         rotate(r)
    //         rect(0,0,w-20*i,h-20*i);
    //         pop()
           

    //     }
    // }
    // }



     translate(w/2, h/2)

      for(let x = 0; x<numRects; x++){
        
        for(let y = 0; y<numRects; y++){

            let d = dist(mouseX, mouseY,w*x,y*h)

            d = map(d,0,1000,1,0);
            d = constrain(d,0,1);

                push()
                translate(w * x , h * y)
                rotate(r*d)
                rect(0,0,w*d,h*d);
                pop()
          
        }
    }

    r++


}