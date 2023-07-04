// adicionar atributos - setAttribute()
let h1 = document.querySelector('h1')
h1.setAttribute('class', 'testando-classe')

let title = document.querySelector('.testando-classe')
title.textContent = ''

// sempre temos que colocar o atributo e o valor do atributo.
let btn = document.querySelector('#btn')
btn.setAttribute('disabled', 'disabled')

let container = document.querySelector('#container')
let form = document.createElement('input')
let submit = document.querySelector('.submit')
container.appendChild(form)
form.style = 'display:block; margin-top: 15px;'
submit.style = 'display:inline-block; margin'
form.setAttribute('required', 'true')
container.setAttribute('class', 'testando testando-classe')

//remover atributos - removeAttribute()
container.removeAttribute('class') // obs: remove o atributo inteiro.