document.cookie = "user = test"
console.log(document.cookie);

ajoutCookie = () => {
let nomCookie = document.getElementById ("nom_cookie").value
console.log(nomCookie);
let contenuCookie = document.getElementById ("contenu_cookie").value
console.log(contenuCookie);
let newCookie = `${nomCookie} = ${contenuCookie}`
console.log(newCookie);
document.cookie = newCookie
console.log(document.cookie);

}
afficherCookie = () => {
    document.getElementById ("affichage").innerHTML = `${document.cookie}`
    
}