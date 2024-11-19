let dogs=[];
for(let i=1;i<=6;i++){
  let dog=prompt(`Dog ${i} name is: `);
  dogs.push(dog);
}
dogs.sort().reverse();
let lists='<ul>';
for(let j=0;j<=5;j++){
  lists+=`<li>${dogs[j]}</li>`;
}
lists+='</ul>'
document.querySelector('#target').innerHTML= lists;
