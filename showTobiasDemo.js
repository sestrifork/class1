var People;

function showTobiasDemo() {
    const MAXITERATOR = 10000;
    var page = getPageFromURL();
    var boxsize = 20;
    var c = document.getElementById("tobiasCanvas");
    var ctx = c.getContext("2d");

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

                // Sætte 3 random smittede
                
            } else {
                // Infecte people
            }
            // Tegn det hele
            // Visualize the Population on the canvas
            //function draw(value, index, array) {
            //    value.drawOn2DContext(ctx);
            //}
            //People.forEach(draw);

            for (i=0; i<People.length; i++) {
                People[i].drawOn2DContext(ctx);
            }


        break;

        case 4:

        case 5:
            
        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID2");
    c.innerHTML = "Programmed by Tobias"
 }
