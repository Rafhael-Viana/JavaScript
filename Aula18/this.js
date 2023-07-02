// window.alert('Olá, otário.')
// this.alert('Olá, otário número 2.') // "this" refere-se ao objeto window em escopo global

let pessoa = {

    nome: 'Matheus',
    idade: 31,
    status: 'Solteiro',
    carro: 'Mercedes',
    dizerNome(){
        console.log('Meu nome é ' + this.nome)
    },
    aniversario(){
        this.idade += 1
    }
}
pessoa.dizerNome()

pessoa.aniversario()

console.log(pessoa.idade)