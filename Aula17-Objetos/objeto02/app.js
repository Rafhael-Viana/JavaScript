//Objetos criados com o operador new são atribuídos a uma classe de objetos pré-definida.

class Carro{
    constructor(nome,tipo = 0){
        this.nome = nome
        if(tipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }
        else if(tipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 80
        }
        else if(tipo == 3){
            this.tipo = "Militar"
            this.velmax = 200
        }
        else{
            this.tipo = "Passeio"
            this.velmax = 180
        }
    }

    //Definição de métodos em classes
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Vel. Máx: ${this.velmax} \n`)
    }

    //Métodos GET - pegar propriedades
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelmax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }

    //Métodos SET - alterar/definir propriedades.
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
}
//Se o constructor não pedir nenhum parâmetro não deve-se ser passado nenhum.

//automaticamente o constructor será executado e ao parâmetro nome será atribuído os argumentos passados.

let p1 = new Carro("Ferrari",1)
let p2 = new Carro("Ambulância",2)
let p3 = new Carro("Caminhão",3)
let p4 = new Carro("Fiesta")

// p1.info()
// p2.info()

// console.log(p2.getNome());

// console.log(p1.getInfo())

p2.setNome('Bombeiro')
p2.setTipo("Empresarial")
console.log(p2.getNome(),p2.getTipo());
p2.info()