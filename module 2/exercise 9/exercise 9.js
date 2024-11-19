function even(list){
  for (let i=0;i<list.length;i++){
    if((list[i])%2===0){
      newList.push(list[i])
    }
  }return newList
}
newList=[]
original=[9,8,7,6,5,4,3,2,1];
updated=even(original);
console.log('original List: '+ original)
console.log('updated even List: '+ updated)
//ask teacher that you want to add an if statement where you want to remove 0 in the list if it has it;