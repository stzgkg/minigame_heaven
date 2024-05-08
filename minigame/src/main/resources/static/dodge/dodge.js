const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // 캔버스에 그래픽 작업을 할 수 있게 해주는 여러 속성과 메소드가 들어있는 객체를 불러옴

var posX = 100;
var posY = 100;
var speed = 10;
function drawBorderRect(x, y, width, height, borderWidth) {
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'blue';

  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(
    x + borderWidth / 2,
    y + borderWidth / 2,
    width - borderWidth,
    height - borderWidth
  );
}

function draw_charactor(x, y) {
  ctx.clearRect(posX, posY, 20, 20);
  drawBorderRect(x, y, 20, 20, 3);
  posX = x;
  posY = y;
}

function handleKeyDown(event) {
  curX = posX;
  curY = posY;

  switch (event.keyCode) {
    case 65: // Left arrow
      curX -= speed;
      break;
    case 68: // Right arrow
      curX += speed;
      break;
    case 87: // Up arrow
      curY -= speed;
      break;
    case 83: // Down arrow
      curY += speed;
      break;
  }

  draw_charactor(curX, curY);
}

document.addEventListener('keydown', handleKeyDown);

draw_charactor(0, 0);
