const main = () => {
  let input = document.getElementById("numberArray").value;
  let numberArray = input.split(" ").map((num) => parseFloat(num.trim()));
  if (numberArray.length === 0 || numberArray.some(isNaN)) {
    document.getElementById("result").textContent =
      "Пожалуйста, введите корректный массив чисел.";
    return;
  }
  let median = findMedian(numberArray);
  document.getElementById("result").textContent = `Медиана: ${median}`;
};

const findMedian = (array) => {
  array.sort((a, b) => a - b); // Сортируем массив
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return (array[mid - 1] + array[mid]) / 2;
  } else {
    return array[mid];
  }
};

document.getElementById("submit").addEventListener("click", main);