const SIZE_BLOCK = 30;

// механіка

const game = {
  area: [
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "x", "o"],
    ["o", "o", "o", "x", "x", "o", "o", "o", "x", "o"],
    ["o", "o", "o", "x", "x", "o", "o", "x", "x", "o"],
  ],
  activeTetromino: {
    x: 3,
    y: 0,
    block: [
      ["o", "x", "o"],
      ["o", "x", "o"],
      ["x", "x", "o"],
    ],
  },

  moveLeft() {
    this.activeTetromino.x -= 1;
  },

  moveRight() {
    this.activeTetromino.x += 1;
  },

  moveDown() {
    this.activeTetromino.y += 1;
  },

  rotateTetromino() {},
  get viewArea() {
    const area = JSON.parse(JSON.stringify(this.area));
    const { x, y, block } = this.activeTetromino;

    for (let i = 0; i < block.length; i++) {
      const row = block[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === "x") {
          area[y + i][x + j] = block[i][j];
        }
      }
    }
    return area;
  },
};

//малювання
const container = document.querySelector(".container");

const canvas = document.createElement("canvas");
canvas.classList.add("game-area");
container.append(canvas);

canvas.width = SIZE_BLOCK * 10; //10 - це кількість колонок
canvas.height = SIZE_BLOCK * 20; //20 - це кількість строк

const context = canvas.getContext("2d");

const showArea = (area) => {
  for (let y = 0; y < area.length; y++) {
    const line = area[y];

    for (let x = 0; x < line.length; x++) {
      const block = line[x];

      if (block === "x") {
        context.fillStyle = "tomato";
        context.strokeStyle = "white";
        context.fillRect(
          x * SIZE_BLOCK,
          y * SIZE_BLOCK,
          SIZE_BLOCK,
          SIZE_BLOCK
        );
        context.strokeRect(
          x * SIZE_BLOCK,
          y * SIZE_BLOCK,
          SIZE_BLOCK,
          SIZE_BLOCK
        );
      }
    }
  }
};
showArea(game.viewArea);
