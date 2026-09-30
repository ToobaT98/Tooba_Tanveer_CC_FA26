
// // let wavesPerCanvas = 3
// // let amplitude = 200
// // let offset = 4;
// // let yLoc

// // function setup(){
// //     createCanvas(windowWidth,windowHeight)
// //     yLoc = height/2
// //     noFill()

// // }

// // function draw(){  
// //     background(230)

// //     push()

// //     translate(0,yLoc)

// //     beginShape()
// //     for(let i =0; i<width;i++){

// //         mappedI = map(i,0,width,0, wavesPerCanvas*TWO_PI)
// //         let y = sin(mappedI - offset)*amplitude
// //         let x = i
// //         vertex(x,y)

// //     }
// //     endShape()

// //     pop()

// //     offset = frameCount*0.01
// // }

// let numcolumn = 4
// let numrow = 6
// let tilesize = 100

// function setup(){

//     createCanvas(600,700);
//     background(255);
//     stroke(0);
//     strokeWeight(2);
//     noFill();
//     noLoop();

// }
 
// function draw(){

//     for(let col = 0; col<numcolumn; col++){
//     let x = (col*tilesize) + tilesize/2
//     push()
//         translate (x, height/2)
//         ellipse(0, 0, 40, 60)
//         ellipse(0, 0, 80, 30)
//     pop() 

//     }

let tileSize = 31
let rows = 14
let columns = 20

function setup() {
  createCanvas(576, 384);
  background (255);
  noFill();
  stroke(0);
  rectMode(CENTER)
}

function draw() {
  background(220);
  randomSeed (40)
  let maxAngle = map(mouseY, 0, height, 0, PI)

  for(let row = 0; row<rows; row++){
    for(let column = 0; column<columns; column++){
      let x = tileSize*column + tileSize/2;
      let y = tileSize*row + tileSize/2;

      push()
      translate(x, y)
      drawSq(row, maxAngle)
      pop()
    }
    }
}
function drawSq(row, angle){
 let maxAngle = map(row, 0, rows-1, 0, angle);
  let angleValue = random (-maxAngle, maxAngle)
  rotate (angleValue)
  rect(0, 0, 30, 30)
}