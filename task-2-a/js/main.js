const main = () => {
  let number = parseFloat(document.getElementById("number").value);
  let summary = document.getElementById("summary");
  return (summary.innerHTML = `Квадратный корень из ${number} равен ${SquareOfNumber(
    number
  )}.`);
};

const SquareOfNumber = (number) => {
  if (number < 0) {
    return NaN;
  }
  if (number === 0) {
    return 0;
  }
  let epsilon = 1e-10;
  let x = number;
  let xNext;
  while (true) {
    xNext = 0.5 * (x + number / x);
    if (Math.abs(xNext - x) < epsilon) {
      break;
    }
    x = xNext;
  }
  return xNext;
};

document.getElementById("submit").addEventListener("click", main);
