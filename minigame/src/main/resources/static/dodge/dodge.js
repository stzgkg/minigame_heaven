const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // 캔버스에 그래픽 작업을 할 수 있게 해주는 여러 속성과 메소드가 들어있는 객체를 불러옴

let posX = 100;
let posY = 100;
let prevPosX = 100;
let prevPosY = 100;
const speed = 5;
const keys = {};

function drawBorderRect(x, y, width, height, borderWidth) {
  // 캐릭터를 그리는 함수
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

function drawCharactor(x, y) {
  // 캐릭터 위치 업데이트
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(prevPosX, prevPosY, 20, 20);
  drawBorderRect(x, y, 20, 20, 3);
}

function updatePosition() {
  // wasd키를 입력받아 캐릭터 위치값 변경
  prevPosX = posX;
  prevPosY = posY;

  if (keys[65]) posX -= speed;
  if (keys[68]) posX += speed;
  if (keys[87]) posY -= speed;
  if (keys[83]) posY += speed;

  posX = Math.max(0, Math.min(canvas.width - 20, posX));
  posY = Math.max(0, Math.min(canvas.height - 20, posY));

  drawCharactor(posX, posY);
  requestAnimationFrame(updatePosition);
}

function handleKeyDown(event) {
  keys[event.keyCode] = true;
}

function handleKeyUp(event) {
  keys[event.keyCode] = false;
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

requestAnimationFrame(updatePosition);
