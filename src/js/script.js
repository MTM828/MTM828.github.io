function applyTheme() {

    var url = window.location.protocol + "//" + window.location.host + "/src/css/themes/";
    if (document.head.querySelector("link[href*='dodgerblue.css']")) {url += "dodgerblue.css";}
    if (document.head.querySelector("link[href*='limegreen.css']" )) {url += "limegreen.css"; }
    if (document.head.querySelector("link[href*='crimson.css']"   )) {url += "crimson.css";   }
    const headers = {}

    fetch(url, headers).then(response => response.text()).then(data => {
        var i;
        for (i = 0; i < document.querySelectorAll("iframe").length; i++) {
            document.querySelectorAll("iframe")[i].contentWindow.document.head.innerHTML += "<style>" + data + "</style>";
        }
    });

}

function showIframes() {
    const elms = document.querySelectorAll("iframe");
    var i;
    for (i = 0; i < elms.length; i++) {
        while (!elms[i].contentWindow.document.readyState == "complete") {}
        elms[i].style.visibility = "visible"
    }
}

window.onload = function() {

    applyTheme();
    setTimeout(showIframes(), 0);

}
