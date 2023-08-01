const arr = document.querySelector('#array')
const btn_verify = document.querySelector("#btn-verify")
const result = document.querySelector('#res')

const elArr = [13,25,9,18,15,30,21,15]
arr.innerHTML += `[${elArr}]`

btn_verify.addEventListener('click', (evt) => {
    result.innerHTML = `Resultado: Array não conforme.`
    const ret = elArr.some((el,i) =>{
        if(el<30)
            result.innerHTML = `Resultado: Array não conforme - Nenhum correspondente.`
        return el > 30
    })
    if(ret)
        result.innerHTML = 'Resultado: OK'
    console.log(ret)
})