const targets=document.getElementById('target');
const firstItem=document.createElement('li');
firstItem.textContent='First Item';
const secondItem=document.createElement('li');
secondItem.textContent='Second Item';
secondItem.classList.add('my-item');
const thirdItem=document.createElement('li');
thirdItem.textContent='Third Item';

targets.appendChild(firstItem);
targets.appendChild(secondItem);
targets.appendChild(thirdItem);