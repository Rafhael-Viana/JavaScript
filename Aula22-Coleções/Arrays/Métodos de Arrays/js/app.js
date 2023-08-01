const cx = document.querySelector('#caixa')

let cores = ["azul", "verde", "vermelho",['preto', 'branco', 'cinza']]
let cursos = ["HTML", "CSS", "JavaScript"]
cursos.push(cores)
console.log(cursos[3][3][2])  //TODO: Conceito de matrizes (arrays que indiciam arrays)

//? Métodos em Arrays

//Adiciona um elemento no final do array
cursos.push("C++")
cursos.push("Python")
cursos.push("Rust")
//Retira um elemento do final do array
cursos.pop()
//Adiciona um elemento no inicio do array
cursos.unshift("Rust")
cursos.unshift("Ruby")
//Retira um elemento do inicio do array
cursos.shift()

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el
    cx.appendChild(p)
})
