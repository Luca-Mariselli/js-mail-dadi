let adminMailingList = [
    `ciaociao@gmail.com`,
    `ciao@gmail.com`,
    `ciao@libero.com`,
    `ciao@hotmail.com`,
    `ciao@ciao.com`
]

const userEmail = prompt(`inserisci email`)

let emailFound = false

for (let i = 0; i<adminMailingList.length; i++) {
    if (adminMailingList[i] == userEmail){
        emailFound = true;
    }
}

if(emailFound == true){
    document.getElementById(`email`).innerHTML = `La tua mail e' in elenco`;
    console.log(`La tua mail e' in elenco`)
} else{
    document.getElementById(`email`).innerHTML = `La tua mail non e' in elenco`;
    console.log(`La tua mail non e' in elenco`)

}