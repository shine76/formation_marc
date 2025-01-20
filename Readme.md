## methode .Replace()*


* utiliser pour remplacer du text dans un string.
``` html
let texte = "Bonjour le monde";
let nouveau = texte.replace("monde", "JavaScript");
```
```markdown
> "monde" sera emplancé par "JavaScript". affiche// "Bonjour le JavaScript"
```

``` html
let texte = "chat chat chat";
let nouveau = texte.replace(/chat/g, "chien");
```
* le fait d'utiliser le g remplace tout les occurences
et le /i pour ignirer la classe trouver ( petit caractere ou grand)


## methode match()

* affiche toutes les correspondance dans un tableau quand on utilise le (/g) soit la premiere correspondance dans le cas contraire. 