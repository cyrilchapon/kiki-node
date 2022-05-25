# Étape 1 : comprendre Node

NodeJS est un **moteur d'exécution Javascript**.

Pour faire simple, c'est un environnement qui
permet d'exécuter du Javascript localement
(sur un ordinateur, un serveur...)
dans une console.

Un peu comme Windows comprend les scripts en `.bat`
ou Linux les scripts en `.sh`,
et bien Node peut comprendre les scripts en `.js`

----------------

## C'est quoi Node, physiquement parlant ?

C'est juste un programme. Écrit en c++ (mais on s'en fout),
exécutable en console.

Il faut donc l'installer (le plus simple c'est avec [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)).


À la suite de quoi on peut ouvrir une console
et taper par exemple

```sh
node -v
```

Cette commande affichera la version de Node installée.

## Lancer un script .js avec Node

Le plus intéressant; c'est de lancer directement un script.

C'est exactement le propos de cet exercice.

1. Installez Node.js
2. Vérifiez sa bonne installation avec
  ```sh
  node -v
  ```
3. Naviguez dans le répertoire step-1
4. Lancez le script index.js
  ```
  node index.js
  ```

## Que s'est-il passé ?

Habituellement, votre script Javascript
est exécuté par un navigateur web.

Ce n'est pas magique, et c'est même assez simple :
- Le browser parcourt le fichier html
- Il rencontre une balise `<script src="http://un-script.js"></script>`
- Il télécharge `http://un-script.js`
- Il exécute `http://un-script.js`

Bon bah là avec NodeJS, y'a pas de navigateur.
Y'a NodeJS, et c'est tout.
C'est lui qui exécute, localement, sur votre machine.

En d'autres termes, `node index.js` lance le programme Node, qui exécute *index.js*, c'est aussi simple que ça.
