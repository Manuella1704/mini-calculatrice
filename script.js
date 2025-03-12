//ecran ou va s'afficher les calculs
const ecran=document.querySelector(".resultat");

//boutons de la calculatrice
const boutons=document.querySelectorAll(".calculs button");

//affichage du texte sur resultat
boutons.forEach(bouton => {
    bouton.addEventListener("click",() =>{
        let valeur = bouton.textContent;
        //exclure le cas de egal et AC
        if (valeur != "=" && valeur != "AC") {
            ecran.textContent += valeur;
        }
        if (valeur === "=") {
            try {
                ecran.textContent=eval(ecran.textContent);
            } catch (error) {
                ecran.textContent="Erreur";
            }
        }
        if (valeur === "AC") {
            ecran.textContent="";
        }
        if (valeur==="%") {
            ecran.textContent=ecran.textContent.slice(0, -1) + "/100";
        }
    });
});


