// //O método map percorre um array de elementos e executa uma função dentro para cada um deles.

// const cursos = ['Html', 'CSS', 'Javascript', 'PHP', 'React']
// cursos.map((el,i) => {      //"el" recebe o elemento e 'i' recebe o índice do elemento.
//     console.log(`Curso: ${el} - Posição: ${i}`)
// })

// let el = document.getElementsByTagName('li')
// el = [...el]
// console.log(el);
// el.map((e,i) => {
//     console.log(e)
// })

// const el = document.getElementsByTagName('li')
// const val = Array.prototype.map.call(el, ({textContent})=>textContent)
// console.log(val);

const converterInt = e => parseInt(e)
const dobrar = e => e*2
let num = ['1', '2', '3', '4', '5', '6'].map(dobrar)
console.log(num)
