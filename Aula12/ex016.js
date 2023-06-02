var agr = new Date()
var hora = agr.getHours()

if(hora >= 6 && hora < 13) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Bom Dia!')
}else if(hora >= 13 && hora < 18){
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa Tarde!')
}else if(hora >= 18 && hora <= 24 || hora < 6){
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa Noite!')
}else{
    console.log('Digite uma hora válida')
}
