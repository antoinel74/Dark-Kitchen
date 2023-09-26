
/* 
    Créer une nouvelle carte Leaflet.
        → 'map' est l'ID de l'élément HTML où la carte sera affichée.
        → .setView([51.505, -0.09], 13) définit la vue initiale de la carte. Ici, la carte est centrée sur les coordonnées [51.505, -0.09] avec un niveau de zoom initial de 13.
*/
let map = L.map('map').setView([51.505, -0.09], 15);


/*
    Ajouter une couche de tuiles (tiles) OpenStreetMap à la carte.
        → 'https://tile.openstreetmap.org/{z}/{x}/{y}.png' est l'URL des tuiles OpenStreetMap que Leaflet utilisera pour afficher la carte.
        → maxZoom: 19 définit le niveau de zoom maximal de la carte à 19.
        → attribution est une attribution qui doit apparaître sur la carte pour indiquer que les données sont fournies par OpenStreetMap.
*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// ↓ Pour une couleur "light_all" de la tuile
// L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"', {}).addTo(map);


/*
    Créer un marqueur sur la carte.
        → [51.50853, -0.12574] sont les coordonnées du marqueur (latitude et longitude).
        → .addTo(map) ajoute ce marqueur à la carte créée précédemment (map).
*/
// let marker = L.marker([51.512, -0.078]).addTo(map);
let marker = L.marker([51.504, -0.09]).addTo(map);


/* 
    Fonction qui prend un seul argument, e, qui représente l'événement de clic sur la carte. L'argument e est un objet qui contient des informations sur le clic, notamment les coordonnées (latitude et longitude) du point où l'utilisateur a cliqué.
 */
let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);