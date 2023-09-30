const olhos = [...document.getElementsByClassName("olho")]

let posX = 0
let posY = 0

window.addEventListener("mousemove", (evt) => {
    posX = evt.clientX
    posY = evt.clientY

    const rot = Math.atan2(posX, posY) * 180 / Math.PI

    olhos.forEach((o) => {
        o.style.transform = `rotate(${rot}deg)`
    })
})