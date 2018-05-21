var arrayPano;
var divPano = document.getElementById("divPano");
var monPanorama;

initStreetView();
function initStreetView() {

    var panoramaOptions = {
        pano: "entree",
        panControl: true,
        zoomControl: true,
        linksControl: true,
        visible: true,
        pov: {
            zoom: 0,
            heading: 0,
            pitch: 0
        },
        panoProvider: getCustomPanorama
    };
    monPanorama = new google.maps.StreetViewPanorama(divPano, panoramaOptions);
}

function getCustomPanorama(pano, zoom, tileX, tileY) {
    var indexArrayPano = trouverIndexArrayPano(pano);
    var panoramaData;
    panoramaData = {
        location: {
            pano: arrayPano[indexArrayPano].panoID,
            description: arrayPano[indexArrayPano].description,
            latLng: arrayPano[indexArrayPano].latLng
        },
        copyright: "P.T.L.",
        tiles: {
            worldSize: new google.maps.Size(14000, 7000),
            tileSize: new google.maps.Size(14000, 7000),
            centerHeading: arrayPano[indexArrayPano].centerHeading,
            getTileUrl: getCustomPanoramaTileUrl
        },
        links: arrayPano[indexArrayPano].liens
    };
    return panoramaData;
}


function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    var indexArrayPano = trouverIndexArrayPano(pano);
    var photoPano = arrayPano[indexArrayPano].photoPano;
    return photoPano;
}

function trouverIndexArrayPano(pano) {
    var indexDuPano = -1;
    for (var i = 0; i < arrayPano.length; i++) {
        if (arrayPano[i].panoID === pano) {
            indexDuPano = i;
        }
    }
    return indexDuPano;
}
