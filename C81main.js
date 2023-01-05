canvas = document.getElementById("myCanvas");
color = "red";

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.trokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

button = document.getElementById("button");
button.addEventListener('click', myFunction);
function myFunction
