//Objetos criados com o operador new são atribuídos a uma classe de objetos pré-definida.

class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    //Definição de métodos em classes
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}\n`)
    }

    //Métodos GET - pegar propriedades
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }

    //Métodos SET - alterar/definir propriedades.
    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
}

let pessoas = []
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('#res')

const addPessoa = (pessoas) => {
    res.innerHTML = ''
    pessoas.map((p)=>{
        const div = document.createElement('div')
        div.setAttribute('class','pessoa')
        div.innerHTML = `Nome: ${p.getNome()}<br> Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector('#nome')
    const idade = document.querySelector('#idade')
    const person = new Pessoa(nome.value, idade.value)
    pessoas.push(person)
    
    addPessoa(pessoas)
    console.log(pessoas)
    
    nome.value = ''
    idade.value = ''
    nome.focus()
})
