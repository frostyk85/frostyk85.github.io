# Nans Brucher — site personnel

Site statique bilingue (français / anglais), construit en HTML, CSS et JavaScript et déployable sur GitHub Pages.

## Pages

| Français | English |
|---|---|
| `index.html` — Présentation | `home-en.html` — About |
| `enseignement.html` — Enseignement | `teaching-en.html` — Teaching |
| `ressources-fr.html` — Bibliothèque française | `resources-en.html` — English library |

Chaque page possède un sélecteur de langue qui mène à la page correspondante, et non à une page de ressources générique.

## Design

- Space Grotesk pour les titres et le texte.
- DM Mono pour les repères, métadonnées et éléments d'interface.
- Palette papier / encre, violet profond et orange brûlé.
- Mise en page responsive et navigation mobile.

## Documents actuellement présents

Les fichiers présents dans `documents/` sont les originaux français :

- `Document ressources STEM.pdf`
- `Th. Catégories et physique.pdf`

La bibliothèque anglaise est distincte et indique explicitement lorsqu'une traduction PDF n'est pas encore disponible. Ne pas présenter un original français comme une traduction anglaise.

## Modifier le site

- Styles : `style.css`
- Navigation mobile et recherche : `script.js`
- Documents PDF : `documents/`
- Images : `images/`

Pour publier une traduction anglaise, ajouter le PDF traduit dans `documents/`, puis créer une carte correspondante dans `resources-en.html`.
