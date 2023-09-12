const info = document.querySelector('#info')
const res = document.createElement('div')
const btn_copy = document.querySelector('#btn_copy')

btn_copy.addEventListener('click', () => {
    //escreve o texto do input info na área de transferência.

    /**
     * @param select Seleção prévia antes da execução da ação 
     * @param setSelectionRange define o tamanho da seleção.
    */
    info.select()
    info.setSelectionRange(0, info.length)

    navigator.clipboard.writeText(info.value)
    console.log(info.value)
})