function random(s){
  return (Math.floor(Math.random()*s)+1);
}
let sides=parseInt(prompt("write number of how many sides you want your dice to have?"))
let roll=random(sides);
let dice='';
while(roll!==sides){
    dice += '<li>'+roll+'</li><br>';
    roll = (random(sides));
}
if (roll===sides){
  dice+='<li>'+sides+'</li><br>';
}
document.querySelector('#target').innerHTML='<ul>'+dice+'</ul>';