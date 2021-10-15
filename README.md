Wenn ihr bestimmte Props auf mehreren Seiten eurer Next App benötigt, geht ihr folgendermaßen vor:
 
1. `pokemonData.js` im `context` Ordner anlegen - hier findet nun auch der Fetch von der API statt. Schaut in eurer `getStaticProps` Funktion nach (hier findet aktuell euer Fetch statt), ob ihr in der `pokemonData.js` etwas anpassen müsst. Wenn der Fetch in der `pokemonData.js` mit der in der `getStaticProps` übereinstimmt, könnt ihr `getStaticProps` löschen.

2. In der `_app.js` den `PokemonProvider` importieren und in den `return` einbinden.

3. Auf allen Seiten, in denen ihr auf die gefetchen Daten zugreifen müsst, über `usePokemon` auf euren Array mit den Pokemon zugreifen.

Viel Erfolg 😺


