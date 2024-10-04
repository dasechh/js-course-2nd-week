const main = () => {
  let number = parseFloat(document.getElementById("number").value);
  let summary = document.getElementById("summary");
  return (summary.innerHTML = `Квадратный корень из ${number} равен ${calculate(
    number
  )}.`);
};

const calculate = (number) => {
  if (number < 0) {
    return "неопределенности.";
  }
  let epsilon = 1e-10;
  let x = number !== 0 ? number : 1;
  let i = 0;
  let xNext;

  while (true) {
    i++;
    xNext = 0.5 * (x + number / x);
    if (Math.abs(xNext - x) < epsilon) {
      break;
    }
    x = xNext;
  }
  return xNext;
};

document.getElementById("submit").addEventListener("click", main);
