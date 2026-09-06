const canvas = document.getElementById("clockCanvas");
const context = canvas.getContext("2d");

const WIDTH = canvas.offsetWidth;
const HEIGHT = canvas.offsetHeight;

/* SETTINGS */
const primColor = "green";
const secColor = "white";
const strokeSize = 3;
/**/

function drawCircle() {
	context.beginPath();
	context.arc(WIDTH/2, HEIGHT/2, WIDTH/2, 0, 2 * Math.PI);
	context.strokeStyle = primColor;
	context.lineWidth = strokeSize;
	context.stroke();
}


function drawHourHand(hour, minute) {
	context.beginPath();
	context.moveTo(WIDTH/2, HEIGHT/2);

	const alpha = ((hour%12) + minute / 60) * 30 * Math.PI / 180;

	context.lineTo(WIDTH/2 + (HEIGHT/3) * Math.sin(alpha), HEIGHT/2 - (HEIGHT/3) * Math.cos(alpha));

	context.strokeStyle = primColor;
	context.stroke();
}

function drawMinuteHand(minute) {
	context.beginPath();
	context.moveTo(WIDTH/2, HEIGHT/2);

	const beta = ((minute%60) + 1 / 60) * 6 * Math.PI / 180;

	context.lineTo(WIDTH/2 + (HEIGHT/2.1) * Math.sin(beta), HEIGHT/2 - (HEIGHT/2.1) * Math.cos(beta));

	context.strokeStyle = primColor;
	context.stroke();
}

function drawSecondHand(second) {
	context.beginPath();
	context.moveTo(WIDTH/2, HEIGHT/2);

	const gamma = ((second%3600) + 1 / 60) * 6 * Math.PI / 180;

	context.lineTo(WIDTH/2 + (HEIGHT/2.1) * Math.sin(gamma), HEIGHT/2 - (HEIGHT/2.1) * Math.cos(gamma));

	context.strokeStyle = secColor;
	context.stroke();
}


function redraw() {
	const now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();

	context.clearRect(0, 0, WIDTH, HEIGHT);

	drawCircle();
	drawHourHand(h, m);
	drawMinuteHand(m);
	drawSecondHand(s);
	requestAnimationFrame(redraw);
}

redraw();
