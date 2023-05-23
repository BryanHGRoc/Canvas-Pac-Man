const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

ctx.beginPath();
    ctx.arc(350,300,50,0, Math.PI * 2, true);
    ctx.moveTo(110,75);
    ctx.fillStyle()
    ctx.stroke();