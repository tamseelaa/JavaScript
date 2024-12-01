list=['<li>'+'First item'+'<br></li>','<li>'+'Second item'+'<br></li>','<li>'+'Third item'+'<br></li>']
document.getElementById('target').innerHTML=list.join('');
document.getElementById('target').classList.add('my-list');