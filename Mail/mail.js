let legitMails = [
    `ciaociao@gmail.com`,
    `ciao@gmail.com`,
    `ciao@libero.com`,
    `ciao@hotmail.com`,
    `ciao@ciao.com`
]

let userMail = prompt(`Inserisci la tua mail`).value
console.log(userMail)
if(userMail = legitMails){
    document.getElementById(`verificata`).innerHTML = `Accesso eseguito`
} else{
    document.getElementById(`verificata`).innerHTML = `Mail errata`
    alert(`Mail errata, ricaricare la pagina ed inserire la mail corretta`)
}
