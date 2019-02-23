
function Drop() {
    this.x = random(width)
    this.y = random(-500, -50) // where raindrops start
    
    this.z = random(0, 20)     // 0 if furthest away and 20 if closest to make space look 3D
    this.len = map(this.z, 0, 20, 10, 20)      // raindrop length
    this.yspeed = map(this.z, 0, 20, 1, 20)    // if raindrop is closer it will fall faster and if further it will fall slower

    this.fall = () => { 
        this.y += this.yspeed;
        this.gravity = map(this.z, 0, 20, 0, 0.15)
        this.yspeed += this.gravity // this adds a little more gravity to look realistic

        if (this.y > height) {
            this.y = random(-500, -50)
            this.yspeed = map(this.z, 0, 20, 1, 20) 
        }
    }

    this.show = () => {
        this.thick = map(this.z, 0, 20, 1, 3) // 1px if further and 3px wide if closer
        strokeWeight(this.thick)
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}