//criar elemento
let p = document.querySelector('#container p')
p.remove()

let h3 = document.createElement('h3')
h3.classList.add('testando-classe')

let txt = document.createTextNode('Esse é o texto do h3.')
h3.appendChild(txt)

//selecionar elemento
let title = document.getElementById('title')

//selecionar o pai do elemento
let pai = title.parentNode

//trocar o elemento
pai.replaceChild(h3, title)


