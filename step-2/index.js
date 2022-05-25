// L'environnement NodeJS
// (et ses objets globaux)


// Biensûr la console est bien là,
// comme dans un navigateur
console.log('## console ?')
console.log(console)
console.log('--------------------------------')



// Par contre, il n'y a pas de "document" HTML
console.log('## document ?')
if (typeof document !== 'undefined')
  console.log(document)
else
  console.log('vide')
console.log('--------------------------------')

// Ni même de "fenêtre", en fait
console.log('## window ?')
if (typeof window !== 'undefined')
  console.log(window)
else
  console.log('vide')
console.log('--------------------------------')



// À la place, on a "process" : c'est
// un objet qui représente le processus.
// ( Logique non ? )
console.log('## process ?')
console.log(`${process.platform} ${process.arch}`)
console.log(`${process.release.name} ${process.version}`)
console.log('--------------------------------')

// Et on a aussi d'autres trucs,
// comme le chemin du fichier
// en cours d'exécution
console.log('## __filename ?')
console.log(__filename ?? 'vide')
console.log('--------------------------------')

