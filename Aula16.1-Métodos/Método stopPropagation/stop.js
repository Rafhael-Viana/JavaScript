const ct = document.querySelector('#main')
const btn = [...document.querySelectorAll('.b1')]

ct.addEventListener('click', (evt) => {
    console.log("clicou")
    btn.map((el) =>{
        el.addEventListener('click',(evt) => {
            evt.stopPropagation()
        })
    })
})

