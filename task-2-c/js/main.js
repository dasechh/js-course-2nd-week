document.getElementById("submit").addEventListener("click", () => {
  let height = parseInt(document.getElementById("number").value);
  let canvas = document.getElementById("pyramidCanvas");
  let ctx = canvas.getContext("2d");
  let squareSize = 15;
  let gap = 10;
  drawPyramid(ctx, height, squareSize, gap, canvas.width);
});

const drawPyramid = (ctx, height, squareSize, gap, canvasWidth) => {
  for (let i = 0; i < height; i++) {
    let blocks = 2 * (i + 1);
    let offset = (canvasWidth - (blocks * squareSize + (blocks - 1) * gap)) / 2;

    for (let j = 0; j < blocks / 2; j++) {
      let x = offset + j * (squareSize + gap) - gap;
      let y = i * (squareSize + gap);
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, squareSize, squareSize);
    }

    for (let j = 0; j < blocks / 2; j++) {
      let x = offset + (blocks / 2 + j) * (squareSize + gap);
      let y = i * (squareSize + gap);
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, squareSize, squareSize);
    }
  }
}