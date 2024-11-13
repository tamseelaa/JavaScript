const diceTimes=parseInt(prompt("how many time the dice needs to be rolled"))
const sumDesired=parseInt(prompt("enter your desired sum of all dices rolled: "))
const rollLimit=10000;
let roll=0;
for (let i=0;i<rollLimit;i++){
  let sum=0;
  for (let j=0;j<diceTimes;j++){
    const dice=Math.floor(Math.random()*6)+1;
    sum+=dice;
  }
  if(sum===sumDesired){
    roll++;
    console.log(sum,sumDesired);
  }
}
const probability=(roll/rollLimit)*100;
document.querySelector('#target').innerHTML=`probability to get sum ${sumDesired} with ${diceTimes} dice is ${probability.toFixed(2)}%`;
