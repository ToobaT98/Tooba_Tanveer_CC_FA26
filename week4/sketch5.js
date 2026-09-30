// let tileSize = 31
// let rows = 14
// let columns = 20

// p5.disableFriendlyErrors = true; 
// let bDoExportSvg = false; 

// function setup() {
//   createCanvas(576, 384);
//   background (255);
//   noFill();
//   stroke(0);
//   rectMode(CENTER)
// }

// function draw() {

// if (bDoExportSvg){
//     // Begin exporting, if requested
//     beginRecordSvg(this, "plotSvg_hello_animating.svg");
//   }


// //   background(220);
//   randomSeed (40)
//   let maxAngle = map(mouseY, 0, height, 0, PI)

//   for(let row = 0; row<rows; row++){
//     for(let column = 0; column<columns; column++){
//       let x = tileSize*column + tileSize/2;
//       let y = tileSize*row + tileSize/2;

//       push()
//       translate(x, y)
//       drawSq(row, maxAngle)
//       pop()
    
//     }
// }
//     if (bDoExportSvg){
//         endRecordSvg();
//         bDoExportSvg=false; 
//     }

// }
// function drawSq(row, angle){
//  let maxAngle = map(row, 0, rows-1, 0, angle);
//   let angleValue = random (-maxAngle, maxAngle)
//   rotate (angleValue)
//   rect(0, 0, 30, 30)
// }

// function keyPressed(){
//   if (key == 's'){
//     // Initiate SVG exporting
//     bDoExportSvg = true; 
//   }
// }





let r = 0

let w, h;
let numRects = 5; 

p5.disableFriendlyErrors = true; 
let bDoExportSvg = false; 

   
function setup(){

    createCanvas(400,400)

    w = width/numRects
    h = height/numRects

    rectMode(CENTER)
    angleMode(DEGREES)

    background(255)
    //noFill()
    strokeWeight(1)
    stroke(0)

   
}

function draw(){

     //background(245)

if (bDoExportSvg){
    // Begin exporting, if requested
    beginRecordSvg(this, "plotSvg.svg");
  }


  rect(mouseX, mouseY, 50,50)
//      translate(w/2, h/2)

//       for(let x = 0; x<numRects; x++){
        
//         for(let y = 0; y<numRects; y++){

//             let d = dist(mouseX, mouseY,w*x,y*h)

//             d = map(d,0,1000,1,0);
//             d = constrain(d,0,1);

//                 push()
//                 translate(w * x , h * y)
//                 rotate(r*d)
//                 rect(0,0,w*d,h*d);
//                 pop()
          
//         }
//     }
//     r++

//     if (bDoExportSvg){
//     // End exporting, if doing so
//     endRecordSvg();
//     bDoExportSvg = false;
//   }


}

function keyPressed(){
  if (key === 's'){
    // Initiate SVG exporting
    bDoExportSvg = true; 
    redraw();
  }
}