const arr = document.querySelector('#array')
const pesquisa = document.querySelector('#pesq')
const btnpesq = document.querySelector("#btn-pesquisar")
const result = document.querySelector('#res')

const elArr = ["HTML","css","JavaScript"]
arr.innerHTML += `[${elArr}]`

btnpesq.addEventListener('click', (evt) => {
    result.innerHTML = 'Resultado: '
    if(pesquisa.value.length != 0){
        elArr.find((el) => {
            if(el.toUpperCase() == pesquisa.value.toUpperCase()){
                result.innerHTML = ''
                result.innerHTML = `Resultado: ${el} = True`
            }
        })
    }else{
        alert("Elemento não encontrado.Digite novamente.")
    }
})