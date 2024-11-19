function concat(list){
  let add='';
  for( let i=0;i<list.length;i++){
    add+=list[i];
  }
  document.querySelector('#target').innerHTML=add;
}
array=['Lisa','Timo','Lu','Mahi','Iqra'];
concat(array);