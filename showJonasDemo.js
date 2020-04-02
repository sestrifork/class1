var People;

function showJonasDemo() {
    const TRIES = 100;
    var page = getPageFromURL();
    var boxsize = 20;
    var counter = 0;
    var c = document.getElementById("jonasCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.beginPath();
    switch (page) {
        case 1:
            for (i = 0; i < 10; i++) {
                var x = Math.floor(Math.random() * (c.height-boxsize));
                var y = Math.floor(Math.random() * (c.width-boxsize));
                ctx.rect(x, y, boxsize, boxsize);           
            }
        
        break;
        case 2:
            var xArray = new Array();
            var yArray = new Array();
            for (i = 0; i < 10; i++) {
              xArray.push(Math.floor(Math.random() * (c.height-boxsize)));
              yArray.push(Math.floor(Math.random() * (c.height-boxsize)));
            }
            
            for (i = 0; i < xArray.length; i++) {
                if (xArray[i] < 200){
                    ctx.rect(xArray[i], yArray[i], boxsize, boxsize);
                }
            }

        break;
        case 3:
              
            //hvis en firkant bliver tegnet på en allerede eksisterende firkant i samme array (i samme tryk på knappen), så bliver den rød
            var xArray = new Array();
            var yArray = new Array();
            var AntalRektangler = 100;
            for (i = 0; i < AntalRektangler; i++) {
                xArray.push(Math.floor(Math.random() * (c.height-boxsize)));
                yArray.push(Math.floor(Math.random() * (c.height-boxsize)));
                if (i != 0) {
                    for (q = 0; q < xArray.length-1;q++){
                        if ((Math.abs(xArray[i]-xArray[q]) < boxsize) && (Math.abs(yArray[i]-yArray[q]) < boxsize)){
                            ctx.strokeStyle = "#FF0000";
                        }
                    }
                }
                ctx.strokeRect(xArray[i],yArray[i], boxsize, boxsize);
                ctx.strokeStyle = "#000000";
            }

        break;
        case 4:
            debugger
            if (People == null) {
                People = [];

                //hvis en firkants koordinater gør så den bliver tegnet på en allerede eksisterende firkant, så bliver den ikke tegnet
                var overlap = false;

                for (i = 0; i < TRIES; i++) {
                    overlap = false;
                    newPerson = new RandomPerson(c.width, c.height, boxsize)

                        for (q = 0; ((q < People.length) && (overlap == false)); q++) {
                            //check om personens koordinater overlapper med en anden persons koordinater
                            if (newPerson.isOverlapping(People[q])) {
                                overlap = true;
                            }
                        }

                    if (overlap == false) {
                        //tilføj personen til listen
                        People.push(newPerson)
                        counter++;
                    }   
                }
                //lav tre tilfældigt inficerede mennesker
                for (i = 0; i > 3; i++) {
                    var randomNumber = Math.floor(Math.random() * People.length);
                    //tjek om personen der vælges er inficeret i forvejen.
                    if(People[randomNumber].infected != 0) {
                        People[randomNumber].infect();
                        i++;
                    }
                }
            }else {
                
                //infecier mennesker i nærheden af de inficerede mennesker (loop array igennem 2 gange; er ham tæt på mig infected, så skal jeg blive infected, tag hensyn til at man ikke kan inficere andre samme dag, som man selv er blevet inficeret)
                for (i = 0; i > People.length; i++) {
                    for (q = 0; q > People.length; q++) {
                        

                    }

                }
            }
            
            //tegn alle personerne i arrayet
            for (i = 0; i < People.length; i++){
                People[i].drawOn2DContext(ctx);
            }

        break;
        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID3");
    c.innerHTML = "Programmed by Jonas. Der er " + counter + " firkanter.";
 }
