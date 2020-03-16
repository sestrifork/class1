const SPACEBETWEENBOXES = 3;
const VIRUS_DANGER = 4; 

class Person {
    // class methods
    constructor(x, y, boxsize) { 
        this.x = x;
        this.y = y;
        this.boxsize = boxsize;
        this.infected = false; 
    }

    isOverlappingBoxsize(otherPerson, boxsize) {
        return (
            (Math.abs(this.x-otherPerson.x) < (boxsize + SPACEBETWEENBOXES)) && 
            (Math.abs(this.y-otherPerson.y) < (boxsize + SPACEBETWEENBOXES))) ;
    }

    isOverlapping(otherPerson) {
        var boxsize = Math.max(this.boxsize, otherPerson.boxsize);
        return this.isOverlappingBoxsize(otherPerson, boxsize);
    }

    isInsideInfectionzone(infectedPerson) {
        return this.isOverlappingBoxsize(infectedPerson, infectedPerson.boxsize*VIRUS_DANGER) ;
    }

    infect() {
        this.infected = true;
    }

    drawOn2DContext(ctx) {
        if (this.infected) {
            ctx.strokeStyle = "#FF0000"; //red
            console.log("Red");
        } else {
            ctx.strokeStyle = "#008000"; //green
        }
        ctx.strokeRect(this.x, this.y, this.boxsize, this.boxsize);
    }
}

class RandomPerson extends Person {
    constructor(canvassize_x, canvassize_y, boxsize){
        super(
            Math.floor(Math.random() * (canvassize_x-boxsize)-1)+1,
            Math.floor(Math.random() * (canvassize_y-boxsize)-1)+1,
            boxsize
            );
          this.name ="RandomPerson";  
    }
}