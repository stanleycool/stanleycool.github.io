let visible = true;

function makeVisible() {

    let img = document.getElementById("hello");
    visible = !visible;

    if (visible) {
        img.style.opacity = 1;
    } else {
        img.style.opacity = 0;
    }

}

function youtube() {
    let yt = document.getElementById("youtube");
    yt.style.display = "flex";
}