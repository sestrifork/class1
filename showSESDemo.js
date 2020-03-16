var People ;

function countInfected() {
    var infected = 0;
    function count_local(value) {
        if (value.infected) {
            infected++;
        }
    }
    People.forEach(count_local);
    return infected;
}

function showSESDemo() {
    var page = getPageFromURL();
    var boxsize = document.getElementById("boxSize").value ;
    var c = document.getElementById("sesCanvas");
    var ctx = c.getContext("2d");
    let populationSize = 200 ;
    const MAXINTEGRATIONS = 1000;

    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    switch (page) {
        case 0:
            var x = Math.floor(Math.random() * (c.width-boxsize));
            var y = Math.floor(Math.random() * (c.height-boxsize));
            ctx.rect(x, y, boxsize, boxsize);
            var x1 = Math.floor(Math.random() * (c.width-boxsize));
            var y1 = Math.floor(Math.random() * (c.height-boxsize));
            ctx.rect(x1, y1, boxsize, boxsize);
                    
            break ;

        case 1:
            for (i = 0; i < 10; i++) {
                var x = Math.floor(Math.random() * (c.height-boxsize));
                var y = Math.floor(Math.random() * (c.width-boxsize));
                ctx.rect(x, y, boxsize, boxsize);
            }
            break;
        case 2: // same as case 1
            var x = [] ;
            var y = [] ;
            var numberOfRectangles = 100 ;
            for (i = 0; i < numberOfRectangles; i++) {
                x[i] = Math.floor(Math.random() * (c.height-boxsize));
                y[i] = Math.floor(Math.random() * (c.width-boxsize));
                if ((y[i]>100) && (y[i]<200) && (x[i]>100) && (x[i]<200)) {
                } else { 
                    i--;
                }
            }
            
            for (i=0; i<numberOfRectangles;i++) {
                ctx.rect(x[i],y[i], boxsize, boxsize);
            }
            break ;
        case 3:
            var newvirus = {
                x: Math.floor(Math.random() * (c.height-boxsize)),
                y: Math.floor(Math.random() * (c.width-boxsize)),
                size: boxsize
            };
            function drawRectangle(virus) {
                ctx.rect(virus.x, virus.y, virus.size, virus.size);
            }
            Virus.push(newvirus);
            Virus.forEach(drawRectangle);
            break;
        case 4:
            var iterations = 0;
            // First run we create the population and add three infected people
            if (People == null) {
                People = new Array();
                // Initiate the population
                newPerson = new RandomPerson(c.width, c.height, boxsize);
                People.push(newPerson);
                do {
                    let i=0;
                    let overlapping = false;
                    let newPerson = new Person(
                        Math.floor(Math.random() * (c.width-boxsize)),
                        Math.floor(Math.random() * (c.height-boxsize)), 
                        boxsize
                        );
                    // Now tjek overlap with current population
                    do {
                        if (newPerson.isOverlapping(People[i])) {
                            overlapping = true ;
                        }
                        i++;
                    } while (i<People.length && (overlapping == false));
                    if (overlapping == false) {
                        People.push(newPerson);
                    }
                    console.log("Length=" + People.length + " Overlapping: " + overlapping);
                    iterations++;
                } while (People.length < populationSize && iterations < MAXINTEGRATIONS);

                // Choose 3 random persons to have the virus
                for (i=0; i<3; i++) {
                    var index = Math.floor(Math.random()*(People.length-1));
                    if ((index => 0) && (index < People.length) && (People[index].infected == false)) {
                        console.log(index + " is infected") ;
                        People[index].infect();
                    } 
                }
                // TODO Tjek for dobbel random ending up with less than 3 infected

            } else {
                // Spred the VIRUS!
                for (i=0; i < People.length; i++) {
                    var person = People[i] ;
                    if (person.infected) {
                        // Infect all persones inside this persons infections zone
                        for (j=0; j < People.length; j++) {
                            otherperson = People[j] ;
                            if (otherperson.isInsideInfectionzone(person)) {
                                otherperson.infected = true ;
                            }
                        }
                    }
                }
            }

            // Monitor the Population on the canvas
            function draw(value, index, array) {
                value.drawOn2DContext(ctx);
            }
            People.forEach(draw);
            var infected = countInfected();
            ctx.fillText("%Infected = " + ((infected*100)/People.length) + "%", 10, c.height-50);
            break;


        case 99:
            
            break;

        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID1");
    c.innerHTML = "Programmed by Joakim";
 }
