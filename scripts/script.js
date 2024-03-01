var list = []
var media = 0

var btnMedia = document.querySelector("button#btn-media")
var resulMedia = document.createElement("span")
resulMedia.className = "span-media"
resulMedia.id = "res-media"
resulMedia.style.display = "none"
btnMedia.appendChild(resulMedia)

var button = document.querySelector("button#b1")
var resultado = document.createElement("span")
resultado.className = "span-button"
resultado.Id = "res"
resultado.style.display = "none"
button.appendChild(resultado)

function calcular() {
    let start = String(document.querySelector("input#time-start").value)
    let final = String(document.querySelector("input#time-final").value)
    let spanMedia = document.querySelector("span#media")

    const [horaInicialS, minutoInicialS] = start.split(":")
    const [horaFinalS, minutoFinalS] = final.split(":")
    let horaInicial = Number(horaInicialS)
    let minutoInicial = Number(minutoInicialS)
    let horaFinal = Number(horaFinalS)
    let minutoFinal = Number(minutoFinalS)

    button.style.gridTemplateColumns = "1fr 1fr"

    if (horaInicial > horaFinal || horaInicial >= horaFinal && minutoInicial >= minutoFinal) {
        var resMin = (((24 - horaInicial) * 60 + (minutoFinal - minutoInicial)) / 60) + horaFinal
    } else {
        var resMin = ((horaFinal - horaInicial) * 60 + (minutoFinal - minutoInicial)) / 60
    }
    var hora = Math.floor(resMin)
    var min = Math.floor((resMin - hora) * 60)

    resultado.style.display = "block"
    resultado.innerHTML = `${hora.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
    resultado.style.fontWeight = "bolder"
    resultado.style.fontSize = "1.5em"

    list.push(resMin)
    if (list.length >= 2) {
        btnMedia.style.display = "grid"
    }

    console.log(`resultado: ${hora.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`)

    btnMedia.addEventListener("click", function() {
        btnMedia.style.gridTemplateColumns = "1fr 1fr"
        resulMedia.style.display = "block"
        resulMedia.style.fontWeight = "bolder"
        resulMedia.style.fontSize = "1.5em"
        spanMedia.innerHTML = "MÉDIA"

        media = list.reduce((a, b) => a + b, 0) / list.length
        let horaMedia = Math.floor(media)
        let minMedia = Math.floor((media - horaMedia) * 60)
        resulMedia.innerHTML = `${horaMedia.toString().padStart(2, "0")}:${minMedia.toString().padStart(2, "0")}`
        console.log(`Média: ${horaMedia}:${minMedia}`)
    })
}

function calcData() {
    let dataInicial = new Date(document.querySelector("input#data-start").value)
    let dataFinal = new Date(document.querySelector("input#data-final").value)
    let resultado = document.querySelector("input#res-dias")
    let div = document.querySelector("div.res-data")
    let resultMes = document.querySelector("input#res-mes")

    let difMs = dataFinal.getTime() - dataInicial.getTime();
    let difDia = difMs / (1000 * 60 * 60 * 24)
    let difMes = Math.floor(difDia / 30)
    let difMesDia = difDia % 30

    div.style.display = "flex"
    resultado.value = `${difDia} dias`
    resultMes.value = `${difMes} meses e ${difMesDia} dias`

    console.log(`Diferença: ${difDia} dias`)
    console.log(`${difMes} meses e ${difMesDia} dias`)
}