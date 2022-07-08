/* Récupérer l'URL */
const parameters = splitParameters(location.search);

/* Récupérer le paramètre passé dans l'URL */
function splitParameters(parameters) {
    parameters = parameters.split('=');
    return (parameters[1]);
}

/* Une fois que le document est prêt */
$(document).ready(function () {
    getAll();
    setTimeout("setBG2()", 5000);
});

function getAll() {
    getMap();
    getHeader();
    getFooter();
}

/* Charger la map suivant le lieu */
function getMap() {
    switch (parameters) {
        case 'mcg':
            $("<div id='map' class='map'></div>").appendTo("#main");
            $("<div id='map2' ></div>").attr('style', 'overflow:hidden;width: 700px;position: relative;').appendTo("#map");
            $("<iframe width='700' height='440' frameborder='0' scrolling='no' marginheight='0'></iframe>").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.0038218098634!2d4.714371515589586!3d49.76718507938697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0e0125fafc57%3A0xac7d72fc8b6acac3!2sMCG%20FRANCE%20SAS!5e0!3m2!1sfr!2sfr!4v1653391289216!5m2!1sfr!2sfr').appendTo("#map2");
            $("<div id='map3'></div>").attr('style', 'position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;').appendTo('#map2');
            break;

        case 'id':
            $("<div id='map' class='map'></div>").appendTo("#main");
            $("<div id='map2' ></div>").attr('style', 'overflow:hidden;width: 700px;position: relative;').appendTo("#map");
            $("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.464282297843!2d4.703700115671672!3d49.7397073793836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea11934656c277%3A0x371d0286c7988283!2sInformatiq&#39;%20Discount!5e0!3m2!1sfr!2sfr!4v1653465841962!5m2!1sfr!2sfr' width='700' height='440' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>").appendTo("#map2");
            $("<div id='map3'></div>").attr('style', 'position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;').appendTo('#map2');
            break;

        case 'smc':
            $("<div id='map' class='map'></div>").appendTo("#main");
            $("<div id='map2' ></div>").attr('style', 'overflow:hidden;width: 700px;position: relative;').appendTo("#map");
            $("<iframe width='700' height='440' frameborder='0' scrolling='no' marginheight='0'></iframe>").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.0038218098634!2d4.714371515589586!3d49.76718507938697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0e0125fafc57%3A0xac7d72fc8b6acac3!2sMCG%20FRANCE%20SAS!5e0!3m2!1sfr!2sfr!4v1653391289216!5m2!1sfr!2sfr').appendTo("#map2");
            $("<div id='map3'></div>").attr('style', 'position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;').appendTo('#map2');
            break;

        case 'ei':
            $("<div id='map' class='map'></div>").appendTo("#main");
            $("<div id='map2' ></div>").attr('style', 'overflow:hidden;width: 700px;position: relative;').appendTo("#map");
            $("<iframe width='700' height='440' frameborder='0' scrolling='no' marginheight='0'></iframe>").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.0038218098634!2d4.714371515589586!3d49.76718507938697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0e0125fafc57%3A0xac7d72fc8b6acac3!2sMCG%20FRANCE%20SAS!5e0!3m2!1sfr!2sfr!4v1653391289216!5m2!1sfr!2sfr').appendTo("#map2");
            $("<div id='map3'></div>").attr('style', 'position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;').appendTo('#map2');
            break;

        default:
    }
}

/* Récupérer le header suivant le lieu */
function getHeader() {
    switch (parameters) {
        case 'mcg':
            $("<span id='span1'></span>").appendTo("#header1");
            $("<a id='a1' class='aHeader'>03 24 55 67 50 33</a>").appendTo("#span1");
            $("<span id='span2'></span>").appendTo("#header1");
            $("<a id='a2' class='aHeader'>33 avenue Charles de Gaulle, 08000 Charleville mézières</a>").attr('href', 'https://www.google.fr/maps/place/MCG+France+S.A./@49.7671851,4.7165602,15z/data=!4m5!3m4!1s0x0:0xac7d72fc8b6acac3!8m2!3d49.7671851!4d4.7165602').appendTo("#span2");
            $("<span id='span3'></span>").appendTo("#header1");
            $("<a id='a3' class='aHeader'>contact@mcg.fr</a>").attr('href', 'mailto:contact@mcg.fr').appendTo("#span3");
            $("<span id='span4' class='spanTitre'>NUMERO 1 DANS LES ARDENNES</span>").appendTo("#header1");
            break;

        case 'id':
        case 'smc':
        case 'ei':
        default:
    }
}

/* Récupérer le footer suivant le lieu */
function getFooter() {
    switch (parameters) {
        case 'mcg':
            $("<footer> © 2022 - Tous droits réservés MCG France - Mentions Légales </footer>").appendTo(document.body);
            break;

        case 'id':
            $("<footer> © 2022 - Tous droits réservés Informatiq'Discount - Mentions Légales </footer>").appendTo(document.body);
            break;

        case 'smc':
            $("<footer> © 2022 - Tous droits réservés SMC - Mentions Légales </footer>").appendTo(document.body);
            break;

        case 'ei':
            $("<footer> © 2022 - Tous droits réservés Elec Info - Mentions Légales </footer>").appendTo(document.body);
            break;

        default:
    }
}

/* Permet de reset quand on change de catégorie */
function removeAll() {
    /* Contact */
    $('#field_text1').remove();
    $('#field_text2').remove();
    $('#field_text3').remove();
    $('#field_checkbox').remove();
    $('#field_submit').remove();
    $('#field_file').remove();
    $('#derou1').remove();
}

/* Fonction en lien avec la première liste déroulante */
function formPart1(name) {
    removeAll();
    switch (name) {
        case 'stage':
            $("<div id='field_text1' class='field_text'></div>").appendTo("#fields");
            $("<label for='field2'>Adresse Mail</label>").appendTo("#field_text1");
            $("<input type='email' name='field2' id='field2' placeholder='[Entrez quelque chose]' required>").appendTo("#field_text1");

            $("<div></div>").attr('id', 'field_text3').attr('class', 'field_text').appendTo("#fields");
            $("<label for='field5'>Durée en semaine</label>").appendTo("#field_text3");
            $("<input type='text' name='field5' id='field5' placeholder='[Entrez quelque chose]' required>").appendTo("#field_text3");

            $("<div></div>").attr('id', 'field_file').attr('class', 'field_file').appendTo("#fields");
            $("<label for='field6'>Votre CV</label>").appendTo("#field_file");
            $("<input type='file' name='field6' id='field6' accept='application/pdf' required>").appendTo("#field_file");

            $("<div></div>").attr('id', 'field_checkbox').attr('class', 'field_checkbox').appendTo("#fields");
            $("<label for='term'>J'accepte les <a href=''>conditions d'utilisation</a></label>").appendTo("#field_checkbox");
            $("<input type='checkbox' name='term' id='term' required>").appendTo("#field_checkbox");

            $("<div></div>").attr('id', 'field_submit').attr('class', 'field_submit').appendTo("#fields");
            $("<input type='submit' value='Envoyer le formulaire'>").attr('id', 'sendForm').attr('name', 'sendForm').appendTo("#field_submit");
            break;

        case 'emploi':
            removeAll();
            break;

        case 'contact':
            $("<div id='field_text1' class='field_text'></div>").appendTo("#fields");
            $("<label for='field2'>Sujet</label>").appendTo("#field_text1");
            $("<input type='text' name='field2' id='field2' placeholder='[Entrez quelque chose]' required>").appendTo("#field_text1");

            $("<div id='field_text2' class='field_text'></div>").appendTo("#fields");
            $("<label for='field3'>Adresse Mail</label>").appendTo("#field_text2");
            $("<input type='email' name='field3' id='field3' placeholder='[Entrez quelque chose]' required>").appendTo("#field_text2");

            $("<div id='field_text3' class='field_textArea'></div>").appendTo("#fields");
            $("<label for='field3'>Votre message</label>").appendTo("#field_text3");
            $("<textarea name='field4' id='field4' placeholder='[Entrez quelque chose]' cols='30' rows='10' required>").appendTo("#field_text3");

            $("<div id='field_checkbox' class='field_checkbox'></div>").appendTo("#fields");
            $("<label for='term'>J'accepte les <a href=''>conditions d'utilisation</a></label>").appendTo("#field_checkbox");
            $("<input type='checkbox' name='term' id='term' required>").appendTo("#field_checkbox");

            $("<div id='field_submit' class='field_submit'></div>").appendTo("#fields");
            $("<input type='submit' value='Envoyer le formulaire' id='sendForm' name='sendForm'>").appendTo("#field_submit");
            break;

        default:
    }
}


