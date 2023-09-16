const tc_num = [...document.querySelectorAll(".num")]
const tc_opr = [...document.querySelectorAll(".opr")]
const tc_res = document.querySelector(".res")
const display = document.querySelector(".display")
const copy = document.querySelector("#tcpy")
const tclear = document.querySelector("#tclear")
const tigual = document.querySelector("#tigual")
const tc_show = document.querySelector("#aba_calc")
const calc = document.querySelector("#calc")

let sinal = false
let decimal = false

tc_num.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if(display.innerHTML == 0){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

tc_opr.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(!sinal){
            sinal = true
            decimal = false
            if(display.innerHTML == 0){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})


tclear.addEventListener("click", () => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", () => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

copy.addEventListener("click", (evt) => {
    console.log(evt.target)
    navigator.clipboard.writeText(display.innerHTML)
})

tc_show.addEventListener("click", () => {
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        tc_show.innerHTML = "<"
    } else {
        tc_show.innerHTML = ">"
    }
})
