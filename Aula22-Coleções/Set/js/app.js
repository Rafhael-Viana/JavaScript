const cx = document.getElementById('cx');

//** Sets é uma coleção que contém métodos para adicionar e tratar dados em um array. Permite apenas valores únicos.
//todo: Consultar W3Schools

//* Define um novo set.
let mus = new Set(['mausica1', 'miusica2', 'mousica3'])

//* Adiciona novos elementos a um set
mus.add("meusica4")
mus.add("muulsica5")
mus.add("maosica6")
mus.add("maosica6") //entradas duplicadas não são inseridas.
mus.add("maosica6")

//* Deleta elementos de um set
mus.delete("mausica1")

//* Limpa a coleção
// mus.clear()

console.log(mus)

mus.forEach((el) => {
    cx.innerHTML += `<p>${el}</p>`
}) 

for(let m of mus){
    console.log(m)
}
