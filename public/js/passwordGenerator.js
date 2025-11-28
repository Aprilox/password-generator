// public/js/passwordGenerator.js

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('passwordForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêcher la soumission du formulaire classique
      generatePassword();    // Appeler la fonction de génération du mot de passe
    });
  
    // Gestion du bouton de fermeture du popup
    document.getElementById('popupCloseButton').addEventListener('click', () => {
      document.getElementById('popupContainer').style.display = 'none';
    });
  });
  
  function showPopup(message) {
    const popupContainer = document.getElementById('popupContainer');
    const popupText = document.getElementById('popupText');
    popupText.textContent = message;
    popupContainer.style.display = 'flex';
  }
  
  function generatePassword() {
    const lengthInput = document.getElementById('length');
    const length = parseInt(lengthInput.value, 10);
    
    // Limiter la longueur du mot de passe à un maximum de 4096 caractères
    if (isNaN(length) || length <= 0) {
      showPopup("Veuillez entrer une longueur valide pour le mot de passe.");
      return;
    }
    if (length > 4096) {
      showPopup("La longueur du mot de passe ne peut pas dépasser 4096 caractères.");
      lengthInput.value = 4096; // Réinitialiser la valeur à 4096 si elle dépasse la limite
      return;
    }
  
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
  
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    let charSet = "";
  
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;
  
    if (charSet === "") {
      showPopup("Veuillez sélectionner au moins une option de caractère.");
      return;
    }
  
    // Générer le mot de passe aléatoire
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
  
    document.getElementById('passwordResult').innerText = password;
  }
  
  function copyPassword() {
    const password = document.getElementById('passwordResult').innerText;
    
    if (!password) {
      showPopup("Aucun mot de passe à copier !");
      return;
    }
  
    navigator.clipboard.writeText(password).then(() => {
      showPopup("Mot de passe copié dans le presse-papiers !");
    }).catch(err => {
      console.error("Erreur lors de la copie du mot de passe : ", err);
    });
  }  