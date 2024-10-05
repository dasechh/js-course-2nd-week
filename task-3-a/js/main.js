const main = () => {
  let input = document.getElementById("numberArray").value;
  let numberArray = input.split(" ").map((num) => parseFloat(num.trim()));
  const result = findMaxAndCount(numberArray);
  return (document.getElementById("result").textContent = result);
};

const findMaxAndCount = (array) => {
  if (array.length === 0 || array.some(isNaN)) {
    return "Пожалуйста, введите корректный массив чисел.";
  }
  let max = Math.max(...array);
  let count = array.filter((num) => num === max).length;
  return `Количество чисел, равных максимальному (${max}): ${count}`;
};

document.getElementById("submit").addEventListener("click", main);
