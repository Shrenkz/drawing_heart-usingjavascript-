const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

function drawHeartOutline(progress) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 5);
  ctx.bezierCurveTo(
    canvas.width / 5, 0,
    0, canvas.height / 15,
    canvas.width / 2, canvas.height / 1.5
  );
  ctx.bezierCurveTo(
    canvas.width * 4 / 5, canvas.height / 15,
    canvas.width, 0,
    canvas.width / 2, canvas.height / 5
  );
  ctx.strokeStyle = '#ff6961';
  ctx.lineWidth = 8;
  ctx.stroke();

  const clearHeight = canvas.height * (1 - progress);
  ctx.clearRect(0, 0, canvas.width, clearHeight);

  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  
  const name = "Hillary";
  for (let i = 0; i < name.length; i++) {
    if (progress * name.length >= i + 1) {
      ctx.fillText(name.charAt(i), canvas.width / 2 - name.length * 5 + i * 10, canvas.height / 3);
    }
  }
}

document.getElementById('animateButton').addEventListener('click', () => {
  let animationProgress = 0;
  const animationInterval = setInterval(() => {
    animationProgress += 0.05; 
    if (animationProgress > 1) {
      clearInterval(animationInterval);
    }
    drawHeartOutline(animationProgress);
  }, 40);
});

function resetHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('resetButton').addEventListener('click', () => {
  resetHeart();
});
