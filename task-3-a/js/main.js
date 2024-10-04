const main = () => {
  let input = document.getElementById("numberArray").value;
  let numberArray = input.split(" ").map((num) => parseFloat(num.trim()));

  if (numberArray.length === 0 || numberArray.some(isNaN)) {
    document.getElementById("result").textContent =
      "Пожалуйста, введите корректный массив чисел.";
    return;
  }

  let max = Math.max(...numberArray);
  let count = numberArray.filter((num) => num === max).length;

  document.getElementById(
    "result"
  ).textContent = `Количество чисел, равных максимальному (${max}): ${count}`;
};

document.getElementById("submit").addEventListener("click", main);
