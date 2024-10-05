const main = () => {
  let number = parseFloat(document.getElementById("number").value);
  let summary = document.getElementById("summary");
  return (summary.innerHTML = `Простые числа из вашего числа: ${PrimeNumbers(
    number
  )}`);
};

const PrimeNumbers = (number) => {
  let primes = "";
  for (let num = 2; num <= number; num++) {
    let isPrime = true;
    let divisor = 2;
    while (divisor * divisor <= num) {
      if (num % divisor === 0) {
        isPrime = false;
        break;
      }
      divisor++;
    }
    if (isPrime) {
      primes += num + " ";
    }
  }
  return primes.trim();
};

document.getElementById("submit").addEventListener("click", main);