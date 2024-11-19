let participants=parseInt(prompt("Enter number of participants"))
let names=[];
for(let i=0;i<participants;i++)
{
  let name=prompt("Enter name of the participants");
  names.push(name);
}
const targets=document.querySelector('#target');
names.sort();
lists='<ol>';
for(let j=0;j<participants;j++){
      lists+=`<li>${names[j]}</li>`;
}
lists+='</ol>';

targets.innerHTML=lists;
