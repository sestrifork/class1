const SPACEBETWEENBOXES = 3;
const VIRUS_DANGER = 4;
const IMMUNE = 9999; 

class Person {
    // class methods
    constructor(x, y, boxsize) { 
        this.x = x;
        this.y = y;
        this.boxsize = boxsize;
        this.infected = 0; 
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

    infect(dayCounter) {
        this.infected = dayCounter;
    }

    drawOn2DContext(ctx) {
        switch (this.infected) {
            case 0:
                ctx.strokeStyle = "#008000"; //green
                break; 
            case IMMUNE:
                ctx.strokeStyle = "#000000"; //black
                break;
            default:
                ctx.strokeStyle = "#FF0000"; //red
        }
        ctx.strokeRect(this.x, this.y, this.boxsize, this.boxsize);
    }

    moveRandom(moveSize) {
        var deltaX = Math.floor(Math.random()*moveSize-moveSize/2);
        var deltaY = Math.floor(Math.random()*moveSize-moveSize/2);

        if (this.x+deltaX > 0) {
            this.x = this.x + deltaX;
        }
        if (this.y+deltaY > 0) {
            this.y = this.y + deltaY;
        }
    }

    liveOrDie(dayCounter) {
        if ((dayCounter-this.infected)>13) {
            this.infected = IMMUNE; 
        }
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