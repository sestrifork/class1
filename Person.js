const SPACEBETWEENBOXES = 3;
const VIRUS_DANGER = 3;
const NOT_INFECTED = 0;
const DECEASED = 999998;
const IMMUNE = 999999;
const ALL = 999999;
const SICKNESSPERIOD = 14; 

class Person {
    // class methods
    constructor(x, y, boxsize) { 
        this.x = x;
        this.y = y;
        this.boxsize = boxsize;
        this.infected = NOT_INFECTED; 
    }
    isInfectedToday (infectionDay) {
        return (infectionDay == this.infected);
    }
    isInfected() {
        return ((this.infected != NOT_INFECTED) && (this.infected != IMMUNE));
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
        if (this.infected == NOT_INFECTED) {
            this.infected = dayCounter;
        }
    }

    updateImmunity(dayCounter) {
        if(Math.abs(this.infected - dayCounter) > SICKNESSPERIOD) {
            if(this.isInfected()) {
                this.infected = IMMUNE;
            }
        }
    }

    drawOn2DContext(ctx) {
        switch (this.infected) {
            case NOT_INFECTED:
                ctx.strokeStyle = "#008000"; //green
                break; 
            case IMMUNE:
                ctx.strokeStyle = "#000000"; //black
                break;
            case DECEASED: 
                ctx.strokeStyle = "#0F0F0F"; // grey
            break ;

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
        if (
            (this.isInfected()) && 
            ((dayCounter-this.infected)>SICKNESSPERIOD)
            ) {
            this.infected = IMMUNE; 
        }
    }

    static unitTest(testcase) {
        var start_time = new Date();
        var tests = [];
        function unitTest1() {
            var newPerson1 = new Person(100,100,50);
            var newPerson2 = new Person(100,100,50);
            var testReport;

            if (newPerson1.isOverlapping(newPerson2)) {
                testReport = "Person test 0 passed";
            } else {
                testReport = "!Person test 0 NOT passed!";
            }
            console.log(testReport);
            tests.push([1, testReport]);
        }
        switch (testcase) {
            case 0: // Test basic overlap
                unitTest1();
                break;
            
            // Insert new test here
            default:
                unitTest1();
                break;
        }
        var stop_time = new Date();
        console.log(tests.length + " tests performed in " + (stop_time.getTime()-start_time.getTime()) + " ms");
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