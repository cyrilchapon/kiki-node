# Étape 2 : comprendre l'environnement Node

Javascript est un **langage**. Un simple langage.

## JS, en navigateur

Ce que vous avez l'habitude de taper (les fichiers .js pour HTML), n'est pas juste du Javascript. C'est plus large que ça : vous utilisez fréquemment tout un tas d'objets "globaux", qui font partie de **l'environnement** que vous offre le navigateur.

Par exemple :

```js
console.log('Début du script')

var button = document.querySelector('.un-bouton')
button.addEventListener('click', function() {
  window.location.replace('http://www.google.com')
})
```

Les objets `console`, `document` et `window` font partie de cet environnement offert par le moteur d'exécution du navigateur. `Document` expose même la fameuse "API DOM".

## JS, en NodeJS

Sous NodeJS, le langage c'est le même : Javascript

L'environnement par contre est différent :
1. Lisez intégralement le fichier index.js
2. Puis lancez le
  ```
  node index.js
  ```
3. (en oubliant pas de vous mettre à la racine de step-2)