const options = {
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollWheelZoom: false,
    zoomControl: false

}
//create map
const map = L.map('mapid', options).setView([-27.2214039,-49.6449429], 13);

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


//create and add marker
L.marker([-27.2214039,-49.6449429], {icon: icon})
.addTo(map)

function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orfanato-details > img")

    imageContainer.src = image.src

    button.classList.add('active')
}