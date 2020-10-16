//create map
const map = L.map('mapid').setView([-27.2214039,-49.6449429], 15);

//create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove last marker
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

function addPhotoField(){
    //pegar o container de fotos
    const container = document.querySelector('#images')
    //pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //Limpar o campo antes de adicionar ao container de Imagens
    input.value = ""
    //adicionar o clone ao container de imagem
    container.appendChild(newFieldContainer)

}

//Função para deletar o campo de imagens
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//selec yes or no
function toggleSelect(event){
    //retirar a classe .active(dos botões)
    document.querySelectorAll('.button-select button')
    .forEach( function(button){
        button.classList.remove('active')
    })

    //colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')
    //pegar o botão clicar

    //verificar se sim ou não

    
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value


}