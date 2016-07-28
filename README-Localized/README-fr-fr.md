# Modèles de conception de l’expérience utilisateur pour les compléments Office 

Ce référentiel fournit des exemples d’implémentation de modèles de conception d’expérience utilisateur courants dans du code HTML, CSS et JavaScript pour les compléments Office.

Quand vous créez des compléments Office, vous devez concevoir une expérience utilisateur intéressante qui étend les possibilités d’Office. Votre complément doit, entre autres, offrir une première expérience intéressante aux utilisateurs et assurer des transitions fluides entre les pages. En offrant aux utilisateurs une expérience nette et moderne, vous les persuaderez de continuer à utiliser votre complément. Ce référentiel dispose de ressources liées à l’expérience utilisateur pouvant être utilisées par les développeurs qui implémentent :

* des modèles de conception d’expérience utilisateur courants en faisant appel aux meilleures pratiques ;
* des styles et des composants de la structure Office ;
* des compléments ressemblant à une extension naturelle de l’interface utilisateur d’Office par défaut. 

Pour obtenir des informations générales et connaître les types de modèles de conception d’expérience utilisateur disponibles, reportez-vous à l’article relatif aux [modèles de conception d’expérience utilisateur pour les compléments Office](https://dev.office.com/docs/add-ins/design/ux-design-patterns).

> Important : Après avoir personnalisé ces modèles de conception pour les adapter à vos besoins, veillez à tester votre complément sur toutes les plateformes où il sera disponible. Ces modèles de conception d’expérience utilisateur ont été testés à l’aide d’Office 2016 et de Windows 10.

## Utilisation des modèles de conception d’expérience utilisateur

Vous pouvez vous servir des [spécifications du concepteur d’expérience utilisateur](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files) comme guide lorsque vous créez votre propre conception d’expérience utilisateur. Vous pouvez également choisir d’ajouter le [code source](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates) directement à votre projet. Pour ajouter le code source, procédez comme suit :

1. Clonez ce référentiel. 
2. Copiez le [dossier des composants](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) ainsi que le dossier de code pour le modèle individuel que vous choisissez dans votre projet de complément.  
3. Incorporez le modèle individuel à votre complément. Par exemple :
	- Modifiez l’emplacement source ou l’URL de commande de complément dans le manifeste.
	- Utilisez le modèle de conception d’expérience utilisateur en tant que modèle pour d’autres pages.
	- Lien vers ou à partir du modèle de conception d’expérience utilisateur.

## Problèmes connus

* L’exécution de certains fichiers de code en dehors d’un projet de complément génère une erreur JavaScript. 
	* Résolution : veillez à ajouter ces fichiers à un projet de complément Office. 
* Après avoir converti ces modèles de conception en une SPA (application à page unique), toutes les sections de la page HTML s’alignent en haut et se superposent. 
	* Résolution : Lors de la conversion à partir d’un format HTML, des éléments DIV de wrapper supplémentaires peuvent être ajoutés. Assurez-vous que la hauteur de ces éléments DIV supplémentaires est réinitialisée correctement. Par exemple, si un DIV parent est défini sur une hauteur de 100 %, qu’un DIV enfant n’a aucune hauteur et qu’un DIV petit-enfant est défini sur 100 %, vous devez définir le DIV enfant sur 100 % pour que les sections s’affichent correctement.    
	
## Ressources supplémentaires

* [Meilleures pratiques de conception des compléments Office](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Structure de l’interface utilisateur Office](http://dev.office.com/fabric/). Ce projet utilise les versions 2.1.0 ou supérieures.

Ce projet a adopté le [code de conduite Microsoft Open Source](https://opensource.microsoft.com/codeofconduct/). Pour plus d’informations, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.

Copyright (c) Microsoft Corporation 2016. Tous droits réservés.



