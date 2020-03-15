export class Person {
    // class methods
    constructor(x, y, boxsize) { 
        this.x = x;
        this.y = y;
        this.boxsize = boxsize;
        this.infected = false; 
    }

    isOverlapping(otherPerson) {
        return ((Math.abs(this.x-otherPerson.x) < this.boxsize + 3) && (Math.abs(this.y-otherPerson.y) < boxsize + 3)) ;
    }

    isInsideInfectionzone(infectedPerson) {
        return isOverlapping(infectedPerson) ;
    }

    drawOn2DContext(ctx) {
        if (this.infected) {
            ctx.strokeStyle = "#FF00FF";
        } else {
            ctx.strokeStyle = "#000000";
        }
        ctx.rect(this.x, this.y, this.boxsize, this.boxsize);
    }
}

export class RandomPerson extends Person {
    constructor(canvassize, boxsize){
        super(
            Math.floor(Math.random() * (canvassize-boxsize),
            Math.floor(Math.random() * (canvassize-boxsize),
            boxsize
            );
          this.name ="RandomPerson";  
    }
}