var index = 0;

function changecolors() {
    var colors = ["red", "blue", "green", "orange", "pink", "yellow", "purple", "black", "grey", "brown"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if (index > colors.length - 1) {
        index = 0;
    }
}