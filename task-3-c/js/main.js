const main = () => {
  let input = document.getElementById("numberArray").value;
  let numberArray = input.split(" ").map((num) => parseFloat(num.trim())); // Преобразуем ввод в массив чисел

  if (numberArray.length === 0 || numberArray.some(isNaN)) {
    document.getElementById("result").textContent =
      "Пожалуйста, введите корректный массив чисел.";
    return;
  }

  let sortedArray = mergeSort(numberArray);
  document.getElementById(
    "result"
  ).textContent = `Отсортированный массив: ${sortedArray.join(", ")}`;
};

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  // Находим средний индекс
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid)); // Сортируем левую половину
  const right = mergeSort(array.slice(mid)); // Сортируем правую половину

  return merge(left, right); // Объединяем отсортированные половины
};

// Функция для слияния двух отсортированных массивов
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Сравниваем элементы и объединяем два массива
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // Объединяем оставшиеся элементы
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

document.getElementById("submit").addEventListener("click", main);