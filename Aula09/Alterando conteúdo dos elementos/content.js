// selecionar elemento
let t = document.querySelector("#title")
let sb = document.querySelector("#sub")
// innerHTML
t.innerHTML = 'Samira Mira e Atira'

// textContent --> recomendado, mais utilizado e mais performático
sb.textContent = 'Navegando em Águas Misteriosas'

//criando e inserindo elementos no body
let novoParag = document.createElement('p')
let texto = document.createTextNode("Esse é o texto.")
novoParag.appendChild(texto)
console.log(novoParag)
const body = document.querySelector('body')
console.log(body)
body.appendChild(novoParag)

//criando e inserindo elementos em containers(divs, tags, etc...)
let res = document.querySelector('#container')
let list = document.createElement('ul')
let item = document.createElement('li')
res.appendChild(list)
list.appendChild(item)
item.textContent = 'Texto'

//removendo elementos filhos
let p = document.querySelector('#container p')
res.removeChild(p)

//removendo elementos
sb.remove()



