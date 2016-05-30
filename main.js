var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;					

canvas.width = window.innerWidth;				//exact lenght of the window
canvas.height = window.innerHeight;

context.lineWidth = radius*2;					// x2 the radius of the dots for smooth dragging

var putPoint = function(e){

if(dragging) {
	context.lineTo(e.clientX, e.clientY);
	context.stroke();
	context.beginPath();
	context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);   //draws the line
	context.fill();
	context.beginPath();
	context.moveTo(e.clientX, e.clientY);
	}

}

var engage = function(e){					// mouse behavior conditions
	dragging = true;
	putPoint(e);			
}


var disengage = function(){
	dragging = false;
	context.beginPath();
}


canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);		//mouse behavior
canvas.addEventListener('mouseup', disengage);

 