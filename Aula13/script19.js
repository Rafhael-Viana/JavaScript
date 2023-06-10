var button = document.getElementById('button')
button.addEventListener('click', verify)

function verify() {
    var agr = new Date()
    var ano = Number(agr.getFullYear())
    var res = document.querySelector('div#res')
    var n = document.querySelector('input#nascimento')
    var idade = ano - Number(n.value)
    
    if(n.value.length == 0 || n.value > ano || n.value < (ano - 130)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        img.style.display = 'none'
    }else{
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var cont = document.createElement('div#cont')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade = 0 && idade <= 5){
                img.setAttribute('src', 'Imagens/shutterstock_390441454.jpg')
            }else if(idade > 5 && idade <= 15){
                img.setAttribute('src', 'Imagens/unicef-respeitar-e-preciso.jpg')
            }else if(idade > 15 && idade <= 30){
                img.setAttribute('src', 'Imagens/istockphoto-1212702108-612x612.jpg')
            }else if(idade > 30 && idade <= 60){
                img.setAttribute('src', 'Imagens/homem-adulto-atraente-cruzando-os-bracos-e-sorrindo_176420-18744.avif')
            }else if(idade > 60){
                img.setAttribute('src', 'Imagens/shutterstock_390441454.jpg')
            }
         }//else if(sexo[1].checked){
        //     genero = 'Mulher'
        //     if(idade >= 0 && idade < 5){

        //     }else if(idade <= 15){

        //     }else if(idade < 30){

        //     }else if(idade < 60){

        //     }else if(idade >= 60){

        //     }
        // }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}