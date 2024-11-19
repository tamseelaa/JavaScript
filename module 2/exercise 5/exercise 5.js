let list=[];
let number=parseInt(prompt("Enter a number and reenter any number to quit program "));

while(!list.includes(number)){
  list.push(number);
  number=parseInt(prompt("Enter a number and reenter any number to quit "));
}

list.sort((a,b)=>a-b);
for(let j=0;j<list.length;j++){
  console.log(list[j]);
}