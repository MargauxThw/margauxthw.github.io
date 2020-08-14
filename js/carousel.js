function next() {
    var curr = parseInt(document.getElementById("page").className.split(" ")[1].split("-")[1]);
    curr++;
    if (curr == 11) {
        curr = 1;
    }

    document.getElementById("page").className = "carousel-item item-" + curr.toString();
};

function prev() {
    var curr = parseInt(document.getElementById("page").className.split(" ")[1].split("-")[1]);
    curr--;
    if (curr == 0) {
        curr = 10;
    }

    document.getElementById("page").className = "carousel-item item-" + curr.toString();
};