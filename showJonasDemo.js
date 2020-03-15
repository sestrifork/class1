
function showJonasDemo() {
    var page = getPageFromURL();
    var boxsize = 20;
    var c = document.getElementById("jonasCanvas");
    var ctx = c.getContext("2d");

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
            //hvis en firkants koordinater gør så den bliver tegnet på en allerede eksisterende firkant, så bliver den ikke tegnet
            var overlap = false;
            var xArray = new Array();
            var yArray = new Array();
            var AntalRektangler = 10000;
            var mellemrum = 3;
            for (i = 0; i < AntalRektangler; i++) {
                overlap = false;
                var x = Math.floor(Math.random() * (c.height-boxsize));
                var y = Math.floor(Math.random() * (c.height-boxsize));
                if (i != 0){
                    for (q = 0; ((q < xArray.length) && (overlap == false)); q++){
                        if ((Math.abs(x-xArray[q]) < boxsize + mellemrum) && (Math.abs(y-yArray[q]) < boxsize + mellemrum)){
                            overlap = true;
                        }
                    }
                }
                if (overlap == false)
                {
                    xArray.push(x);
                    yArray.push(y);
                    ctx.rect(x, y, boxsize, boxsize);
                }
            } 
        break;

        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID3");
    c.innerHTML = "Programmed by Jonas"
 }
