const main = () => {
  let pElement = document.getElementById("summary");
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  return (pElement.innerHTML = `Количество дней в этом месяце: ${MonthLength(
    month,
    year
  )}`);
};

const isLeap = (year) => {
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    return true;
  }
  return false;
};

const monthLength = (month, year) => {
  if (month == 2 && isLeap(year)) {
    return 29;
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return 28;
      default:
        return "Invalid month";
    }
  }
};

document.getElementById("button").addEventListener("click", main);
