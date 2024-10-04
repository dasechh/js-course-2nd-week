const main = () => {
  let day = document.getElementById("day").value;
  let temp = document.getElementById("temp").value;
  let precipitation = document.getElementById("precipitation").value;
  let wind = document.getElementById("wind").value;
  let humidity = document.getElementById("humidity").value;
  return decision(day, temp, precipitation, wind, humidity);
};

const decision = (day, temp, precipitation, wind, humidity) => {
  let summary = document.getElementById("summary");
  if (
    day != "sunday" ||
    temp != "warm" ||
    precipitation == "rain" ||
    precipitation == "snow" ||
    precipitation == "hail" ||
    wind == "windy" ||
    humidity == "humi-high"
  ) {
    return (summary.innerHTML = "Сегодня не играем");
  } else {
    return (summary.innerHTML = "Сегодня играем!");
  }
};
document.getElementById("submit").addEventListener("click", main);