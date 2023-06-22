let ad = document.querySelector('input.button')
ad.addEventListener('click', adicionar)
let fin = document.querySelector('input.final')
fin.addEventListener('click',finalizar)


let number = document.getElementById('num')
let res = document.querySelector('div#res')
let select = document.getElementById('sel')
let list = []

function isNumero(n){
    if( Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(number.value) && !inLista(number.value, list)){
        // window.alert('Tudo Ok!')
        list.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado.`
        select.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já inserido')
    }
    number.value = ''
    number.focus()
}
function finalizar(){
    if(list.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let maior = list[0]
        let menor = list[0]
        let soma = 0
        let media = 0
        for(let pos in list){
            soma += list[pos]
            if(list[pos] > maior)
                maior = list[pos]
            if(list[pos] < menor)
                menor = list[pos]
        }
        media = soma / list.length
        res.innerHTML += `<p>O total de números cadastrados é ${list.length}.</p>` 
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>` 
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>` 
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>` 
        res.innerHTML += `<p>A média dos valores é ${media}.</p>` 
    }
     
}