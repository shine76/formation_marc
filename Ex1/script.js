function afficheInfos() {
   // Récupérer les valeurs des champs
   const nom = document.getElementById("nom").value.trim();
   const prenom = document.getElementById("prenom").value.trim();

   // Récupérer le sexe
   const sexe = document.querySelector('input[name="groupe"]:checked');
   const sexeText = sexe ? sexe.value === "option1" ? "Féminin" : "Masculin" : "Non spécifié";
   // Vérifier si la personne est sans emploi
   const sansEmploi = document.querySelector('input[type="checkbox"]').checked ? "sans emploi" : "employé(e)";
   // Récupérer le lieu de naissance
   const lieuNaissance = document.querySelector('input[placeholder="Lieu de naissance"]')?.value || "Non précisé";

   // Récupérer la date de naissance
   const dateDeNaissance = document.querySelector("#naissance").value;
   if (nom === "" || prenom === "" || !sexe || dateDeNaissance === "") {
      alert("Veuillez remplir tous les champs obligatoires");
      // Construire la phrase
      return;
   } else {
      const phrase = `${prenom} ${nom} de sexe ${sexeText} né(e) le ${dateDeNaissance} à ${lieuNaissance} est ${sansEmploi}`;
      console.log(phrase)
      // Afficher la phrase dans la zone de texte
      document.getElementById("zoneText").value = phrase;
   }





};
