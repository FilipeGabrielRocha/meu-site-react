const calcIdade = () => {
    const idade = document.querySelector("#idade")
    const data = new Date();
    const anoAtual = data.getFullYear()
    let mesAtual = (data.getMonth() + 1)
    let diaAtual = data.getDate()
    let anoNasci = Number(2000)

    if (mesAtual === 11 && diaAtual >= 14) {
        idade.innerHTML = Number(anoAtual) - Number(anoNasci)
    } else {
        idade.innerHTML = (Number(anoAtual) - Number(anoNasci) - 1)
    }
}

export { calcIdade }