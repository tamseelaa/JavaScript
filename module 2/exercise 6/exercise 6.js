function random(){
  return (Math.floor(Math.random()*6)+1);
}
let roll=random();
let dice='';
while(roll!==6){
    dice += '<li>'+roll+'</li><br>';
    roll = (random());
}
if (roll===6){
  dice+='<li>'+6+'</li><br>';
}
document.querySelector('#target').innerHTML='<ul>'+dice+'</ul>';