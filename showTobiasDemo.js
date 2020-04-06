var People;

function showTobiasDemo() {
    const MAXITERATOR = 10000;
    var page = getPageFromURL();
    var boxsize = 20;
    var c = document.getElementById("tobiasCanvas");
    var ctx = c.getContext("2d");
    var green = document.getElementById("green circle.png");
    var red = document.getElementById("red circle.png");

    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);


    switch (page) {
        case 1:
            for (i = 0; i < 10; i++) {
                var x = Math.floor(Math.random() * (c.height-boxsize));
                var y = Math.floor(Math.random() * (c.width-boxsize));
                ctx.rect(x, y, boxsize, boxsize);
            }

        break;
        case 3:
            if (People == null) {
                People = [];
                
                People[0] = new RandomPerson(c.width, c.height, boxsize);
                for (i = 0; i < MAXITERATOR; i++){
                    var overlapping = false; 
                    
                    var newPerson = new RandomPerson(c.width, c.height, boxsize);
                    
                    for (q = 0; q < People.length; q++){
                        if (newPerson.x>People[q].x && newPerson.x<People[q].x+boxsize && 
                            newPerson.y>People[q].y && newPerson.y<People[q].y+boxsize) {
                            overlapping = true;

                        } else if (newPerson.x>People[q].x && newPerson.x<People[q].x+boxsize+1
                            && newPerson.y>People[q].y-boxsize-1 && newPerson.y<People[q].y) {
                            overlapping = true;

                        } else if (newPerson.x>People[q].x-boxsize-1 && newPerson.x<People[q].x
                            && newPerson.y>People[q].y-boxsize-1 && newPerson.y<People[q].y) {
                            overlapping = true;

                        } else if (newPerson.x>People[q].x-boxsize-1 && newPerson.x<People[q].x
                            && newPerson.y>People[q].y && newPerson.y<People[q].y+boxsize+1) {
                            overlapping = true;

                        } else if (newPerson.x == People[q].x || newPerson.y == People[q].y) {
                            overlapping = true;  
                        }
                    }

                    if (overlapping == false ) {
                        People.push(newPerson);
                    } 
                }

                for (i=0; i<3; i++) {
                    var index = Math.floor(Math.random()*(People.length));
                    if ((index => 0) && (index < People.length) && (People[index].infected == false)) {
                        People[index].infect();
                    } 
                }
                
            } else {
                //Først finder vi én person der er inficeret
                for (i=0; i<People.length; i++) {
                    if ((i => 0) && (i < People.length) && (People[i].infected == true)) {
                        var infectedPerson = People[i];
                     
                }
            }
                //Check om der er andre personer inden for infections radius 
                //newPerson.infect();

            }
            for (i=0; i<People.length; i++) {
                People[i].drawOn2DContext(ctx);
            }


        break;

        case 4:
         

        break;

        case 5:
            
        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID2");
    c.innerHTML = ("Programmed by Tobias");
    }