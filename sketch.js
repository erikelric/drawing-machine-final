let array = [];
let strokeWidth = 5;
let colorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  strokeWeight(5);

    // colorPicker = createColorPicker('#ed225d');
    // colorPicker.position(0, height + 5);

}


function draw() {

  // background(colorPicker.color());
  background(220, 5);
  strokeWeight(strokeWidth);

if (mouseIsPressed){
  // line(mouseX, mouseY, pmouseX, pmouseY);
  // stroke(map(mouseX, 0, 600, 0, 255, true))

  //Symmetric drawing
  // ellipse(mouseX, mouseY, 4, 4);

  // ellipse(mouseX, height - mouseY, 4, 4);
  // ellipse(width - mouseX, mouseY, 4, 4);
  // ellipse(width - mouseX, height - mouseY, 4, 4);

  // array.push([mouseX, mouseY]);

  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, mouseY, width - pmouseX, pmouseY);

  }

}

function keyTyped(){

    if (key === `s`){
      //save this image
      saveCanvas(`fileName`, `png`);
    } else if (key === 'c'){
      // clear the image
      background(255);
      clear();

      for(let i = 0; i < array.length; i++){
        // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
        curveVertex(array[i][0], array[i][1])
      }
      endShape();

    }

    return false;
}
