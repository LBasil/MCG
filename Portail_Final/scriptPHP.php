<!-- Peut être convertir le fichier d'origine en .php et utilisé $POST au lieu de $REQUEST */ -->

<?php
$host = 'localhost';
$dbName = 'formulaire';
$login = "root";
$password = "";
$db = new PDO(
    "mysql:host={$host};dbname={$dbName};charset=utf8",
    $login,
    $password
);

$select =  $_POST['select'];
switch ($select) {
    case "emploi":
        break;      
    case "stage":
        //Préparation de la requête pour que ce soit sécurisé   
        $insertDataStage = $db->prepare('INSERT INTO stage(mail, duree, societe) VALUES(:mail, :duree, :query_string)');
        /* $email = $_POST['field2'];
            $duree = $_POST['field5'];
            $url = $_SERVER["HTTP_REFERER"];
            $query = parse_url($url, PHP_URL_QUERY);
            $query_string = substr($query, 5); */
            
        $mail = "a@a.fr";
        $duree = 10;
        $query_string = "ei";
        $insertDataStage->execute([
            'mail' => $mail, 
            'duree' => $duree, 
            'societe' => $query_string]);
        break;
    case "contact":
        $insertDataContact = $db->prepare('INSERT INTO contact(sujet, mail, messages, societe) VALUES (:sujet, :email, :messages, :query_string)');
        $sujet = $_POST['field2'];
        $email = $_POST['field3'];
        $messages = $_POST['field4'];
        $url = $_SERVER["HTTP_REFERER"];
        $query = parse_url($url, PHP_URL_QUERY);
        $query_string = substr($query, 5);
        $insertDataContact->execute(['sujet' => $sujet, 'mail' => $email, 'messages' => $messages, 'societe' => $query_string]);
        break;
    default:
        break;
}
