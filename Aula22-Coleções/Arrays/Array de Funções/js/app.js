let btn_soma =document.getElementById('btn_soma')
let btn_sub = document.getElementById('btn_sub')
let btn_mult = document.getElementById('btn_mult')
let btn_div = document.getElementById('btn_div')
const result = document.querySelector('#res')

const op = [
    () => {
        const val = [document.getElementById('val1').value,document.getElementById('val2').value]
        result.innerHTML =  Number(val[0]) + Number(val[1])
    },
    () => {
        const val = [document.getElementById('val1').value,document.getElementById('val2').value]
        result.innerHTML =  (Number(val[0])) - Number(val[1])
    },
    () => {
        const val = [document.getElementById('val1').value,document.getElementById('val2').value]
        result.innerHTML =  Number(val[0]) * Number(val[1])
    },
    () => {
        const val = [document.getElementById('val1').value,document.getElementById('val2').value]
        result.innerHTML =  Number(val[0]) / Number(val[1])
    },
]
btn_soma.addEventListener('click', (evt) => {op[0]()})
btn_sub.addEventListener('click', (evt) => {op[1]()})
btn_mult.addEventListener('click', (evt) => {op[2]()})
btn_div.addEventListener('click', (evt) => {op[3]()})