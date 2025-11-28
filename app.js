const express = require('express');
const path = require('path');
const crypto = require('crypto');
const config = require("./config.json");


const app = express();
const PORT = config.PORT;

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Génération d'une clé cryptographique sécurisée
function generateSecureKey() {
  return crypto.randomBytes(32).toString('hex'); // Génère une clé hexadécimale de 64 caractères (256 bits)
}

// Route pour la page principale
app.get('/', (req, res) => {
  res.render('index');
});

// Route pour générer une clé et la renvoyer au client
app.get('/generate-key', (req, res) => {
  const secureKey = generateSecureKey(); // Générer une clé pour chaque demande
  res.json({ secureKey });
});

// Configuration de EJS comme moteur de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
