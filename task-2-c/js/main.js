document.getElementById("submit").addEventListener("click", () => {
  let height = parseInt(document.getElementById("number").value);
  let canvas = document.getElementById("pyramidCanvas");
  let ctx = canvas.getContext("2d");
  let squareSize = 15;
  let gap = 5;
  drawPyramid(ctx, height, squareSize, gap, canvas.width);
});

// Функция для расчета координат и отрисовки квадратов
function drawPyramid(ctx, height, squareSize, gap, canvasWidth) {
  for (let i = 0; i < height; i++) {
    let blocks = i + 1; // Количество блоков в текущем уровне
    let offset = calculateOffset(blocks, squareSize, gap, canvasWidth); // Вычисление смещения для центрирования ряда
    drawRow(ctx, blocks, squareSize, gap, offset, i); // Рисуем квадраты в строке
  }
}

// Функция для расчета смещения для центрирования ряда
function calculateOffset(blocks, squareSize, gap, canvasWidth) {
  let totalRowWidth = blocks * squareSize + (blocks - 1) * gap;
  return (canvasWidth - totalRowWidth) / 2;
}

// Функция для рисования одного ряда квадратов
function drawRow(ctx, blocks, squareSize, gap, offset, rowIndex) {
  for (let j = 0; j < blocks; j++) {
    let x = offset + j * (squareSize + gap);
    let y = rowIndex * (squareSize + gap);
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, squareSize, squareSize);
  }
}