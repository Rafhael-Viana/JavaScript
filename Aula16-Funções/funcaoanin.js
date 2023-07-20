//A função "funcao" recebe os valores chama a função "soma" e retorna o resultado "res" que é retornado pela função "funcao".

const funcao = (...valores) => {
    const soma = (val) => {
        let res = 0
        for(v of val){
            res += v
        }
        return res
    }
    return soma(valores)
}
console.log(funcao(10,15,20))