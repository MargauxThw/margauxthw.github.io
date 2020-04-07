function showFunction(element) {
    
    if (element === "discover") {
        var btnText = document.getElementById("discoverShowBtn");
        var moreText = document.getElementById("more-discover");
    } else if (element === "define") {
        var btnText = document.getElementById("defineShowBtn");
        var moreText = document.getElementById("more-define");
    } else if (element === "develop") {
        var btnText = document.getElementById("developShowBtn");
        var moreText = document.getElementById("more-develop");
    }
    

    if (moreText.style.display === "none") {
        btnText.innerHTML = "Hide process -";
        moreText.style.display = "block";
    } else {
        btnText.innerHTML = "Show process +";
        moreText.style.display = "none";
    }
}