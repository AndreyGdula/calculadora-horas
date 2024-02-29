var list = []
var media = 0

function calcular() {
    let start = String(document.querySelector("input#time-start").value)
    let final = String(document.querySelector("input#time-final").value)
    let button = document.querySelector("button#b1")
    let btnMedia = document.querySelector("button#btn-media")

    let resultado = document.createElement("span")
    button.style.gridTemplateColumns = "1fr 1fr"
    resultado.className = "span-button"
    resultado.Id = "res"
    button.appendChild(resultado)

    const [horaInicialS, minutoInicialS] = start.split(":")
    const [horaFinalS, minutoFinalS] = final.split(":")
    let horaInicial = Number(horaInicialS)
    let minutoInicial = Number(minutoInicialS)
    let horaFinal = Number(horaFinalS)
    let minutoFinal = Number(minutoFinalS)

    if (horaInicial > horaFinal || horaInicial >= horaFinal && minutoInicial >= minutoFinal) {
        alert("{ERRO] O valor inicial inserido é maior ou igual ao final!")
    } else {
        var resMin = ((horaFinal - horaInicial) * 60 + (minutoFinal - minutoInicial)) / 60

        var hora = Math.floor(resMin)
        var min = Math.ceil((resMin - hora) * 60)

        resultado.innerHTML = `${hora.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
        resultado.style.fontWeight = "bolder"
        resultado.style.fontSize = "1.5em"

        btnMedia.style.display = "block"

        console.log(`resultado: ${hora.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`)

        btnMedia.addEventListener("click", function() {
            list.push(resMin)
            media = list.reduce((a, b) => a + b, 0) / list.length
            console.log(`Média: ${media}`)
        })
    }
}