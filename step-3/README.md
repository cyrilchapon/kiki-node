# Étape 3 : comprendre npm, package.json, node_modules et require

Un bon moteur d'exécution comme NodeJS vient forcément avec un mécanisme pour installer et utiliser des dépendances.

En NodeJS, ce mécanisme est divisé en 4 parties très simples :

## 1. npm

`npm` veut dire Node Package Manager et porte bien son nom. C'est un outil en ligne de commande qui permet de gérer les dépendances d'un projet NodeJS (comme Composer pour PHP ou Maven pour Java).

Comment l'utiliser ? J'ai menti tout à l'heure quand j'ai dis qu'en installant NodeJS vous installiez simplement la commande `node`.

En fait, vous avez aussi installé une autre commande : `npm`.Essayez là dans votre console !
```sh
npm -v
```

## 2. package.json

Vous avez peut-être déjà remarqué : dans cet exercice on a un nouveau fichier _**package.json**_

C'est le fichier qui permet de décrire les dépendances d'un projet NodeJS et leurs version exactes.

Et ça tombe bien, `npm` est capable de lire les fichiers `package.json` !

Installons donc les dépendances de cet exercice. Dans votre console, à la racine de *step-3*, tapez
```
npm install
```

## 3. node_modules

En plus de la tartine de logs console de `npm install`, vous avez du remarquer que la commande a eut un autre effet : créer le dossier `node_modules` dans votre projet.

Félicitation, c'est le dossier dans lequel vous venez d'installer les dépendances du projet !

ℹ️ Il s'agit d'un dossier spécial auto-géré par npm, l'idée n'est pas d'aller jardinner dedans, blablabla. Mais bon, vous pouvez quand-même cliquer dessus il ne mord pas : il contient simplement des dossiers (un pour chaque dépendance) avec des fichiers Javascript dedans.

## 4. require

Maintenant, vous avez le droit d'utiliser les dépendances du projet dans votre propre Javascript.

En NodeJS, c'est très simple. Vous vous souvenez les "objets globaux de l'environnement" que j'évoquais en Step 2 ? Et bien je vous en ai caché un : `require()`

`require()`, c'est une fonction globale spéciale en NodeJS, qui permet d'inclure un autre fichier Javascript.

Elle propose deux modes :
- "relatif" : inclure un de vos fichiers locaux (on verra ça plus tard)
- "absolu" : inclure une dépendance

Pour utiliser le mode "absolu"; il faut simplement mettre le nom de la dépendance comme ceci :

```js
const maDependance = require('ma-dependance')
```

NodeJS va automatiquement parcourir le dossier node_modules à la recherche de `ma-dependance`, et l'inclure dans la variable `maDependance`.

----------------

Pour illustrer ça, j'ai trouvé une dépendance amusante qui permet de colorer la console : [chalk](https://www.npmjs.com/package/chalk).

Avec les commandes précédentes, vous l'avez installé dans le projet (je l'avais déjà listé dans *package.json*).

Testez donc !
1. Lisez le fichier *index.js*
2. Lisez le fichier *package.json*
3. Assurez-vous d'avoir lancé
  ```
  npm install
  ```
3. Ouvrez *node_modules* et constatez la présence du dossier `chalk`
4. Lancez le script
  ```
  node index.js
  ```
5. (et pourquoi pas, lisez un peu la [doc de chalk](https://www.npmjs.com/package/chalk))

--------------------

ℹ️ Pourquoi y-a-t'il dans *node_modules* d'autres dépendances non listées dans mon *package.json* ?
=> chalk a ses propres dépendances, qui ont leur propres dépendances... etc.
Pour comprendre,
```sh
npm list --depth=5
```

ℹ️ Pourquoi *package.json* a-t'il un petit frère *package-lock.json* ?
=> C'est une (très) longue histoire. Une autre fois.

ℹ️ Où trouver des dépendances Open Source NodeJS ?
=> Sur [npmjs.com](https://www.npmjs.com/)
