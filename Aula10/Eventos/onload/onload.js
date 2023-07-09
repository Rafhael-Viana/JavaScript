//o objeto window carrega depois do script
//alguns erros podem ocorrer dependendo do caso

/*window.onload = () => {
    console.log("Carregou")
    
    var title2 = document.querySelector("h1")
}

console.log("Carregou o JS");

title2.innerHTML = "Teste"*/


//para evitar isso podemos colocar todo o código dentro do evento onload
window.onload = () => {
    console.log("Carregou")
    
    var title2 = document.querySelector("h1")

    title2.innerHTML = "Teste"
}

console.log("Carregou o JS");
