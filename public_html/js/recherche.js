/*window.onload = function() {
	var indicePano;
	var input;
	var boutton = document.getElementById("boutton");
	boutton.onclick = function() {
		 input = document.getElementById("barrecherche").value;
		 affTableau(input);
	};
};
var lien;

function affTableau(pomme) {
	var rien = 0;
	$("tbody tr").remove();
	for (var i = 0; i < arrayPano.length; i++) {
		if (arrayPano[i].batiment.principal === true) {
			if(arrayPano[i].batiment.lettre.toLowerCase() === pomme || arrayPano[i].batiment.lettre === pomme) {
				$("tbody").append("<tr><td><button id=\"lienbatiment\" >"+ arrayPano[i].batiment.lettre + "</button></td><td>"+  arrayPano[i].batiment.section + "</td><td>"+arrayPano[i].batiment.specialite + "</td></tr>");
				rien = 1;
				lien = document.getElementById("lienbatiment");
				indicePano = i;
				lien.onclick = function() {
					monPanorama.setPano(arrayPano[indicePano].panoID);
				}
			}
		}
	}
	if (rien == 0)
		$("tbody").append("<tr><td>Aucun Resultat</td><td>Aucun Resultat</td><td>Aucun Resultat</td></tr>")
	
}

function trouverPano(patate) {
    var indexDuPano;
    for (var i = 0; i < arrayPano.length; i++) {
        if (arrayPano[i].panoID === patate) {
            indexDuPano = i;
        }
    }
    return indexDuPano;
}*/
var n2 = 1;
$("#btnRecherche").click(function() {
        if (n2 == 1) {
            $("#recherche").hide("slow");
            $("#btnRecherche").attr("value", "Ouvrir la recherche");
            n2 = 0;
        } else {
            $("#recherche").show("slow");
            $("#btnRecherche").attr("value", "Fermer la recherche");
            n2 = 1;
            }
    });
	
window.onload = function() {
	var input;
	var boutton = document.getElementById("boutton");
	boutton.onclick = function() {
		 input = document.getElementById("barrecherche").value;
		 affTableau(input);
	};
};

function affTableau(pomme) {
	var indicePano = -1;
	$("tbody tr").remove();
	for (var i = 0; i < arrayPano.length; i++) {
		if (arrayPano[i].batiment.principal === true) {
			if(arrayPano[i].batiment.lettre.toLowerCase() === pomme || arrayPano[i].batiment.lettre === pomme) {
				indicePano = i;
                                if(arrayPano[i].batiment.section != false) {
				$("tbody").append("<tr><td><button class=\"lienbatiment\" onclick=\"setAPano("+indicePano+")\" >"+ arrayPano[i].batiment.lettre + "</button></td><td>"+  arrayPano[i].batiment.section + "</td><td>"+arrayPano[i].description + "</td></tr>");
                            }else{
                                $("tbody").append("<tr><td><button class=\"lienbatiment\" onclick=\"setAPano("+indicePano+")\" >"+ arrayPano[i].batiment.lettre + "</button></td><td>"+  "Batiment non divisé en section" + "</td><td>"+arrayPano[i].description + "</td></tr>");
                            }
                        }
		}
	}
	if (indicePano == -1) {
		$("tbody").append("<tr><td>Aucun Resultat</td><td>Aucun Resultat</td><td>Aucun Resultat</td></tr>");
	}
}

function setAPano(choufleur) {
	monPanorama.setPano(arrayPano[choufleur].panoID);
}