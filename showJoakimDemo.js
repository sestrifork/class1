function showJoakimDemo() {
    var page = getPageFromURL();
    var boxsize = 100 ;
    var c = document.getElementById("joakimCanvas");
    var ctx = c.getContext("2d");

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
                if ((y[i]>y0) && (y[i]<200) && (x[i]>x0) && (x[i]<200)) {
                } else { 
                    i--;
                }
            }

            function tegnAlleRektangler(ctx, boxsize) {
                for (i=0; i<x.length; i++) {
                    console.log(i);
                    ctx.rect(x[i], y[i], boxsize, boxsize);
                } 
            }
                        
            tegnAlleRektangler(ctx, boxsize);
        break ;

        case 3:
            
            var x0 = Math.floor(Math.random() * (c.height-boxsize));
            var y0 = Math.floor(Math.random() * (c.width-boxsize));
            ctx.rect(x0, y0, boxsize, boxsize);
            var x = Math.floor(Math.random() * (c.height-boxsize));
            var y = Math.floor(Math.random() * (c.width-boxsize));
            if (y>y0 && y<y0+boxsize 
                && x>x0 && x<x0+boxsize) {
                ctx.strokeStyle="#FF0000";
            } else if (y>y0 && y<y0+boxsize 
                && x>x0-boxsize && x<x0) {
                ctx.strokeStyle="#FF0000";
            } else if (y>y0-boxsize && y<y0 
                && x>x0 && x<x0+boxsize) {
                ctx.strokeStyle="#FF0000";
            } else if (y>y0-boxsize && y<y0 
                && x>x0-boxsize && x<x0) {
                ctx.strokeStyle="#FF0000";
            } else { 
                ctx.strokeStyle="#000000";
            
            } 
            ctx.rect(x, y, boxsize, boxsize);
            break;
             
        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID1");
    c.innerHTML = "Programmed by Joakim";
 }