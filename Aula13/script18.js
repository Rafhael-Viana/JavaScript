function carregar(){
    var time = new Date()
    var agr = time.getHours()
    var hora = document.querySelector("div#hora")
    var image = document.querySelector("img#foto")
    hora.innerHTML = `Agora são ${agr} horas.` 
    
    if(agr >= 6 && agr < 12){
        image.src = "Imagens/depositphotos_66946055-stock-photo-cup-of-coffee.jpg"
        document.body.style = "background-color: #beige;"
    }else if(agr >= 12 && agr < 18){
        image.src = "Imagens/bela-arquitetura-edificio-cidade-taipei.jpg"
        image.style = "transform: translate(-70%, -50%)"
        document.body.style = "background-color: #cE9e00;"
    }else{
        image.src = "Imagens/noite-na-praia-com-barco-e-luar_104785-846.avif"
        image.style = "transform: translate(-60%, -52%)"
        document.body.style = "background-color: #001027;"
    }
}