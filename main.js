canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

//Code for rectangle
ctx.beginPath();
ctx.rect( 150,143,350,150);
ctx.lineWidth = 4;
ctx.strokeStyle = "grey";
ctx.stroke();

//Code for Circles
ctx.beginPath();
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.arc(350,210,40,0,2 * Math.PI);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.arc(300,250,40,0,2 * Math.PI );
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.arc( 400,250,40,0,2 * Math.PI);
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.stroke();