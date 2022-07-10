var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
var cactus = new Cactus();
cactus.draw();

var timer = 0;
var jumpTimer = 0;
var cactusArr = [];
var animation;

function playFrame() {
  animation = requestAnimationFrame(playFrame);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (timer % 200 === 0) {
    var cactus = new Cactus();
    cactusArr.push(cactus);
  }
  cactusArr.forEach((a, i, o) => {
    // x좌표가 0미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }

    confilctBox(dino, a);
    if (jumping == true) {
      dino.y -= 2;
      jumpTimer++;
    }
    if (jumping == false && dino.y < 200) {
      dino.y += 2;
    }
    if (jumpTimer > 80) {
      jumping = false;
      jumpTimer = 0;
    }
    a.x--;
    a.draw();
  });
  dino.draw();
}
playFrame();

// 충돌확인
function confilctBox(dino, cactus) {
  var calX = cactus.x - (dino.x + dino.width); // 0보다 작으면 충돌
  var calY = cactus.y - (dino.y + dino.height);
  if (calX < 0 && calY < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var jumping = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jumping = true;
  }
});
