'use strict';
const ok=confirm("Should I calculate the square root?");
const target=document.querySelector('#target');
if(ok) {
  const number =parseInt(prompt("Enter a number"));
  if (number>=0){
    document.querySelector('#target').innerHTML =`The square root of ${number} is ${Math.sqrt(number)}`;
  }
  else{document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined';}
}
else{
  document.querySelector('#target').innerHTML = 'The square root will not be calculated';
}