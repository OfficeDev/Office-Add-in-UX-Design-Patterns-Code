# <a name="php-calendar-api-sample"></a>Exemple d’API de calendrier PHP #

[日本 (日本語)](https://github.com/jasonjoh/php-calendar/blob/master/loc/readme-ja.md) (japonais)

Cet exemple montre comment vous pouvez utiliser l’[API Calendrier](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations) à partir de PHP. L’exemple d’application présente les prochaines représentations d’un festival de théâtre shakespearien. Les utilisateurs peuvent connecter leur compte Office 365 et ajouter des événements à leur calendrier pour afficher les horaires des représentations auxquelles ils souhaitent assister. L’utilisateur peut inviter des amis en envoyant une invitation aux amis de son choix. 

## <a name="api-features-used"></a>Fonctionnalités de l’API utilisées ##

- Création d’événements dans le calendrier par défaut d’un utilisateur
- Ajout de pièces jointes aux événements
- Ajout de participants aux événements
- Utilisation d’un [affichage Calendrier](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations#GetCalendarView) pour développer les événements périodiques et afficher tous les rendez-vous d’une seule journée.

## <a name="required-software"></a>Logiciels requis ##

- [PHP 5.6](http://php.net/downloads.php)
- Un serveur web capable d’utiliser PHP.

Dans mon test, j’ai utilisé IIS 8 sur un ordinateur portable Windows 8.1. J’ai installé PHP 5.6.0 à l’aide de [Web Platform Installer](http://www.microsoft.com/web/downloads/platform.aspx) (Windows/IIS uniquement).

## <a name="running-the-sample"></a>Exécution de l’exemple ##

Avant de commencer, PHP doit être installé et votre serveur web doit être configuré pour traiter et utiliser les fichiers PHP. 

1. Téléchargez ou dupliquez l’exemple de projet.
1. Créez un répertoire dans votre répertoire racine web appelé `php-calendar`. Copiez les fichiers du référentiel dans ce répertoire.
1. [Inscrivez l’application dans Azure Active Directory](https://github.com/jasonjoh/office365-azure-guides/blob/master/RegisterAnAppInAzure.md). L’application doit être inscrite comme une application web avec une URL de connexion `http://localhost/php-calendar`. Elle doit recevoir l’autorisation « Accès total aux calendriers des utilisateurs », disponible dans la liste déroulante « Autorisations déléguées ».
1. Modifiez le fichier `.\o365\ClientReg.php`. 
    1. Copiez l’ID client de votre application obtenue durant l’inscription de l’application et collez-le à l’emplacement de la valeur correspondant à la variable `$clientId`. 
    1. Copiez la clé créée durant l’inscription de l’application et collez-la à l’emplacement de la valeur correspondant à la variable `$clientSecret`.
    1. Enregistrez le fichier.
1. Si votre installation PHP n’est pas configurée avec des certificats d’autorité de certification mis à jour pour vérifier SSL, les requêtes échoueront, sauf si vous exécutez Fiddler sur le serveur et définissez la variable `$enableFiddler` sur `true` dans `Office365Service.php`. Vous pouvez également insérer la ligne suivante immédiatement avant un appel à `curl_exec`. **Toutefois,** en faisant cela vous désactivez toute vérification SSL, ce qui doit être évité en mode production.

    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0) ;
1. Ouvrez un navigateur web et accédez à `http://localhost/php-calendar/home.php`.
1. Une liste des représentations à venir devrait s’afficher. Cliquez sur l’un des boutons « Connecter mon calendrier » pour vous connecter à Office 365.
1. Une fois connecté, vous serez redirigé vers la page d’accueil et les boutons devraient indiquer « Ajouter au calendrier ». Cliquez sur le bouton à côté d’une représentation pour l’ajouter à votre calendrier. Les événements dont le champ « Reçu requis » indique « Oui » inséreront le reçu en pièce jointe dans l’événement.

## <a name="copyright"></a>Copyright ##

Copyright (c) Microsoft. Tous droits réservés.

----------
Suivez-moi sur Twitter [@JasonJohMSFT](https://twitter.com/JasonJohMSFT)

Suivez le [blog de développement Exchange](http://blogs.msdn.com/b/exchangedev/)