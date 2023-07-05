//OBS: Os nomes das funções serão levemente alterados a fim de evitar erros no código. Tenha em mente que todos os nomes utilizados, a depender do contexto, se tratam da mesma função.


//function declaration
function minhaFuncao(){
    //faz algo
    console.log("minhaFuncao executada")
}

//em JavaScript funções são como qualquer outro valor, podem ser armazenadas em variáveis

//function expression - função atribuída a uma variável
const myFuncao = function(){ // essa é uma função anônima (sem nome)
    //faz algo
    console.log("myFuncao executada")
}
const funcaoNomeada = function funcaoNomeada(){ // função nomeada
    //faz algo
    console.log("funcaoNomeada executada")
}
const minhAFuncao = () => {  // arrow function
    //faz algo
    console.log("minhAFuncao executada")
}

// Funções recebem argumentos e retornam valores

// "Mensagem" é o argumento(ou parâmetro) e o valor é a string retornada + argumento

const minhaFuncao = mensagem => {  // com um único argumento parênteses são opcionais. Com nenhum ou mais de 1 argumento, parênteses são obrigatórios.
    
    //faz algo
    console.log("minhaFuncao executada" + mensagem)
    return "minhaFuncao executada" + mensagem
}

const dobrar = numero => {
    //faz algo
    return numero * numero
}

const saudar = () => {
    const horaAtual = new Date().getHours()
    if( horaAtual >= 6 && horaAtual <= 12) return "Bom Dia"
    if(horaAtual <= 18) return "Boa Tarde"
    return "Boa noite"
}

//------------------------------------------------------------------

//A constante pessoa nesse caso armazena a função em si
//Nesse primeiro caso a função somente é atribuída à constante

function criarPessoa(nome){
    return { nome }
}
const pessoa = criarPessoa

                criarPessoa("Daniel")  // mesmo que 
const daniel =  pessoa("Daniel")


//Nesse caso a const nome armazena o objeto resultado da função porque a função foi executada ao ser passado um parâmetro para ela
function criarPessoa(nome){
    return { nome }
}
const nome = criarPessoa("Daniel")

//---------------------------------------------------------------------

const Pessoa = (nome) => {
    return { nome }
}
const Daniel = Pessoa("Daniel")
const cintia = Pessoa("Cintia")
console.log(cintia)

//outra forma de escrever a função

const CriarPessoa = nome => ({nome})

const luis = CriarPessoa("Luis")
const ana = CriarPessoa("Ana")

//---------------Voltando pro exemplo saudar()--------------------------

const Saudar = (nome) => {
    const horaAtual = new Date().getHours()
    if( horaAtual >= 6 && horaAtual <= 12) return "Bom Dia"
    if(horaAtual <= 18) return "Boa Tarde"
    return "Boa noite"
}

// Adicionamos a função responder que recebe o parametro saudacao
const sAudar = (nome) => {
    const horaAtual = new Date().getHours()
    const responder = (saudacao) => console.log(saudacao)

    if( horaAtual >= 6 && horaAtual <= 12) return "Bom Dia"
    if(horaAtual <= 18) return "Boa Tarde"
    return "Boa noite"
}
//Aqui executamos a função responder dentro da função saudar
//Note que utilizamos return. Isso indica que saímos da função saudar() e executamos a função responder()
//Se não utilizarmos, a resposta da função, será todas as três saudações(B.Dia, B.Tarde,B.Noite)
const saUdar = (nome) => {
    const horaAtual = new Date().getHours()
    const responder = (saudacao) => console.log(saudacao)

    if( horaAtual >= 6 && horaAtual <= 12) return responder("Bom Dia")
    if(horaAtual <= 18) return responder("Boa Tarde")
    return responder("Boa noite")
}

//Se executarmos a função ocorrerá um erro, pois responder() não existe.
// Como resolvemos isso?

const sauDar = (nome) => {
    const horaAtual = new Date().getHours()
//  const responder = (saudacao) => console.log(saudacao)

    if( horaAtual >= 6 && horaAtual <= 12) return responder("Bom Dia")
    if(horaAtual <= 18) return responder("Boa Tarde")
    return responder("Boa noite")
}

const responderCallback = saudacao => console.log(saudacao, nome)
sauDar("Daniel")

//Simples!!!
//Passamos a função "responderCallback()" na forma do argumento "responder" para a função "saudar()"
const saudAr = (nome, responder) => {
    const horaAtual = new Date().getHours()
//  const responder = (saudacao) => console.log(saudacao)

    if( horaAtual >= 6 && horaAtual <= 12) return responder("Bom Dia")
    if(horaAtual <= 18) return responder("Boa Tarde")
    return responder("Boa noite")
}

const ResponderCallback = saudacao => console.log(saudacao, nome)
sauDar("Daniel", ResponderCallback)

//Aqui mudamos o nome do argumento "responder" para "cb". Pode ser qualquer nome.
const saudaR = (nome, callback) => {
    const horaAtual = new Date().getHours()
//  const callback = (saudacao) => console.log(saudacao)

    if( horaAtual >= 6 && horaAtual <= 12) return callback("Bom Dia", nome)
    if(horaAtual <= 18) return callback("Boa Tarde", nome)
    return callback("Boa noite", nome)
}

const ResponderCallbacK = (saudacao , nome) => console.log(saudacao, nome)
saudaR("Daniel", ResponderCallbacK)

//Aqui passamos a função de maneira anônima e direta, apenas definindo como argumento.
const SaudaR = (nome, callback) => {
    const horaAtual = new Date().getHours()
//  const callback = (saudacao) => console.log(saudacao)

    if( horaAtual >= 6 && horaAtual <= 12) return callback("Bom Dia", nome)
    if(horaAtual <= 18) return callback("Boa Tarde", nome)
    return callback("Boa noite", nome)
}

//const ResponderCallbacK = (saudacao , nome) => console.log(saudacao, nome)
SaudaR("Daniel", (saudacao, nome) => console.log(saudacao, nome))

// É isso!!!
//Callback Functions são funções passadas para outras funções, através de parâmetros e que funcionam de maneira quase assíncrona. Ou seja, sua resposta é baseada na outra função.