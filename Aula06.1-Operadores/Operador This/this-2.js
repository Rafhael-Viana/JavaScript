// //O operador this refere-se a propriedades contidas dentro de objetos. Retorna uma propriedade de um objeto.

// function aluno(nome,nota){
//     this.nome = nome
//     this.nota = nota

//     console.log(this.nome);
//     console.log(this.nota);
// }

// aluno("Brino", 100)

// Diferença entre this em functions normais e arrow functions.

//O método setTimeout e setInterval criam novos escopos que funções anônimas normais não são capazes de contornar, enquanto que arrow functions são capazes de procurar em escopos acima até que o "this" seja encontrado, pois não usam o contexto léxico e sim o contexto root(pai, raiz).

//obs: procurar mesmo ex em estrutura de classes em testes.js no repositório.

function aluno(nome,nota){
    this.nome = nome
    this.nota = nota

    this.dados = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },1500)
    }
    this.Dados = () => {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        },3000)
    }
}

const al1 = new aluno("Jão", 28)
const al2 = new aluno("Samanta", 93)
al1.dados()
al2.Dados()