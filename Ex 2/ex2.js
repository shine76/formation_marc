let panier = [];

function selection(nom, prix) {
    panier.push({ nom, prix });
}

function afficherPanier() {
    console.log("contenu du panier ");
    console.log(panier);
}

function supprimerProduit(nom) {
    console.log(`produit ${nom} supprimer`);
    let index = panier.findIndex(produit => produit.nom === nom);
    panier.splice(index, 1);
}

function calculerTotal() {
    let total = 0;
    for (let produit of panier) {
        total += produit.prix;
    }
    return total;
}

selection("banane", 200);
selection("orange", 400);
selection("mangue", 500);
afficherPanier();

supprimerProduit("mangue");
supprimerProduit("banane");
afficherPanier();
console.log("Total du panier : " + calculerTotal() + " $");