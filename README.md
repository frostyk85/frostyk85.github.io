# Site personnel – ressources scientifiques

Site statique (HTML, CSS, JavaScript) sans dépendance, prêt pour GitHub Pages.
Couleur principale : `#5C5D8D` (variable `--accent` en haut de `style.css`).

## Structure

```
index.html        Page de présentation
ressources.html   Page des documents PDF et autres ressources
style.css         Styles (couleurs, mise en page)
script.js         Menu mobile et recherche
documents/        Tes fichiers PDF (à créer)
images/           Ta photo (à créer)
```

## Personnaliser

1. Remplace « Prénom Nom », la fonction, l'institution et le courriel dans `index.html` et `ressources.html`.
2. Ajoute ta photo dans `images/photo.jpg` et remplace le bloc `<div class="portrait">` par
   `<img src="images/photo.jpg" alt="Portrait">`.
3. Dépose tes PDF dans `documents/` et adapte les liens des cartes dans `ressources.html`.
   Pour ajouter une ressource, copie un bloc `<a class="card">…</a>`.
4. Pour changer la couleur, modifie `--accent` (et `--accent-dark`) dans `style.css`.
