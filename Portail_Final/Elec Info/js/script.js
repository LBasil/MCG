/* Gestion du onclick */
const handleclick = (value) => {
	carroussel(value);
}

/* On affiche suivant l'onglet sur lequel l'utilisateur a cliqué */
function carroussel (value) {
    clearAll();
    switch(value){
        /* Téléphonie est un copié / collé de celle par "défaut", non pas du case, mais de ce qui est affiché lors du premier chargement de la page */
        case 'telephonie':
            $("#telephonie").addClass("active");
            $("<div class='informations' id='informations'></div>").appendTo("#container");
            $("<div class='description' id='description'></div>").appendTo("#informations");
            $("<h1>Téléphonie pour votre entreprise</h1>").appendTo("#description");
            $("<h2>Titre h2</h2>").appendTo("#description");
            $("<p>Un paragraphe.</p>").appendTo("#description");
            $("<ul id='ulDevis' class='ulDevis'></ul>").appendTo("#description");
            $("<li id='li1' class='li1'>Une LI</li>").appendTo("#ulDevis");
            $("<li id='li2' class='li2'>Une autre LI </li>").appendTo("#ulDevis");
            $("<img src='./images/cablesIndex.png' alt='' class='cablesIndex' id='cablesIndex'>").appendTo("#informations");
        break;
        case 'internet':
            $("#internet").addClass("active");
            $("<div class='informations' id='informations'></div>").appendTo("#container");
            $("<div class='description' id='description'></div>").appendTo("#informations");
            $("<h1>Internet pour votre entreprise</h1>").appendTo("#description");
            $("<h2>Titre h2</h2>").appendTo("#description");
            $("<p>Un paragraphe.</p>").appendTo("#description");
            $("<ul id='ulDevis' class='ulDevis'></ul>").appendTo("#description");
            $("<li id='li1' class='li1'>Une LI</li>").appendTo("#ulDevis");
            $("<li id='li2' class='li2'>Une autre LI </li>").appendTo("#ulDevis");
            $("<img src='./images/cablesIndex.png' alt='' class='cablesIndex' id='cablesIndex'>").appendTo("#informations");
        break;
        case 'reseau':
            $("#reseau").addClass("active");
            $("<div class='informations' id='informations'></div>").appendTo("#container");
            $("<div class='description' id='description'></div>").appendTo("#informations");
            $("<h1>Câblage réseau RJ45 de votre entreprise</h1>").appendTo("#description");
            $("<h2>Réseau informatique et télécom, multimédia, courant faible</h2>").appendTo("#description");
            $("<p>Dans l'ère du digital et du tout numérique, Fibre & com, soucieux de la qualité de son service et riche de son expérience en câblage réseau, vous propose de vous accompagner dans vos projets.</p>").appendTo("#description");
            $("<ul id='ulDevis' class='ulDevis'></ul>").appendTo("#description");
            $("<li id='li1' class='li1'><span class='bold'>Déménagement :</span> la plupart de nos clients ont besoins de conseils afin de garantir une continuité de service et de production</li>").appendTo("#ulDevis");
            $("<li id='li2' class='li2'><span class='bold'>Rénovation / Mise aux normes :</span> Existant dans la plupart des locaux d'entreprise, il souffre souvent de vieilesse (prises endommagées, câbles ne correspondant plus aux besoins de débit d'aujourd'hui) ou tout simplement ne propose plus assez de prises disponibles. Dans le cadre de nouveaux bureaux, le câblage existant qui correspondait à l'ancien locataire, ne correspond pas forcément à votre organisation </li>").appendTo("#ulDevis");
            $("<img src='./images/cablesIndex.png' alt='' class='cablesIndex' id='cablesIndex'>").appendTo("#informations");
        break;
        case 'devis':
            $("#devis").addClass("active");
            $("<div class='informations' id='informations'></div>").appendTo("#container");
            $("<div class='description' id='description'></div>").appendTo("#informations");
            $("<h1>Devis pour votre entreprise</h1>").appendTo("#description");
            $("<h2>Titre h2</h2>").appendTo("#description");
            $("<p>Un paragraphe.</p>").appendTo("#description");
            $("<ul id='ulDevis' class='ulDevis'></ul>").appendTo("#description");
            $("<li id='li1' class='li1'>Une LI</li>").appendTo("#ulDevis");
            $("<li id='li2' class='li2'>Une autre LI </li>").appendTo("#ulDevis");
            $("<img src='./images/cablesIndex.png' alt='' class='cablesIndex' id='cablesIndex'>").appendTo("#informations");
        break;
        default:
        break;
    }
}

/* A chaque changement d'onglet, on clear le précédent */
function clearAll() {
    clearClass();
    $('#informations').remove();
}

/* On enlève le côté actif de l'onglet quand on change */
function clearClass(){
    $("#telephonie").removeClass("active");
    $("#internet").removeClass("active");
    $("#reseau").removeClass("active");
    $("#devis").removeClass("active");
}
