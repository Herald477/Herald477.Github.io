class Pengar {
    constructor(antal, pengsort){
        this.antal = antal
        this.pengsort = pengsort
    }
}
/**
 * exChange
 * in: belop som ska växlas, valuta på sedel
 * out: antal sedlar eller mynt
 */
function exChange(belop, sedel){
    return Math.floor(belop / sedel)
}
/**
 * getExchangeArray()
 * in: inbetalt beloop
 * out: array innehåller antal mynt i varje valuta
 */
function getExchangeArray(inbetalning, priset){
    let antalmynt = 0
    let tillbaka = 0
    sedlar_mynt_array = []
    
    //500--------------------------------
    tillbaka = inbetalning - priset
    antalmynt = exChange(tillbaka, 500)
    console.log(`antal= ${antalmynt}`)
}

const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")
const svardiv = document.getElementById("svar")
const kalkulator = document.getElementById("kalk")

kalkulator.addEventListener("click", kalkulatorClick)

function kalkulatorClick(){
    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)
    getExchangeArray(t_inbet, t_pris)
}