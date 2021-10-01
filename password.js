
// Message d'erreur Inscription


const pwdInput = document.querySelector("#passwordIns");
const confirmPwdInput = document.querySelector("#confirmPasswordIns");
const formIns = document.querySelector("#formIns");

document.querySelector("#formIns").addEventListener("submit", e => {
    if (pwdInput.value !== confirmPwdInput.value) {
        e.preventDefault();
        console.log(pwdInput.value);
        alert("Le mot de passe et sa confirmation doivent être identiques !");
    }
});