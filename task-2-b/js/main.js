const main = () => {
  let number = parseFloat(document.getElementById("number").value);
  let summary = document.getElementById("summary");
  return (summary.innerHTML = `Простые числа из вашего числа: ${calculate(
    number
  )}`);
};

const calculate = (number) => {
  let sieve = new Array(number + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let num = 2; num * num <= number; num++) {
    if (sieve[num]) {
      for (let multiple = num * num; multiple <= number; multiple += num) {
        sieve[multiple] = false;
      }
    }
  }

  let primes = [];
  for (let i = 2; i <= number; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }
  return primes;
};

document.getElementById("submit").addEventListener("click", main);
