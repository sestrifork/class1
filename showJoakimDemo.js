class JWEchart {
    constructor (canvas, datapoints) {
        this.canvas = canvas;
        this.yValues = [...datapoints];
    }

    // Draw the chart
    render() {
        var ctx = this.canvas.getContext("2d");
        var xSeperator=2;
        var ySeperator=2;
        var colorScheme = ["#000000", "#00FF00", "#FF0000", "#DB7093"];
        ctx.beginPath();
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
        function drawBox(strokeStyle, x, y, width, height) {
            ctx.fillStyle=strokeStyle;
            ctx.fillRect(x, y, width, height);
        }

        // Find maxY
        var maxY = 0;
        this.yValues.forEach(datapoint => {
            var tempy = 0;
            datapoint.forEach(yvalue => {
                maxY = Math.max(tempy, yvalue);
            });
        });

        var yzoom = this.canvas.height/maxY;
        var boxsize = this.canvas.width/this.yValues.length;

        for (var i=0; i<this.yValues.length; i++) {
            console.log(this.yValues[i]);
            var yValuesTemp = this.yValues[i];

            var ytemp=this.canvas.height;

            for (var j=0; j<yValuesTemp.length;j++) {
                var y=yValuesTemp[j]*yzoom;
                drawBox(colorScheme[j], i*boxsize, ytemp-y, boxsize-xSeperator, y);
                ytemp=ytemp-(y+ySeperator);
            }
        }
        ctx.stroke();
    }
}

function showJoakimDemo() {
    var page = getPageFromURL();
    var boxsize = 40 ;
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
                {xHealthy:90, xInfected:10, xImmune:0, xDead:0},
                {xHealthy:60, xInfected:36, xImmune:0, xDead:4},
                {xHealthy:30, xInfected:50, xImmune:10, xDead:10},
                {xHealthy:10, xInfected:0, xImmune:75, xDead:15}
            ];

            function drawBox(strokeStyle, x, y, width, height) {
                ctx.fillStyle=strokeStyle;
                ctx.fillRect(x, y, width, height);
            }

            var maxY = 0;
            for (var i=0; i<datapoints.length; i++){
                var datapoint = datapoints[i];
                var tempy = datapoint.xDead+datapoint.xImmune+datapoint.xInfected+datapoint.xHealthy; 

                maxY = Math.max(tempy,maxY);
        
            }

            for (var i=0; i<datapoints.length; i++) {
                console.log(datapoints[i]);
                var yzoom=c.height/maxY; //ny
                var xSeperator=2;
                var ySeperator=2;
                var ytemp=c.height; 
                var y=datapoints[i].xDead*yzoom;
                drawBox("#000000", i*boxsize, ytemp-y, boxsize-xSeperator, y);
                ytemp=ytemp-(y+ySeperator);

                y=datapoints[i].xImmune*yzoom;
                drawBox("#00FF00", i*boxsize, ytemp-y, boxsize-xSeperator,y);
                ytemp=ytemp-(y+ySeperator);
                
                y=datapoints[i].xInfected*yzoom;
                drawBox("#FF0000", i*boxsize, ytemp-y, boxsize-xSeperator,y);
                ytemp=ytemp-(y+ySeperator);
                
                y=datapoints[i].xHealthy*yzoom;
                drawBox("#DB7093", i*boxsize, ytemp-y, boxsize-xSeperator,y);
            }
            // Opgave:
            // Lav data strukturen datapoints om, så der er flere y værdier (noninfected, infected, immune, dead)
            // Tegn så diagrammet, så de bliver stablet oven på hinanden

            break;

        case 4:
            /*
            var datapoints = [
                [100, 0,  0,  0],
                [75, 25,  0,  0],
                [50, 25,  25, 0],
                [25, 25, 25, 25],
                [ 0, 25, 25, 50],
                [ 0,  0, 25, 75],
                [ 0,  0,  0, 100]
            ];
            */

            var datapoints = [
            [100, 0,  0,  0],
            [75, 25,  0,  0],
            [50, 25,  25, 0],
            [100, 0,  0,  0],
            [75, 25,  0,  0],
            [25, 25, 25, 25],
            [ 0, 25, 25, 50],
            [100, 0,  0,  0],
            [75, 25,  0,  0],
            [ 0,  0, 25, 75],
            [ 0,  0,  0, 100]
        ];

            var chart = new JWEchart(c, datapoints);
            chart.render();
        break;

        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID1");
    c.innerHTML = "Programmed by Joakim";
 }