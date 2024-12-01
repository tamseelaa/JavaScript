'use strict';
const names = ['John', 'Paul', 'Jones'];
let name='<ul>';
for(let i=0;i<names.length;i++) {
  name += `<li>${names[i]}</li>`;
}
name+='</ul>'
document.querySelector('#target').innerHTML= name;