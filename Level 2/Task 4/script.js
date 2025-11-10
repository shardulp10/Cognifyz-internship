document.getElementById("colorChangeButton").onclick = function() {
    const colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lightpink, lightgray"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};
