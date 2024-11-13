const times=parseInt(prompt("Enter how many time you want the dice to roll"));
let sum = 0;
for(let i=0;i<times;i++) {
  let dice = (Math.floor(Math.random() * 6) + 1)
  sum += dice;

}
document.querySelector('#target').innerHTML='The sum after rolling the dice ' +times+ ' times = '+sum;