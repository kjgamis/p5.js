function setup() {
    createCanvas(800, 800);
}

function draw() {

    angleMode(DEGREES);
    background(0);
    translate(250, 250);
    rotate(-90);

    let d = day();
    let hr = hour();
    let min = minute();
    let sec = second();

    strokeWeight(10);
    noFill();
    

    // hours
    stroke(150, 255, 100);
    let hoursAngle = map(hr % 12, 0, 12, 0, 360); //minutes, 0-60 seconds, 0-360 degrees
    arc(0, 0, 400, 400, 0, hoursAngle);
    push();
        rotate(hoursAngle);
        stroke(150, 255, 100);    
        line(0, 0, 75, 0);
    pop();

    // minutes
    stroke(150, 100, 255);
    let minutesAngle = map(min, 0, 60, 0, 360) //minutes, 0-60 seconds, 0-360 degrees
    arc(0, 0, 370, 370, 0, minutesAngle);

    push();
        rotate(minutesAngle);
        stroke(150, 100, 255);    
        line(0, 0, 100, 0);
    pop();

    // seconds
    stroke(255, 100, 150); // pink
    let secondsAngle = map(sec, 0, 60, 0, 360) //seconds, 0-60 seconds, 0-360 degrees
    arc(0, 0, 340, 340, 0, secondsAngle);
    
    push();
        rotate(secondsAngle);
        stroke(255, 100, 150);    
        strokeWeight(2)
        line(0, 0, 100, 0);
    pop();

    // point in middle
    stroke(255);
    point(0, 0)

    

    

}
