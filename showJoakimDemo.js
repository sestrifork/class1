function showJoakimDemo() {
    var page = getPageFromURL();
    var boxsize = 20 ;
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
                if ((y[i]>100) && (y[i]<200) && (x[i]>100) && (x[i]<200)) {
                } else { 
                    i--;
                }
            }
            
            for (i=0; i<numberOfRectangles;i++) {
                ctx.rect(x[i],y[i], boxsize, boxsize);
            }
        break;

        case 3:
            // Draw point in a stacked chart
            var datapoints = [
                {x:1, y:5},
                {x:2, y:10},
                {x:3, y:100},
                {x:4, y:50}
            ];
            for (var i=0; i<datapoints.length; i++) {
                console.log("x: ", datapoints[i].x, " y: ",datapoints[i].y);
                ctx.rect(datapoints[i].x*boxsize, 0, boxsize, datapoints[i].y);
            }
            // Opgave:
            // Lav data strukturen datapoints om, så der er flere y værdier (noninfected, infected, immune, dead)
            // Tegn så diagrammet, så de bliver stablet oven på hinanden
            
            break;

        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID1");
    c.innerHTML = "Programmed by Joakim";
 }