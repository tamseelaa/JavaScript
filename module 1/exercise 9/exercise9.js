const integer = parseInt(prompt("Enter a number: "));

if (integer <= 1) {
  document.querySelector('#target').innerHTML = `${integer} is not a prime number`;
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    document.querySelector('#target').innerHTML = `${integer} is a prime number`;
  } else {
    document.querySelector('#target').innerHTML = `${integer} is not a prime number`;
  }
}