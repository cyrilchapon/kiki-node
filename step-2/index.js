// L'environnement NodeJS
// (et ses objets globaux)


// Biensûr la console est bien là,
// comme dans un navigateur
console.log('## console ?')
console.log(console)
console.log('--------------------------------')



// Par contre, il n'y a pas de "document"
console.log('## document ?')
// console.log(document) // <== ÇA PLANTE
console.log('nope')
console.log('--------------------------------')

// Ni même de "fenêtre", en fait
console.log('## window ?')
// console.log(window) // <== ÇA PLANTE
console.log('nope')
console.log('--------------------------------')



// À la place, on a "process",
// c'est un objet qui représente
// le processus en cours d'exécution
// ( Logique non ? )
console.log('## process ?')
console.log(`${process.platform} ${process.arch}`)
console.log(`${process.release.name} ${process.version}`)
console.log('--------------------------------')

// Et on a aussi d'autres trucs,
// comme le chemin du fichier
// en cours d'exécution
console.log('## __filename ?')
console.log(__filename)
console.log('--------------------------------')

