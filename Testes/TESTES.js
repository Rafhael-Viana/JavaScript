
// function soma(a,b){
//     return a+b
// }
// console.log(soma(1,2));

// const soma = (a,b) => a+b
// console.log(soma(1,2))



// <!---------------------------REVISAR EXEMPLO---------------------------->
class Person{
    constructor(name){
        this.name = name
    }
    printNome() {
        setTimeout(function(){
            console.log(this.name);
        })
    }
    
    printArrowNome(){
        setTimeout(() => console.log(this.name),200)
    } 
}


const creature = new Person("Hantaro");

creature.printNome()
creature.printArrowNome()
