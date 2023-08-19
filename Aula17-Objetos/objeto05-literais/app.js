const Pessoa = {
    nome,
    idade,
    getNome: function(){ //ñ dá pra usar arrow function
        return this.nome
    },
    getIdade: function(){ //ñ dá pra usar arrow function
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

const p2 = Pessoa
const p3 = Pessoa
const p4 = Pessoa

//sintaxes diferentes para acessar propriedades e defini-las. Funciona em HTML e CSS também. Revisar boas práticas de segurança e POO.
p3.nome = "Julianderson"
p2['nome'] = 'Bridjanildviron'
p4.setNome('Clusterset')

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)

//No exemplo acima nota-se que todos as variáveis apontam para o mesmo objeto. Necessário devido cuidado para referenciação e alocação de memória. Revisar paradigma funcional.

//Integração com HTML
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('#res')

const showPerson = () => {
    let div = document.createElement('div')
    res.appendChild(div)
    div.innerHTML = `Nome: ${Pessoa.nome}<br> Idade: ${Pessoa.idade}`
}

btn_add.addEventListener('click', (evt) =>{
    const name = document.querySelector('#nome').value
    const idade = document.querySelector('#idade').value
    const gente = Pessoa
    gente.setNome(name)
    gente.setIdade(idade)
    showPerson()
})
