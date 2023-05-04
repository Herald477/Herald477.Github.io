const slumptal = Math.floor(Math.random() * 9) + 1
let antalgissningar = 0
console.log("slumptalet:" + slumptal)
function gissaTal(){

    let textfelt_gissa = document.getElementById("gissa").value
    let gissa_int = Number(textfelt_gissa)
    let vinn = false
    let svar = document.getElementById("svar")

    if (antalgissningar < 3){
        if (slumptal === gissa_int) {
            console.log('rätt antalgissningar= ${antalgissningar}')
            vinn = true
            svar.innerHTML= "DU VANN"
            antalgissningar = 3
        }
        else {
            console.log('FEL antalgissningar= ${antalgissningar}')
            if (antalgissningar === 2)
                svar.innerHTML='FÖRLORARE'
            else 
                svar.innerHTML='${textfelt_gissa} är fel Gissning nr ${antalgissningar+1} av 3'
            document.getElementById("gissa").value=""
            document.getElementById("gissa").focus()
        }
        antalgissningar++
    }
    else {
        svar.innerHTML='FÖRLORARE'
    }
       
    
}