var arrayPano = [];
var panoCaract = {
    panoID: "entree",
    description: "Accueil - Entrée du lycée",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 0,
    photoPano: "panos/entree.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "D",
        section: false
    },
    liens:
            [
                {
                    heading: 0,
                    description: "Hall d'honneur",
                    pano: "hallhonneur"
                }
            ]

};
arrayPano.push(panoCaract);
//COUR DE LA CANTINE

panoCaract = {
    panoID: "courcantine",
    description: "Réfectoire et bâtiment L",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 0,
    photoPano: "panos/courcantine.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "K",
        section: false
    },
    liens:
            [
                {
                    heading: 90,
                    description: "vers le hall d'honneur",
                    pano: "hallhonneur"
                },
                {
                    heading: 280,
                    description: "vers le foyer",
                    pano: "devantfoyer"
                },
                {
                    heading: 40,
                    description: "vers la permanence",
                    pano: "Lperm"
                }
            ]
};
//DEVANT LE FOYER
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "devantfoyer",
    description: "Vue sur le foyer",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 0,
    photoPano: "panos/devantfoyer.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "J",
        section: false
    },
    liens:
            [
                {
                    heading: 85,
                    description: "vers la cour de la cantine",
                    pano: "courcantine"
                },
                {
                    heading: 335,
                    description: "vers le parking",
                    pano: "devantinternat"
                }
            ]
};
//DEVANT L'INTERNAT
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "devantinternat",
    description: "Bâtiment de l'internat",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 0,
    photoPano: "panos/devantinternat.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "V",
        section: false
    },
    liens:
            [
                {
                    heading: 120,
                    description: "vers le foyer",
                    pano: "devantfoyer"
                },
                {
                    heading: -5,
                    description: "vers le parking",
                    pano: "parking"
                }
            ]
};

//PARKING
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "parking",
    description: "Parking du personnel",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 0,
    photoPano: "panos/parking.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "P",
        section: "Parking"
    },
    liens:
            [
                {
                    heading: 180,
                    description: "vers l'internat",
                    pano: "devantinternat"
                },
                {
                    heading: 90,
                    description: "vers le batiment P",
                    pano: "si"
                }
            ]
};

//SI
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "si",
    description: "Bâtiment P1 (Sciences de l'Ingénieur et ISN)",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 0,
    photoPano: "panos/si.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "P",
        section: "1"
    },
    liens:
            [
                {
                    heading: 270,
                    description: "vers le parking",
                    pano: "parking"
                },
                {
                    heading: 170,
                    description: "vers la route",
                    pano: "versP"
                }
            ]
};

//vers batiment P
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "versP",
    description: "Bâtiment P2 - Sciences de l'Ingénieur",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 210,
    photoPano: "panos/versP.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "P",
        section: "2"
    },
    liens:
            [
                {
                    heading: 350,
                    description: "vers le meilleur cours",
                    pano: "si"
                },
                {
                    heading: 80,
                    description: "vers la vie sco",
                    pano: "viesco"
                }
            ]
};

// vie scolaire
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "viesco",
    description: "Cour principale, bâtiment de la vie scolaire",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 184,
    photoPano: "panos/viesco.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "P",
        section: "4"
    },
    liens:
            [
                {
                    heading: 25,
                    description: "allons en permanence",
                    pano: "Lperm"
                },
                {
                    heading: -25,
                    description: "allons en permanence",
                    pano: "Lcdi"
                },
                {
                    heading: 90,
                    description: "allons en SI",
                    pano: "versP"
                }
            ]
};

// BATIMENT L DEVANT LA PERM
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "Lperm",
    description: "Cour principale, vue sur le CDI",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 180,
    photoPano: "panos/Lperm.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "L",
        section: "1"
    },
    liens:
            [
                {
                    heading: -170,
                    description: "allons vers la vie scolaire",
                    pano: "viesco"
                },
                {
                    heading: 25,
                    description: "allons vers la cantine",
                    pano: "courcantine"
                },
                {
                    heading: -95,
                    description: "allons vers le cdi",
                    pano: "Lcdi"
                }
            ]
};

//HALL D'HONNEUR
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "hallhonneur",
    description: "Hall d'honneur",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 180,
    photoPano: "panos/hallhonneur.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "L",
        section: "2"
    },
    liens:
            [
                {
                    heading: 180,
                    description: "vers l'entree",
                    pano: "entree"
                },
                {
                    heading: -90,
                    description: "vers la cantine",
                    pano: "courcantine"
                },
                {
                    heading: 90,
                    description: "vers la physique-chimie",
                    pano: "courphys"
                }
            ]
};
arrayPano.push(panoCaract);

// BATIMENT L DEVANT LE CDI
panoCaract = {
    panoID: "Lcdi",
    description: "Cour principale, vue sur la permanence",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: 180,
    photoPano: "panos/Lcdi.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "L",
        section: "3"
    },
    liens:
            [
                {
                    heading: 85,
                    description: "allons vers la permanence",
                    pano: "Lperm"
                },
                {
                    heading: -40,
                    description: "allons en physique chimie",
                    pano: "courphys"
                },
                {
                    heading: 165,
                    description: "allons vers la vie scolaire",
                    pano: "viesco"
                }
            ]
};

// COURS BATIMENT PHYSIQUE
arrayPano.push(panoCaract);
panoCaract = {
    panoID: "courphys",
    description: "Bâtiment N (Physique-Chimie)",
    latLng: new google.maps.LatLng(50.688256, 2.872520),
    centerHeading: -90,
    photoPano: "panos/courphys.jpg",
    dimension: "3000, 1500",
    batiment: {
        principal: true,
        lettre: "N",
        section: false
    },
    liens:
            [
                {
                    heading: 170,
                    description: "allons vers le hall d'honneur",
                    pano: "hallhonneur"
                },
                {
                    heading: -140,
                    description: "allons en permanence",
                    pano: "Lcdi"
                }
            ]
};
arrayPano.push(panoCaract);