const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//circulo amarelo (pac-man)
ctx.beginPath();
    ctx.arc(200, 200, 150, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(210, 200);
    ctx.fillStyle = "yellow";
    ctx.fill();

//Bolinhas
ctx.beginPath();
    ctx.arc(500, 200, 55, 0, Math.PI * 2, true);
    ctx.moveTo(1000,1000);
    ctx.fillStyle = "yellow";
    ctx.fill();

ctx.beginPath();
    ctx.arc(800, 200, 55, 0, Math.PI * 2, true);
    ctx.moveTo(1000,1000);
    ctx.fillStyle = "yellow";
    ctx.fill();

ctx.beginPath();
    ctx.arc(1100, 200, 55, 0, Math.PI * 2, true);
    ctx.moveTo(1000,1000);
    ctx.fillStyle = "yellow";
    ctx.fill();

ctx.beginPath();
    ctx.arc(1400, 200, 55, 0, Math.PI * 2, true);
    ctx.moveTo(1000,1000);
    ctx.fillStyle = "yellow";
    ctx.fill();

ctx.beginPath();
    ctx.arc(1700, 200, 55, 0, Math.PI * 2, true);
    ctx.moveTo(1000,1000);
    ctx.fillStyle = "yellow";
    ctx.fill();