const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//circulo amarelo (pac-man)
ctx.strokeStyle ='yellow';
ctx.beginPath();
    ctx.arc(350,300,250,0, Math.PI * 2, true);
    ctx.moveTo(810,275);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();

//triangulo (boca do pac-man)
ctx.strokeStyle ='#020612';
ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(200,150);
    ctx.lineTo(200,50);
    ctx.fillStyle = '#020612';
    ctx.fill();