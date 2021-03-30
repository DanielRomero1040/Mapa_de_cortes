
// Configuracion de mapa - setview
var mymap=L.map('map').setView([-34.664734, -58.551996], 16);


// Ubicacion de tilelayer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
    }).addTo(mymap);

// Generacion de marker y definicion de popups
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

var marker1 = L.marker([-34.663986007954435, -58.55198864945314],{icon: greenIcon}).addTo(mymap);

var marker2 = L.marker([-34.66574219723623, -58.54971707786398]).addTo(mymap);



marker1.bindPopup("Día del corte: <b>05/03/2021</b><br>Hora del corte: <b>11:46 hs</b><br>Fecha y Hora estimada de reposición: <b>05/03/2021 14:00hs</b><br>Estado del corte: <b>“EQUIPO MOVIL EN CAMINO”</b><br><a href='#'>Más información acerca del tiempo<br>estimado de reposición</a>").isPopupOpen();

marker2.bindPopup("<b>Corte programado.</b><br>Día del corte: <b>07/03/2021</b><br>Hora del corte: <b>08:00 hs</b><br>Fecha y Hora estimada de reposición: <b>07/03/2021 14:00hs</b><br>Motivo del corte: <b>“MANTENIMIENTO PREV.”</b><br><a href='#'>Más información acerca de los cortes programados</a>").isPopupOpen();

// Area
var polygon = L.polygon([
    [-34.6635717547233, -58.55264258677614],
    [-34.662812931129785, -58.55368047928812],
    [-34.66211101311878, -58.55259645822005],            
    [-34.66167468270969, -58.55200831912993],
    [-34.662594768060494, -58.55087816950578],
    [-34.6632777114055, -58.551166472981315],
    [-34.66403653074257, -58.55049760891804],
    [-34.66455821500562, -58.551420180039806],
    [-34.66368557766295, -58.55263105463712]

    
] ,
{   color: '#02E700',
    opacity: 0.2,
    fillColor: '#02E700',
    fillOpacity: 0.2,}
).addTo(mymap);



