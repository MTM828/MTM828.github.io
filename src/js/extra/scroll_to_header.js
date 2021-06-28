var i;

function scrollToHeader(headerText) {

    var header;
    for (i = 0; i < document.querySelectorAll("h2").length; i++) {
        if (document.querySelectorAll("h2")[i].textContent == headerText) {
            header = document.querySelectorAll("h2")[i];
            break;
        }
    }
    if (header) {
        header.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        window.location.href.split('#')[0];
    } else {
        return false;
    }

}

for (i = 0; i < document.querySelectorAll("h2").length; i++) {

    document.querySelector("#content-index").innerHTML +=
        "<li><a href=\"javascript:scrollToHeader('" +
        document.querySelectorAll("h2")[i].textContent +
        "');\">" +
        document.querySelectorAll("h2")[i].textContent +
        "</a></li>"
    ;

}
