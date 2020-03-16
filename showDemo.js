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
    var newtext = "Trifork Young Talents class 1 - page " + page ;
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