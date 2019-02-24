let slider;
let showAngle;
function setup() {
    createCanvas(windowWidth, 500)
    slider = createSlider(0, 2*PI, PI/4, 0.1)
    showAngle = createP()
}

function draw() {
    background(51)
    stroke(255)
    translate(windowWidth/2, height) // translates origin to this coordinate
    branch(100)
}

function branch(len) {
    var angle = slider.value()
    showAngle.html(angle)
    line(0, 0, 0, -len)
    translate(0, -len)  // translate up

    if (len > 5) {
        push()
            rotate(angle)
            branch(len * 0.67)
        pop()
        push()
            rotate(-angle)
            branch(len * 0.67)
        pop()
    }
}