//HERANÇA - classes que herdam classes / classes que cedem métodos pra outra classes.

class Carro{ //classe PAI / classe BASE
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
    setCor(cor){
        this.cor = cor
    }

}

class Militar extends Carro{ //classe Filho
    //Herda todos as propriedades e métodos da classe PAI.
    constructor(nome,portas,blindagem,municao){
        //Invoca elementos da classe pai.
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

class Utilitário extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares = lugares
    }
}

let c1 = new Carro("Normal", 4)
c1.ligar()
c1.setCor("Preto")

//Necessário passar os parâmetros para a classe constructor.
let c2 = new Militar("Lutador",6,100,50)

console.log(`Nome: ${c1.nome}\n Portas: ${c1.portas}\n Ligado: ${(c1.ligado?'Sim':'Não')}\n Vel: ${c1.vel}\n Cor: ${c1.cor}`)
console.log("----------------------------\n")
console.log(`Nome: ${c2.nome}\n Portas: ${c2.portas}\n Ligado: ${(c2.ligado?'Sim':'Não')}\n Vel: ${c2.vel}\n Cor: ${c2.cor}\n Munição: ${c2.municao}\n Blindagem: ${c2.blindagem}\n`)
