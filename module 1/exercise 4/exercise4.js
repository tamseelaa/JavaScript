name=prompt("Enter your name: ")
house=Math.floor(Math.random()*4 +1)
switch(house){
  case 1 :
    house="Gryffindor";
    document.querySelector('#target').innerHTML = name + ',you are ' + house;
    break;
  case 2:
    house="Slytherin"
    document.querySelector('#target').innerHTML = name + ',you are ' + house;
    break;
  case 3:
    house="Hufflepuff";
    document.querySelector('#target').innerHTML = name + ',you are ' + house;
    break;
  case 4:
    house="Ravenclaw";
    document.querySelector('#target').innerHTML = name + ',you are ' + house;
    break;
}
