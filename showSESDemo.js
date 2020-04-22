var People ;
var DayCounter = 1;
var PeopleDiagram = [];
var myTimer;

class DataPoint {
    // class methods
    constructor(day, noninfected, infected, immune, deceased) { 
        this.day = day;
        this.noninfected = noninfected;
        this.infected = infected;
        this.immune = immune;
        this.deceased = deceased; 
    }
}

function showChart(peopleDatapoints){
    var chart = new CanvasJS.Chart("chartContainer", {
        title:{
            text: "COVID-19 development"
        },
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
        animationEnabled: false,
        axisX: {
            interval: 1,
            intervalType: "days"
        },
        toolTip: {
            shared: true
        },
        data: [
        {        
            type: "stackedArea100",
            name: "Deceased",
            showInLegend: "true",
            dataPoints: []
        },    
        {        
            type: "stackedArea100",
            name: "Infected",
            showInLegend: "true",
            dataPoints: []
        },
        {        
            type: "stackedArea100",
            name: "Immune",
            showInLegend: "true",
            dataPoints: []
        },
        {        
            type: "stackedArea100",
            name: "Not infected",
            xValueFormatString: "DD, MMM",
            showInLegend: "true",
            dataPoints: []
        }
        ]
    });

    // add the data
    peopleDatapoints.forEach(datapoint => {
        chart.options.data[0].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.deceased});
        chart.options.data[1].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.infected});
        chart.options.data[2].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.immune});
        chart.options.data[3].dataPoints.push({ x: new Date(2020, 03, datapoint.day), y: datapoint.noninfected});
    });
    chart.render();
}


function showSESDemo() {
    const MAXINTERATIONS = 100000;
    var page = getPageFromURL();
    var boxsize = document.getElementById("boxSize").value ;
    var populationSize = document.getElementById("populationSize").value ;
    var c = document.getElementById("sesCanvas");
    var ctx = c.getContext("2d");
    var moveSize = 5;

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

            Person.unitTest(ALL);

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
                    iterations++;
                } while (People.length < populationSize && iterations < MAXINTERATIONS);

                // Choose 3 random persons to have the virus
                for (i=0; i<3; i++) {
                    var index = Math.floor(Math.random()*(People.length-1));
                    if ((index => 0) && (index < People.length) && (People[index].infected == false)) {
                        console.log(index + " is infected") ;
                        People[index].infected = DayCounter;
                    } 
                }
                // TODO Tjek for dobbel random ending up with less than 3 infected
                document.getElementById("nextday").innerHTML = "Next day";
                document.getElementById("populationSize").disabled = true;
                document.getElementById("boxSize").disabled = true;
                
                // magic timer
                myTimer = setInterval(showSESDemo,500);
            } else {
                //Count the amount of days passed
                DayCounter++;

                // Spred the VIRUS!
                for (i=0; i < People.length; i++) {
                    var person = People[i] ;
                    if (person.infected) {
                        // Infect all persones inside this persons infections zone
                        for (j=0; j < People.length; j++) {
                            otherperson = People[j] ;
                            if ((otherperson.infected == 0) && otherperson.isInsideInfectionzone(person) && (person.infected != DayCounter)) {
                                otherperson.infected = DayCounter ;
                            }
                        }
                    }
                    person.moveRandom(moveSize);
                    person.liveOrDie(DayCounter);
                }
            }

            // Visualize the Population on the canvas
            // and count the categories
            var datapoint = new DataPoint(DayCounter, 0,0,0,0);
            People.forEach(person => {
                person.drawOn2DContext(ctx);
                switch (person.infected) {
                    case NOT_INFECTED : datapoint.noninfected++; break ;
                    case IMMUNE : datapoint.immune++; break;
                    case DECEASED : datapoint.deceased++; break;
                    default : datapoint.infected++;
                }
            });
            ctx.fillText("Infected = " + ((datapoint.infected*100)/People.length) + "%", 5, c.height);
            ctx.fillText("Days Passed = " + datapoint.day + " days", 5, c.height - 15);

            // Save data in PeopleDiagram
            PeopleDiagram.push(datapoint);
            showChart(PeopleDiagram);

            if (datapoint.infected == 0) {
                clearInterval(myTimer);
            }
            break;

        case 5:

            for (i=0; i<PeopleDiagram.length; i++) {
                var soegle = PeopleDiagram[i];
                // Tegn de døde som sort rect i y=0
                if (soegle[DOEDE] != 0) {
                    ctx.strokeStyle = "#000000"; //black
                    ctx.strokeRect(i*10, c.height-soegle[DOEDE]*10, 10, soegle[DOEDE]*10);
                }
                // Tegn de syge som rød rect i y=døde
                if (soegle[SYGE] != 0) {
                    ctx.strokeStyle = "#FF0000"; //red
                    ctx.strokeRect(i*10, c.height-(soegle[DOEDE]+soegle[SYGE])*10, 10, soegle[SYGE]*10);
                }

                // Tegn de immune som sorte rect i y=døde+syge
                // De raske er hvide, så der tegner vi ikke noget
            }

            break;

        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID4");
    c.innerHTML = "Programmed by Søren E";
 }
