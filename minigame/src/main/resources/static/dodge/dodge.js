const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // 캔버스에 그래픽 작업을 할 수 있게 해주는 여러 속성과 메소드가 들어있는 객체를 불러옴

let posX = 100;
let posY = 100;
let prevPosX = 100;
let prevPosY = 100;
const speed = 5;
const keys = {};

class Enemy {
  constructor() {
    this.spawn();
  }

  spawn() {
    // 화면 밖 무작위 지점에 적 생성
    const side = Math.floor(Math.random() * 4);
    switch (side) {
      case 0: // 왼쪽
        this.posX = -20;
        this.posY = Math.random() * canvas.height;
        break;
      case 1: // 오른쪽
        this.posX = canvas.width + 20;
        this.posY = Math.random() * canvas.height;
        break;
      case 2: // 위쪽
        this.posX = Math.random() * canvas.width;
        this.posY = -20;
        break;
      case 3: // 아래쪽
        this.posX = Math.random() * canvas.width;
        this.posY = canvas.height + 20;
        break;
    }
    this.speed = 2;

    this.dx = posX - this.posX;
    this.dy = posY - this.posY;
    this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

    this.dx = (this.dx / this.distance) * this.speed;
    this.dy = (this.dy / this.distance) * this.speed;
  }

  update() {
    this.posX += this.dx;
    this.posY += this.dy;

    // 적이 화면을 벗어나는지 체크하고 무작위 위치로 이동
    if (
      this.posX < -20 ||
      this.posX > canvas.width + 20 ||
      this.posY < -20 ||
      this.posY > canvas.height + 20
    ) {
      this.spawn();
    }

    this.draw();
  }

  draw() {
    ctx.fillStyle = 'red';
    drawBorderRect(this.posX, this.posY, 12, 12, 1);
  }

  setDir() {}
}

const enemies = [];
const enemyCount = 10; // 적의 수

for (let i = 0; i < enemyCount; i++) {
  enemies.push(new Enemy());
}

function drawBorderRect(x, y, width, height, borderWidth) {
  // 캐릭터를 그리는 함수
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = 'black';

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
  ctx.clearRect(prevPosX, prevPosY, 20, 20);
  ctx.fillStyle = 'blue';
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

  ctx.clearRect(0, 0, canvas.width, canvas.height); // 전체 캔버스를 지우고 다시 그립니다.
  drawCharactor(posX, posY);

  for (let enemy of enemies) {
    enemy.update();
  }
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
