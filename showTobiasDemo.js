function testOverlap(first_rect_x, first_rect_y, secondx,secondx,boxsize){
if (x>x0 && x<x0+boxsize
    && y>y0 && y<y0+boxsize) {
        ctx.strokeStyle = "#FF0000";

    } else if (x>x0 && x<x0+boxsize
        && y> y0-boxsize && y<y0) {
        ctx.strokeStyle = "#FF0000";

    } else if (x>x0-boxsize && x<x0
        && y> y0-boxsize && y<y0) {
        ctx.strokeStyle = "#FF0000";

    } else if (x>x0-boxsize && x<x0
        && y>y0 && y<y0+boxsize) {
        ctx.strokeStyle = "#FF0000";
    } 
         else { 
        ctx.strokeStyle = "#000000";
    }
}
function showTobiasDemo() {
    var page = getPageFromURL();
    var boxsize = 75 ;
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

            var x0 = Math.floor(Math.random() * (c.height-boxsize));
            var y0 = Math.floor(Math.random() * (c.width-boxsize));
            ctx.rect(x0, y0, boxsize, boxsize)

            var x1 = Math.floor(Math.random() * (c.height-boxsize));
            var y1 = Math.floor(Math.random() * (c.width-boxsize));

            var rektangler = 100;

            function testOverlap(x0,y0,x1,x1,boxsize);
            
            if (x>x0 && x<x0+boxsize
            && y>y0 && y<y0+boxsize) {
                ctx.strokeStyle = "#FF0000";

            } else if (x>x0 && x<x0+boxsize
                && y> y0-boxsize && y<y0) {
                ctx.strokeStyle = "#FF0000";

            } else if (x>x0-boxsize && x<x0
                && y> y0-boxsize && y<y0) {
                ctx.strokeStyle = "#FF0000";

            } else if (x>x0-boxsize && x<x0
                && y>y0 && y<y0+boxsize) {
                ctx.strokeStyle = "#FF0000";
            } 



                 else { 
                ctx.strokeStyle = "#000000";
            }
            ctx.rect(x, y, boxsize, boxsize);
        
        
        break;
        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.stroke();
    var c = document.getElementById("programmedbyID2");
    c.innerHTML = "Programmed by Tobias"
 }
