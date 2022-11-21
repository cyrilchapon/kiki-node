**Exercice 1 :**
> Faire un serveur d'API, qui sert une API REST json exposant des "endpoints" pour manipuler cette donnée.

Un artiste se représente comme ceci :
```json
{
  "id": 1,
  "firstName": "Jean",
  "lastName": "File"
}
```

Une oeuvre se représente comme ceci :
```json
{
  "id": 1,
  "title": "Super oeuvre",
  "description": "C\'est une super oeuvre",
  "artistId": 1
}
```

--------------------
=> Niveau 1

**Liste des endpoints à implémenter**

- `GET /artists` => retourne un array tous les artistes
`GET /artists`
```json
[
  {
    "id": 1,
    "fistName": "Jean",
    "lastName": "File"
  }
]
```
- `POST /artists` => crée un artiste, prend en paramètre body un artiste complet mais sans id; et retourne l'artiste créé (affublé de son id)
`POST /artists`
requête
```json
{
  "firstName": "Jean",
  "lastName": "Cule"
}
```
réponse
```json
{
  "id": 2,
  "firstName": "Jean",
  "lastName": "Cule"
}
```

- `GET /artists/[id]` => retourne l'artiste de l'id donné
`GET /artists/1`
```json
{
  "id": 1,
  "firstName": "Jean",
  "lastName": "File"
}
```

- `DELETE /artists/[id]` => supprime l'artiste de l'id donné (et le retourne)
`DELETE /artists/1`
```json
{
  "id": 1,
  "firstName": "Jean",
  "lastName": "File"
}
```

- `PUT /artists/[id]` => modifie l'artiste de l'id donné. Cette route prend en body un artiste "partiel". Toutes les propriétés que tu envois sont modifiées, tout celles non envoyées ne sont pas modifiées. Il doit aussi être impossible de modifier l' `id`. Et retourne l'artiste modifié

`PUT /artists/1`
Requête
```json
{
  "lastName": "Merde"
}
```

Réponse
```json
{
  "id": 1,
  "firstName": "Jean",
  "lastName": "Merde"
}
```

=> Niveau 2

- `GET /artists/[id]/arts` => retourne la liste de toutes les oeuvres de l'artiste de l'id donné
`GET /artists/1/arts`
```json
[
  {
    "id": 1,
    "title": "Super oeuvre",
    "description": "C\'est une super oeuvre",
    "artistId": 1
  }
]
```

- `POST /artists/[id]/arts` => crée une oeuvre pour l'artiste de l'id donné. Prend en body une oeuvre sans `id` et sans `artistId`, et retourne l'oeuvre créée

`POST /artists/1/arts`
Requête
```json
{
  "title": "Une autre oeuvre",
  "description": "Celle là est encore mieux"
}
```

Réponse
```json
{
  "id": 2,
  "title": "Une autre oeuvre",
  "description": "Celle là est encore mieux",
  "artistId": 1
}
```

- `GET /arts/[id]` => Retourne l'oeuvre avec l'id donné
`GET /arts/1`
```json
{
  "id": 1,
  "title": "Super oeuvre",
  "description": "C\'est une super oeuvre",
  "artistId": 1
}
```

- `DELETE /arts/[id]` => Supprime l'oeuvre avec l'id donné, et la retourne
`DELETE /arts/1`
```json
{
  "id": 1,
  "title": "Super oeuvre",
  "description": "C\'est une super oeuvre",
  "artistId": 1
}
```

- `PUT /arts/[id]` => Modifie l'oeuvre avec l'id donné. Prend en paramètre une oeuvre partielle. Toutes propriétés passées sont modifiées; toutes les autres ne sont pas modifiées. Il doit aussi être impossible de modifier l' `id` et l' `artistId`

`PUT /arts/1`
Requête
```json
{
  "description": "En fait elle est naze"
}
```

Réponse
```json
{
  "id": 1,
  "title": "Super oeuvre",
  "description": "En fait elle est naze",
  "artistId": 1
}
```

--------------

⚠️ Ne fais pas de base de données pour cette première version
Stocke les objets dans 2 arrays en mémoire comme un sauvage :

```
artists = []
arts = []
```