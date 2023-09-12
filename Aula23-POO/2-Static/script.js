class Npc {
    //Classes static definem propriedades pra toda a classe e não somente para um elemento dela.
    static alerta = false
    constructor(vida) {
        this.vida = vida
    }
    info(){
        console.log(`Vida: ${this.vida}`)
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`)
        console.log(`-----------------------------`)
    }
    static alertar = function(){
        Npc.alerta?false:true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(20)
const npc3 = new Npc(50)

//A atribuição e acesso de uma propriedade static se dá por meio da própria classe e não por elementos instanciados a ela.

//! ERRADO: npc1.alerta = false
Npc.alerta = true //* CERTO

npc1.info()
npc2.info()
npc3.info()