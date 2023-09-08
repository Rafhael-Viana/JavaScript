const tipo_milit = document.querySelector('#tipo_milit')
const tipo_norm = document.querySelector('#tipo_norm')
const nome = document.querySelector('#nome')
const portas = document.querySelector('#portas')
const blindagem = document.querySelector('#blind')
const municao = document.querySelector('#munic')
const btn_addCarro = document.querySelector('#btn_addCarro')
const carros = document.querySelector("#carros")

let a_carros = []

const removeCarro = (quem) => {
    a_carros = a_carros.filter((el) => {
        return el.nome != quem
    })
}

tipo_milit.addEventListener('click', (evt) => {
    blindagem.value = ''
    municao.value = ''
    portas.value = ''
    blindagem.removeAttribute('disabled')
    municao.removeAttribute('disabled')
})

tipo_norm.addEventListener('click', (evt) => {
    blindagem.value = ''
    municao.value = ''
    portas.value = ''
    blindagem.setAttribute('disabled','disabled')
    municao.setAttribute('disabled','disabled')
})

const exibirCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach((car) => {
        const div = document.createElement('div')
        const button = document.createElement('button')
        div.setAttribute('class','carro')
        div.setAttribute('data-nome',car.nome)
        button.addEventListener('click', (evt) => {
            const p_remover = evt.target.parentNode.dataset.nome
            removeCarro(p_remover)
            exibirCarros()
        })
        div.innerHTML = `<p>Nome: ${car.nome}</p>`
        div.innerHTML += `<p>Portas: ${car.portas}</p>`
        div.innerHTML += `<p>Cor: ${car.cor}</p>`
        div.innerHTML += `<p>Blindagem: ${car.blindagem}</p>`
        div.innerHTML += `<p>Munição: ${car.municao}</p>`
        button.innerHTML = 'Remover'
        div.appendChild(button)
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', (evt) => {
    if(tipo_norm.checked){
        const c = new Carro(nome.value, portas.value)
        a_carros.push(c)
    } else {
        const c = new Militar(nome.value, portas.value, blindagem.value, municao.value)
        a_carros.push(c)
    }
    
    exibirCarros()
})

class Carro{
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

class Militar extends Carro{
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

// console.log(`Nome: ${c1.nome}\n Portas: ${c1.portas}\n Ligado: ${(c1.ligado?'Sim':'Não')}\n Vel: ${c1.vel}\n Cor: ${c1.cor}`)
// console.log("----------------------------\n")
// console.log(`Nome: ${c2.nome}\n Portas: ${c2.portas}\n Ligado: ${(c2.ligado?'Sim':'Não')}\n Vel: ${c2.vel}\n Cor: ${c2.cor}\n Munição: ${c2.municao}\n Blindagem: ${c2.blindagem}\n`)
