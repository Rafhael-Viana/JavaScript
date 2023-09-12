// Object Prototypes servem para adicionar novas propriedades e métodos a um determinado objeto e/ou seu respectivo construtor.

const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(93)

document.addEventListener("keydown", (tecla) => {
    if(n1.disparos > 0){

        console.log("P O W !!!")
        n1.disparar()
    }
})

Nave.prototype.vidas = 3
Nave.prototype.disparar = function(key){
    if(this.disparos > 0){
        this.disparos--
        console.log(this.disparos)
    }
}

console.log(Nave)
console.log(n1)
console.log(n1.vidas)