const main = () => {
  let day = document.getElementById("day").value;
  let temp = document.getElementById("temp").value;
  let precipitation = document.getElementById("precipitation").value;
  let wind = document.getElementById("wind").value;
  let humidity = document.getElementById("humidity").value;
  let summary = document.getElementById("summary");
  return summary.innerHTML = decision(day, temp, precipitation, wind, humidity);
};

const decision = (day, temp, precipitation, wind, humidity) => {
  if (
    day != "sunday" ||
    temp != "warm" ||
    precipitation == "rain" ||
    precipitation == "snow" ||
    precipitation == "hail" ||
    wind == "windy" ||
    humidity == "humi-high"
  ) {
    return "Нет";
  } else {
    return "Да";
  }
};
document.getElementById("submit").addEventListener("click", main);