//? Abstract, ou classes abstratas, ou ainda, classes base são classes definidas como base para outras e que não podem ser instanciadas.(Em JS, não há uma forma nativa de declarar classes abstratas.) 

class CarroPadrao {
    constructor(){
        if (this.constructor === CarroPadrao){
            //throw - declara uma exceção
            //new TypeError - TypeErrorConstructor(Define uma mensagem de erro que pode ser escrita) 
            throw new TypeError ("Esta classe não pode ser instanciada!")
        }
        if (this.ligar === undefined){
            throw new TypeError ("É necessário definir o método ligar.")
        }
        if (this.desligar === undefined){
            throw new TypeError ("É necessário definir o método desligar.")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Car extends CarroPadrao {
    constructor(tipo, e_turbo){
        super()
        this.turbo = new Turbo(e_turbo)
        if(tipo == 1){
            this.vel_max = 120
            this.nome = "Normal"
        } else if(tipo == 2){
            this.vel_max = 160
            this.nome = "Esportivo"
        }else if(tipo == 3){
            this.vel_max = 200
            this.nome = "Corrida"
        }
        this.vel_max = this.vel_max + (this.vel_max * (this.turbo.pot / 100))
    }
    //Função com mesmo nome na classe filha
    info(){
        console.log(`\nNome: ${this.nome}`)
        console.log(`Vel. Máx: ${this.vel_max}`)
        console.log(`Turbo: ${this.turbo.pot}%`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Ligado: ${this.ligado?"Sim":"Não"}`)
        console.log(`---------------------`)
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

class Turbo {
    constructor(e){
        if (e == 0){
            this.pot = 0
        } else if (e == 1){
            this.pot = 50
        } else if (e == 2){
            this.pot = 75
        } else if (e == 3){
            this.pot = 100
        }
    }
}

class SpecialCar extends Car {
    constructor(es_turbo){
        super(4,es_turbo)
        this.type_info = 1
        this.nome = "Especial"
        this.vel_max = 300
        this.vel_max = this.vel_max + (this.vel_max * (this.turbo.pot / 100))
    }
    // Função com mesmo nome na classe pai
    info(){
        super.info()
    }
}

const c1 = new Car(1,0)
const c2 = new Car(2,1)
const c3 = new SpecialCar(3)
// const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()