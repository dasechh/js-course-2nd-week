const main = () => {
  let age = document.getElementById("age").value;
  let pElement = document.getElementById("p-tag");
  return (pElement.innerHTML = switcher(age));
};

const switcher = (age) => {
  switch (true) {
    case age % 10 === 1 && age % 100 !== 11:
      return "Вам " + age + " год";
    case age % 10 >= 2 &&
      age % 10 <= 4 &&
      !(age % 100 >= 12 && age % 100 <= 14):
      return "Вам " + age + " года";
    default:
      return "Вам " + age + " лет";
  }
};

document.getElementById("button").addEventListener("click", main);