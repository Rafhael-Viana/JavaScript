var button = document.querySelector('input#button')
button.addEventListener('click', verify)

function verify() {
    var date = new Date()
    var ano = Number(date.getFullYear())
    var res = document.getElementById('res')
    var n = document.querySelector('input#nascimento')
    var idade = ano - Number(n.value)

    if(n.value <= 0 || idade > 140 || n.value.lenght == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var genero = ''
        var sexo = document.getElementsByName('sexo')
        var cont = document.createElement('cont')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 6){
                //Bebê
                img.setAttribute('src', "foto-bebe-h.png")
            }else if(idade < 16){
                //Criança
                img.setAttribute('src', "foto-crianca-h.png")
            }else if(idade < 30){
                //Jovem
                img.setAttribute('src', "foto-jovem-h.png")
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', "foto-adulto-h.png")
            }else{
                //Idoso
                img.setAttribute('src', "foto-idoso-h.png")
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade < 6){
                //Bebê
                img.setAttribute('src', "foto-bebe-m.png")
            }else if(idade < 16){
                //Criança
                img.setAttribute('src', "foto-crianca-m.png")
            }else if(idade < 30){
                //Jovem
                img.setAttribute('src', "foto-jovem-m.png")
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', "foto-adulto-m.png")
            }else{
                //Idoso
                img.setAttribute('src', "foto-idoso-m.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img).style = 'margin: auto; margin-top: 10px; display: block; padding: 5;'
        
    }

}