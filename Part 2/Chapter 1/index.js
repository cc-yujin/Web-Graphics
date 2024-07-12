const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

const canvasWidth = 300;
const canvasHeight = 300;

canvas.style.width = canvasWidth + "px";
canvas.style.height = canvasWidth + "px";

canvas.width = canvasWidth * dpr;
canvas.height = canvasWidth * dpr;
ctx.scale(dpr, dpr);

ctx.fillRect(10, 10, 50, 50);
