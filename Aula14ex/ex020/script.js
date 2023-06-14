var b = document.querySelector('input.button')
b.addEventListener('click', contar)

function contar(){

    let i = Number(document.getElementById('inic').value)
    let f = Number(document.getElementById('fim').value)
    let p = Number(document.getElementById('passo').value)    
    var res = document.querySelector('div#res')

    if(i == 0 || f == 0 || p <= 0 || p > i){
        window.alert('Error')
    }else{
        res.innerHTML = 'Contando:'
        if(i < f){
            for(let c = i;c <= f; c += p ){
                res.innerHTML += `\u{27A1}${c} `
            }
        }else{
            for(let c = i;c >= f; c -= p){
                res.innerHTML += `\u{27A1}${c} `
            }
        }
    }
    
}