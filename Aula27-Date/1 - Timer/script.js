const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')

const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? '0' + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? '0' + mes : mes

div_data.innerHTML = dia + "/" + mes + "/" + data.getFullYear()

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? '0' + hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? '0' + minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? '0' + segundo : segundo
    const full_hour = `${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML = full_hour
}

setInterval(() => relogio(), 1000)

// console.log(Date.now()) //Timestamp
// getDate() = Dia do mês
// getDay() = Dia da Semana (número)
// getFu11Year() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milissegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milissegundos desde 1 de Janeiro de 1970, UTC
// Date. now() = Timestamp (milissegundos desde 1 de Janeiro de 1970, UTC
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFu11Year() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds() = Define Segundos
// setMilliseconds () = Define milissegundos
// toDateString() = Retorna somente a data