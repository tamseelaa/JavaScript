let numbers=[];
let num=parseInt(prompt("Enter a number and enter 0 to quit" ));
let length=0;
while(num!==0) {
    numbers.push(num);
    length++;
    num = parseInt(prompt("Enter a number and enter 0 to quit"));
}
numbers.sort((a,b) =>a-b).reverse();
for(let i=0;i<length;i++){
   console.log(numbers[i]);
}