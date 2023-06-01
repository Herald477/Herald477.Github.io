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
    let antal_mynt = 0
    let tillbaka = 0
    sedlar_mynt_array = []
    
    //500--------------------------------
    tillbaka = inbetalning - priset
    antal_mynt = exChange(tillbaka, 500)
    tillbaka = tillbaka % 500

    let t_pengar = new Pengar(0, 500)
    sedlar_mynt_array.push(t_pengar)

    if (antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    
    console.log(`t_pengar= ${antal_mynt}`)

    //100--------------------------------
    antal_mynt = exChange(tillbaka, 100)
    tillbaka = tillbaka % 100

    t_pengar = new Pengar(0, 100)

    if (antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    console.log(`t_pengar= ${antal_mynt}`)

    //50--------------------------------
    antal_mynt = exChange(tillbaka, 50)
    tillbaka = tillbaka % 50

    t_pengar = new Pengar(0, 50)

    if (antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    console.log(`t_pengar= ${antal_mynt}`)

    //20--------------------------------
    antal_mynt = exChange(tillbaka, 20)
    tillbaka = tillbaka % 20

    t_pengar = new Pengar(0, 20)

    if (antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    console.log(`t_pengar= ${antal_mynt}`)

    //10--------------------------------
    antal_mynt = exChange(tillbaka, 10)
    tillbaka = tillbaka % 10

    t_pengar = new Pengar(0, 10)

    if (antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    console.log(`t_pengar= ${antal_mynt}`)

    //5--------------------------------
    antal_mynt = exChange(tillbaka, 5)
    tillbaka = tillbaka % 5
    
    t_pengar = new Pengar(0, 5)
    
    if (antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    console.log(`t_pengar= ${antal_mynt}`)

    //1--------------------------------
    antal_mynt = exChange(tillbaka, 1)
    tillbaka = tillbaka % 1
    
    t_pengar = new Pengar(0, 1)
    
    if (antal_mynt > 0){
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    console.log(`t_pengar= ${antal_mynt}`)

    return sedlar_mynt_array
}



const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")
const svardiv = document.getElementById("svar")
const kalkulator = document.getElementById("kalk")

kalkulator.addEventListener("click", kalkulatorClick)

function kalkulatorClick(e){
    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)

    if (t_pris > t_inbet){
        alert("Varan kostar mer än vad du betalar!")
    }
    else {
        let exchange_array = getExchangeArray(t_inbet, t_pris)
        svardiv.innerHTML = `<br><hr><h3>Växel tillbaka</h3>
        Femmhundra lappar = ${exchange_array[0].antal}st <br>
        100 lappar = ${exchange_array[1].antal} st <br>
        50 lappar = ${exchange_array[2].antal} st <br>
        20 lappar = ${exchange_array[3].antal} st <br>
        10 kronor = ${exchange_array[4].antal} st <br>
        5 kronor = ${exchange_array[5].antal} st <br>
        1 kronor = ${exchange_array[6].antal} st <br>
        `
    }


}