var list = []

function calcular() {
    let start = String(document.querySelector("input#time-start").value)
    let final = String(document.querySelector("input#time-final").value)
    var resultado = document.querySelector("span#res")

    const [horaInicialS, minutoInicialS] = start.split(":")
    const [horaFinalS, minutoFinalS] = final.split(":")
    let horaInicial = Number(horaInicialS)
    let minutoInicial = Number(minutoInicialS)
    let horaFinal = Number(horaFinalS)
    let minutoFinal = Number(minutoFinalS)

    if (horaInicial > horaFinal || horaInicial >= horaFinal && minutoInicial >= minutoFinal) {
        alert("{ERRO] O valor inicial inserido é maior ou igual ao final!")
    } else {
        let resMin = ((horaFinal - horaInicial) * 60 + (minutoFinal - minutoInicial)) / 60

        let hora = Math.floor(resMin)
        let min = Math.ceil((resMin - hora) * 60)

        resultado.innerHTML = `${hora.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
        resultado.style.fontWeight = "bolder"
        resultado.style.fontSize = "1.5em"

        list.push(`${hora}:${min}`)
        console.log(`resultado: ${hora.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`)
    }
}