const main = () => {
  let age = parseInt(document.getElementById("age").value);
  let pElement = document.getElementById("p-tag");
  return (pElement.innerHTML = getAgeWithSuffix(age));
};

const getAgeWithSuffix = (age) => {
  if (age % 100 >= 11 && age % 100 <= 14) {
    return age + " лет";
  } else if (age % 10 === 1) {
    return age + " год";
  } else if (age % 10 >= 2 && age % 10 <= 4) {
    return age + " года";
  } else {
    return age + " лет";
  }
};

document.getElementById("button").addEventListener("click", main);