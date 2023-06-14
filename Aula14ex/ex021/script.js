let b = document.querySelector('input.button')
b.addEventListener('click', gerar)

function gerar() {
    let n = document.getElementById('num')
    let tb = document.getElementById('sel')
    let res = document.querySelector('div#res')
    if(n.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        let p = 1
        n = Number(n.value)
        tb.innerHTML = ''
        for(let c = n ; c <= (n*10); c += n){
            let item = document.createElement('option')
            item.text = `${n} x ${p} =  ${c}`
            item.value = `v${p}`
            tb.appendChild(item)
            p++
        }
    }
}