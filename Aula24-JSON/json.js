const pessoa = {
    nome: "Jãonio",
    canal: "Dentário",
    curso: 'Javascript',
    aulas:{
        aula1: "Introdução",
        aula2: "Variáveis",
        aula3: "Condicional",
    }
}

const string_pessoa = '{"nome":"Jãonio","canal":"Dentário","curso":"Javascript","aulas":{"aula1":"Introdução","aula2":"Variáveis","aula3":"Condicional"}}'

//converte os objetos para uma string formato JSON
const s_json_pessoa = JSON.stringify(pessoa)

//converte as strings JSON para objetos literais de Javascript
const o_json_pessoa = JSON.parse(s_json_pessoa)

console.log(pessoa);
console.log(s_json_pessoa);
console.log(o_json_pessoa);