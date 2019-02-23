let drops = [];

function setup() {
    createCanvas(750, 500)
    for (var i=0; i < 500 ; i++) {
        drops[i] = new Drop()
    }
}

function draw() {
    background(230, 230, 250)
    for (var i=0; i < 500 ; i++) {
        drops[i].fall()
        drops[i].show()
    }
}