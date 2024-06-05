function calculerAge() {
  const anneeNaissance = Number(naissance.value);

  const age = new Date().getFullYear() - anneeNaissance;

  console.log("votre AGES EST ", age);
  const resultat = document.getElementById('resultat');
  resultat.innerHTML = `votre age est ${age}`;

  const resultatArea = document.querySelector('fieldset');
  resultatArea.hidden = false

  // la commande pour le lancer dans un emulateur android : 
  //cordova emulate android
}
