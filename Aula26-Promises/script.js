// Maneira de trabalhar assíncrona onde o programa espera determinada ação ser executada antes de continuar a lógica.

const numero = document.getElementById("numero");
const btn_promessa = document.querySelector("#btn_promessa")

// Chama a promise somente quando clicamos no botão.
btn_promessa.addEventListener("click", (evt) => {
    
    numero.innerHTML = "Processando... "
    promessa()
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro");
        numero.classList.add("ok");
    })
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
})

// Declara a promise
const promessa = () => {
    let p = new Promise((resolve, reject) => {
    
        let resultado = true;
        let tempo = 3000;
        setTimeout(() => {
            resultado ? resolve("Deu tudo certo") : reject("Deu tudo errado")
        }, tempo)
    })
    return p
}

numero.innerHTML = "Esperando! "