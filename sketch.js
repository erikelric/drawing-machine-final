let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 50, 133);

  strokeWeight(5);


}

function draw() {

if (mouseIsPressed){
  // line(mouseX, mouseY, pmouseX, pmouseY);
  stroke(map(mouseX, 0, 600, 0, 255, true))
  // array.push([mouseX, mouseY]);
  line(width - mouseX, height- mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

    if (key === `s`){
      //save this image
      saveCanvas(`fileName`, `png`);
    } else if (key === 'd'){
      // diplay the image
      background(255);

      for(let i = 0; i < array.length; i++){
        // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
        curveVertex(array[i][0], array[i][1])
      }
      endShape();

    }

    return false;
}
