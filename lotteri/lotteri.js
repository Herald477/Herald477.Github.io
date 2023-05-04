const svar_div = document.getElementById("svar_div")
const antal_vinster=document.getElementById("input_vinster")
const vinster = [
"Goosedjur",
"Monster",
"Lattitud65",
"Hellcat",
"Lambo",
"Snus",
"Snapps",
"Putin",
"Grotto",
"Gymkort NPC",
"Vin",
"Kommunist manufest",
"Roblox"
]
function slumpaClick() {
    let vinst = `<h3>Dina vinster: </h3>`
    let antalv = antal_vinster.value
    let int_antalv = parseInt(antalv)
    
    for (i=0; i<int_antalv; i++){
        let slumptal = Math.floor(Math.random() * 12)
        let t_vinst = vinster[slumptal]
        vinst += `<p>${t_vinst}</p>`
    }
    svar_div.innerHTML = vinst
}