//clearTimeout()
let x = 0

const time = setTimeout(() =>{
    console.log('O x é igual a 0')
},2000)

x = 5

if(x > 0){
    console.log('x passou de 0')
    clearTimeout(time)
}

//clearInterval()

let p = 0
let interval = setInterval(() => {
    if(p <= 5){
        console.log('setinterval ' + p)
        return p++
    } else {
        console.log('Não precisamos mais repetir.')
        clearInterval(interval)
    }
},2000)

