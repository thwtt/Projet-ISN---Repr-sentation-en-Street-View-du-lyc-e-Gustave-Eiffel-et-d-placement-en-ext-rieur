var n = 1;
var monPanorama; 
var id;

$(document).ready(function () { // attend que le document soit chargé
    $("body").click(function () {
        id = monPanorama.getPano();
        $("circle").attr("r", "5"); // remet le rayon de tous les cercles à 5px
        $("circle").attr("fill", "#000000"); // remet tous les cercles noirs
        $("#p"+ id).attr("r", "7"); // augmente le rayon du point correspondant à la vue active
        $("#p"+ id).attr("fill", "#1FA055"); // change la couleur de ce même point (vert)
    });
    
    // applique la fonction point aux 12 points possibles
    point("Lcdi");
    point("Lperm");
    point("courcantine");
    point("courphys");
    point("devantfoyer");
    point("devantinternat");
    point("entree");
    point("hallhonneur");
    point("parking");
    point("si");
    point("versP");
    point("viesco");
    
    // gère le bouton permettant l'ouverture et fermeture de la carte
    $("#btnCarte").click(function () {
        if (n == 1) {
            $("#divCarte").hide("slow");
            $("#btnCarte").attr("value", "Ouvrir la carte");
            n = 0;
        } else {
            $("#divCarte").show("slow");
            $("#btnCarte").attr("value", "Fermer la carte");
            n = 1;
        }
    });
});

// définit la fonction point
function point(id2){
        $("#p" + id2).click(function() {
        monPanorama.setPano(id2);
    })}