'use strict';
const triggerway=document.getElementById('trigger');
triggerway.addEventListener('mouseover',function()
{
  document.getElementById('target').src = 'img/picB.jpg';

});

triggerway.addEventListener('mouseout',function(){
  document.getElementById('target').src = 'img/picA.jpg';
});