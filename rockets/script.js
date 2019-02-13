let rocket;
let population;
let lifespan = 200;

let lifeP;
let count = 0;

let target;

function setup() {
    createCanvas(750, 700);
    rocket = new Rocket();
    population = new Population();
    // lifeP = createP();
    target = createVector(width/2, 50)
}

function draw() {
    background(0);
    // rocket.update();
    // rocket.show();
    population.run();
    // lifeP.html(count);
    count++;
    if (count == lifespan) {
        count = 0; // continuously applies force
    }

    ellipse(target.x, target.y, 50, 50)
}

function DNA() {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
        this.genes[i] = p5.Vector.random2D(); // each gene is a random vector
        this.genes[i].setMag(0.1);
    }
}

function Population() {
    this.rockets = [];
    this.popsize = 50;

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
    this.vel = createVector();
    this.acc = createVector();
    this.dna = new DNA();

    this.applyForce = (force) => {
        this.acc.add(force); 
    }

    // standard physics engine for motion. This is where the physics happens
    this.update = () => {
        this.applyForce(this.dna.genes[count]);

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