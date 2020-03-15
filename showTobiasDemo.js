
function showTobiasDemo() {
    var page = getPageFromURL();
    var boxsize = 60;
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
            var xArray = new Array();
            var yArray = new Array();
            var x = Math.floor(Math.random() * (c.height-boxsize));
            var y = Math.floor(Math.random() * (c.width-boxsize));

            xArray[0] = x;
            yArray[0] = y;

            ctx.strokeStyle = "#000000";
            ctx.rect(x, y, boxsize, boxsize);
            var rektangler = 1000;
            for (i = 0; i < rektangler; i++){
                var overlapping = false; 

                var x = Math.floor(Math.random() * (c.height-boxsize));
                var y = Math.floor(Math.random() * (c.width-boxsize));
                
                for (q = 0; q < xArray.length; q++){
                    if (x>xArray[q] && x<xArray[q]+boxsize && 
                        y>yArray[q] && y<yArray[q]+boxsize) {
                        overlapping = true;

                    } else if (x>xArray[q] && x<xArray[q]+boxsize
                        && y>yArray[q]-boxsize && y<yArray[q]) {
                        overlapping = true;

                    } else if (x>xArray[q]-boxsize && x<xArray[q]
                        && y>yArray[q]-boxsize && y<yArray[q]) {
                        overlapping = true;

                    } else if (x>xArray[q]-boxsize && x<xArray[q]
                        && y>yArray[q] && y<yArray[q]+boxsize) {
                        overlapping = true;

                    }  
                }
                if (overlapping == false ) {
                    ctx.rect(x, y, boxsize, boxsize);
                    xArray[xArray.length] = x;
                    yArray[yArray.length] = y;
                } 
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
