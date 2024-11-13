start=parseInt(prompt("Enter starting year of interval"));
end=parseInt(prompt("Enter ending year of interval"));
let i=start;
let leap='';
while(i<=end){
  if ((i%400===0)||(i%100!==0)&&(i%4===0)) {
    leap+= i +' is a leap year<br>';

  }i++;
}
document.querySelector("#target").innerHTML = leap ;

