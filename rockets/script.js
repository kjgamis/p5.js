let rocket;
let population;

function setup() {
    createCanvas(750, 750);
    rocket = new Rocket();
    population = new Population();
}

function draw() {
    background(0);
    // rocket.update();
    // rocket.show();
    population.run();
}

function Population() {
    this.rockets = [];
    this.popsize = 25 ;

    for (var i = 0; i < this.popsize; i++) {
        this.rockets[i] = new Rocket();

    }

    this.run = () => {
        for (var i = 0; i < this.popsize; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}

// constructor function
function Rocket() {
    this.pos = createVector(width/2, height);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();

    this.applyForce = (force) => {
        this.acc.add(force); 
    }

    // standard physics engine for motion. This is where the physics happens
    this.update = () => {
        this.pos.add(this.vel); 
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    this.show = () => {
        push();
            noStroke();
            fill(255, 150);
            translate(this.pos.x, this.pos.y);
            rotate(this.vel.heading()) // heading( ) is the angle of the direction where the vector is pointing at a defined velocity
            rectMode(CENTER);
            rect(0, 0, 25, 5);
        pop();
    }
}