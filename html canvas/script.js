const cans = document.querySelector('#drw');
const contx = cans.getContext('2d');
cans.width = window.innerWidth;
cans.height = window.innerHeight;

contx.strokeStyle = '#BADASS';
contx.lineJoin = 'round';
contx.lineCap = 'round';
contx.lineWidth = 100;
contx.globalCompositeOperation = '_multiply_';

let isDraw = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
	if (!isDraw) return; //stop the fn from running when they are not moused down

	contx.strokeStyle = `hsl(${hue}, 100%, 50%`;
	//contx.lineWidth = hue;
contx.beginPath();
//start from
contx.moveTo(lastX, lastY);
//go to
contx.lineTo(e.offsetX, e.offSetY);
contx.stroke();

[lastX, lastY] = [e.offsetX, e.offSetY];

hue++;

if(hue > 360){
	hue = 0;
}

if(contx.lineWidth >= 100 || contx.lineWidth <= 1){
	direction = !direction;
}
if(direction){
 contx.lineWidth++;	
} 
else{
	contx.lineWidth--;
}

//lastX = e.offsetX;
//lastY = e.offSetY;


console.log(e);
} 

cans.addEventListener('mousedown', (e) => {
	isDraw = true;
	[lastX, lastY] = [e.offsetX, e.offSetY];
});
cans.addEventListener('mousemove', draw);
cans.addEventListener('mouseup', () => isDraw = false);
cans.addEventListener('mouseout', () => isDraw = false);