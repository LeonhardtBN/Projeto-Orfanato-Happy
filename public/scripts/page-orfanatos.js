//create map
const map = L.map('mapid').setView([-27.2214039,-49.6449429], 13);

//create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2] 
})

const popup = L.popup({
    closebutton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orfanato.html?id=1" class="choose-orfanatos"> <img src="./public/images/arrow-white.svg" > </a>')

//create and add marker
L.marker([-27.2214039,-49.6449429], {icon: icon})
.addTo(map)
.bindPopup(popup)