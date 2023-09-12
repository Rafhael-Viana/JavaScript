//? Polimorfismo é o conceito de ter duas propriedades ou métodos iguais em duas classes diferentes. 
//todo: Ao se deparar com essa situação, o tratamento se dá por chamar o elemento da classe pai com "super", ou criar um novo elemento que substituirá o já definido na classe pai.

class Car {
    constructor(tipo, e_turbo){
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
        console.log(`---------------------`)
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

c1.info()
c2.info()
c3.info()