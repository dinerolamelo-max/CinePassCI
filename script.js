// Fonction déclenchée lors du clic sur le bouton "Louer / Acheter"
function acheterFilm(titreFilm) {
    let confirmation = confirm("Voulez-vous acheter ou louer le film : " + titreFilm + " pour 1000 FCFA ?");
    
    if (confirmation) {
        alert("Redirection vers le paiement Mobile Money / Carte...");
        // Vous pourrez remplacer cette alerte par le lien de votre passerelle de paiement plus tard
    }
}
