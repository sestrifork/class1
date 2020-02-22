function getPageFromURL() {
    var url_string = window.location.href ;
    var url = new URL(url_string);
    var page = url.searchParams.get("page");
    if (page == null) {
        return 1 ;
    } else {
        return parseInt(page,10);
    }
}

function showPage() {
    var page = getPageFromURL();
    var newtext = "Trifork Programmer talents page " + page ;
    var c = document.getElementById("firstheader") ;
    c.innerHTML = newtext ;
    // Oneliner to do the same
    //document.getElementById("firstheader").innerHTML = "Trifork Programmer Talents page " + getPageFromURL();
}

function setReference() {
    var page = getPageFromURL();
    var a = document.getElementById('previousID');
    if (page > 1) a.href = "?page=" + (page-1);
    var a = document.getElementById('nextID');
    a.href = "?page=" + (page+1);
}

function showDemo() {
    var page = getPageFromURL();
    var boxsize = 20 ;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    switch (page) {
        case 1: // From first class
            for (i = 0; i < 10; i++) {
                var x = Math.floor(Math.random() * (c.height-boxsize));
                var y = Math.floor(Math.random() * (c.width-boxsize));
                ctx.rect(x, y, boxsize, boxsize);
            }
        break;
        case 2:
            showJoakimDemo(page);
        break;
        default:
            ctx.rect(10, 10, boxsize, boxsize);
    }
    ctx.rect(10, 10, boxsize, boxsize);
    ctx.stroke();
 }
