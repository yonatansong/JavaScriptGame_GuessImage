
window.onload = init;
function init() {
    let image = document.getElementsByTagName("img");
    for (let i = 0; i < image.length; i++) {
        image[i].onclick = showAnswer
        image[i].onmouseover = showAnswer;
        image[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target
    let name = image.id
    name = "image/" + name + ".jpg"
    image.src = name
    setTimeout(function () {
        let name = image.id
        name = "image/" + name + "blur.jpg"
        image.src = name
    },
        1000)
}

function reblur(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = "image/" + name + "blur.jpg";
    image.src = name;
}
