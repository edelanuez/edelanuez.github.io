# edelanuez.github.io — cyanotype edition

Plain HTML/CSS/JS. No Jekyll, no build step.

## Edit content
Everything lives in **`content.js`**:
- **Photos:** put the image in `img/photos/`, then add `{ src: "img/photos/name.jpg", caption: "..." }` to `PHOTOS`.
- **Art:** put the image in `img/art/`, then add `{ src: "img/art/name.jpg", title: "...", year: "...", medium: "..." }` to `ART`.
- **Research / bio / misc:** edit the text in the matching block.

Keep images under ~1600px on the long side so the page loads fast.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.

## Files
- `index.html`: page structure
- `style.css`: the look (colors are at the top)
- `main.js`: the print animation and rendering
- `.nojekyll`: tells GitHub Pages to serve the files as-is

## Art pages
- `ceramics.html`, `cyanotype.html`, `origami.html`, `textiles.html`: images in `img/art/<name>/`, listed under `ART.<name>` in `content.js`.
- `encounters.html`: art you came across. Put images in `img/encounters/` and add to `ENCOUNTERS.items` with
  `where: "New York · Gallery Name"` (grouped under nyc galleries) or `where: "Country"`, plus `date: "YYYY-MM-DD"`.
- Cyanotype is split into sections: negatives go in `img/art/cyanotype/negatives/`, prints in `img/art/cyanotype/finished-prints/`,
  each listed under its section in `ART.cyanotype.sections` in `content.js`.
