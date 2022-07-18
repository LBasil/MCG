# MCG
Portail MCG + Elec Info + SMC

![til](../PortailV2/Recording 2022-07-18 at 08.46.28.gif)

Git reprenant le code réalisé entre le 09/05 et le 18/07 dans le cadre d'un stage de fin d'études de DUT Informatique effectué par Basil L'HÔTE pour Informatiq'Discount sous la tutelle de Stéphane CORBARA.

Vous êtes évidemment libre de modifier le code existant, ou de ne pas le réutiliser, je ne toucherai plus au code en dehors de ma période de stage.

La code est composé d'HTML / CSS / JS / JQUERY / PHP. 
Il est majoritairement commenté et rangé.
-> Dernier code en date -> Portail_Final

La partie PHP est incomplète et n'était qu'a l'étape de prototype afin de satisfaire une demande de mes enseignants, c'est pour cela qu'il n'y a pas de fichiers sql (de plus ce n'était pas du tout une priorité).
Le code est effectué entièrement en local (testé sous XAMPP), cependant, une transition Wordpress est envisagé et potentiellement en cours. Si aucun fichier wordpress n'est présent dans le git, c'est qu'elle n'a pas eu lieu. (NB : Il y a beaucoup trop de fichiers pour passer par GIT)
-> Au vu des demandes très spécifique, je me suis d'abord orienté vers du fait main (uniquement la page portail), lorsque les deux sites m'ont été présenté, je l'ai ai réalisé à la main aussi car ils ne représentaient pas une difficulté importante. N'ayant jamais utilisé wordpress avant, j'ai donc terminé ce que je devais faire à la main, laissant donc maquettes et code afin de reproduire l'idée de la page sous WP pour le côté responsive (n'ayant jamais travailé avec ce CMS).

Les différentes pages et fonctionalités de ces dernières sont des retranscriptions des demandes de M. CORBARA.
-> Pour plus détails ou si il y a des incompréhensions, veuillez donc vous référer à lui s'il est toujours en charge de ce projet et que les directives n'ont pas changées.

La page d'index est une page dite portail et dynamique, c'est pour cela qu'elle possède de nombreuses animations.
-> L'animation "matrix" correspond à celle du mot se baladant en arrière plan.
Lors d'un passage sur un icône, cela stop toute la rotation, affiche les informations du site et affiche une preview du site en background.
L'accès au site se fait par le bouton dédié, de même pour la page contact qui est universelle.
-> Elle est géreé par des querries afin de savoir quelle entreprise le client souhaite contacter.
La page ne doit pas disposer de scroll et le surplus d'informations doit être affiché dans des modals.

La page de contact permet d'envoyer différents formulaire sur une boîte mail, avec en objet le nom de la société contacté puis la raison. /!\ Work in progess /!\

Elec info et SMC ont un site en construction, veuillez-vous référer aux designs présent sur la clef USB de M. CORBARA s'ils n'ont pas changés et qu'il est toujours responsable de ce projet OU aux fichiers avec le commit "Maquettes".

