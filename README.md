# Générateur de Mots de Passe Complexes

Une application web sécurisée et conviviale pour générer des mots de passe complexes. Construite avec Node.js, Express et EJS, cette application permet aux utilisateurs de personnaliser la longueur du mot de passe et les types de caractères (majuscules, minuscules, chiffres, symboles) et de copier le mot de passe généré dans le presse-papiers.

## Fonctionnalités

- Génération de mots de passe aléatoires avec des options personnalisables :
  - Longueur du mot de passe (de 1 à 4096 caractères)
  - Inclure/exclure les lettres majuscules, minuscules, chiffres et symboles
- Interface utilisateur conviviale avec un design responsive
- Fonctionnalité de copie dans le presse-papiers pour les mots de passe générés
- Alertes popup pour les retours utilisateurs (par exemple, saisie invalide ou copie réussie)
- Point de terminaison pour la génération de clés sécurisées utilisant le module `crypto` de Node.js
- Construit avec Express.js pour la logique côté serveur et EJS pour les templates
- Stylisé avec du CSS moderne pour une apparence propre et professionnelle

## Technologies Utilisées

- **Backend** : Node.js, Express.js
- **Frontend** : EJS, HTML, CSS, JavaScript
- **Dépendances** :
  - `express` : Framework web pour Node.js
  - `ejs` : Moteur de templates pour HTML dynamique
  - `crypto` : Module intégré de Node.js pour la génération de clés sécurisées
- **Configuration** : Fichier JSON pour les paramètres du serveur (par exemple, le port)

## Installation

1. **Cloner le dépôt** :
```bash
git clone https://github.com/Aprilox/password-generator.git
cd password-generator
```

2. **Installer les dépendances** :
```bash
npm install
```

3. **Lancer l'application** :
```bash
node app.js
```

4. **Accéder à l'application** :
   Ouvrez votre navigateur et allez à `http://localhost:8082`.

## Structure du Projet

```
├── config.json              # Fichier de configuration (par exemple, numéro de port)
├── app.js                   # Fichier principal du serveur (configuration Express, routes)
├── public/
│   ├── css/
│   │   └── styles.css       # Styles CSS pour le frontend
│   ├── js/
│   │   └── passwordGenerator.js # JavaScript côté client pour la génération de mots de passe
├── views/
│   └── index.ejs            # Template EJS pour la page principale
├── package.json             # Métadonnées du projet et dépendances
└── README.md                # Documentation du projet
```

## Utilisation

1. Ouvrez l'application dans votre navigateur.
2. Configurez les paramètres du mot de passe :
   - Définissez la longueur souhaitée du mot de passe (par défaut : 12).
   - Cochez/décochez les options pour les majuscules, minuscules, chiffres et symboles.
3. Cliquez sur **Générer le Mot de Passe** pour créer un mot de passe.
4. Cliquez sur **Copier le Mot de Passe** pour copier le mot de passe généré dans le presse-papiers.
5. Utilisez les alertes popup pour recevoir des retours sur les actions (par exemple, saisie invalide ou copie réussie).

## Points de Terminaison API

- **GET `/`** : Affiche la page principale avec l'interface du générateur de mots de passe.
- **GET `/generate-key`** : Génère et retourne une clé sécurisée de 256 bits au format hexadécimal (64 caractères).

Exemple de réponse pour `/generate-key` :
```json
{
  "secureKey": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6"
}
```

## Contribution

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request pour toute amélioration ou correction de bug.

## Licence

Ce projet est sous licence ISC. Voir le fichier `package.json` pour plus de détails.
