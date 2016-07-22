# Modèles de conception de l’expérience utilisateur pour les compléments Office. 

Ce référentiel fournit des exemples d’implémentation de modèles de conception d’expérience utilisateur courants dans du code HTML et CSS pour les compléments Office.

Quand vous créez des compléments Office, vous devez concevoir une expérience utilisateur intéressante qui étend les possibilités d’Office. Un complément idéal doit, entre autres, offrir une première expérience intéressante aux utilisateurs et assurer des transitions fluides entre les pages. En offrant aux utilisateurs une expérience nette et moderne, vous les persuaderez de continuer à utiliser votre complément. Ce référentiel dispose de ressources liées à l’expérience utilisateur pouvant être utilisées par les développeurs qui implémentent :

* des modèles de conception d’expérience utilisateur courants en faisant appel aux meilleures pratiques ;
* des styles et des composants de la structure Office ;
* des compléments ressemblant à une extension naturelle de l’interface utilisateur d’Office par défaut. 

> Important : Après avoir personnalisé ces modèles de conception pour les adapter à vos besoins, veillez à tester votre complément sur toutes les plateformes où il sera disponible. Ces modèles de conception d’expérience utilisateur ont été testés à l’aide d’Office 2016 et de Windows 10.

## Comment puis-je commencer à utiliser ces ressources ?

L’utilisation de ces ressources de conception ou de code ne demande aucun prérequis. Pour créer une expérience utilisateur parfaite pour votre complément, procédez comme suit :

* Passez en revue les modèles de conception d’expérience utilisateur et identifiez les modèles importants pour votre complément. Par exemple, sélectionnez une des premières expériences d’utilisation.
* Puis, effectuez une ou plusieurs des actions suivantes :
	* Copiez les fichiers de code dans votre projet de complément et commencez à le personnaliser selon vos besoins. Vous devez avoir le [dossier Assets](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) et le dossier Code pour le modèle de conception que vous choisissez. Consultez les liens ci-dessous.
	* Jetez un Å“il aux spécifications et utilisez-les pour concevoir votre propre expérience utilisateur. Consultez les liens ci-dessous.
	* Téléchargez les fichiers Adobe Illustrator et modifiez-les pour imiter vos propres modèles de complément. Obtenez-les [ici](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files).

## Général

* 
            La **page d’accueil (ou générique)** est une page de complément standard. Les utilisateurs peuvent être redirigés vers une page d’accueil après la première exécution ou le processus de connexion. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF"), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page))
* 
            L’**image de marque dans la barre de marque** correspond à la page d’accueil avec une image dans le pied de page qui représente votre marque. ([spec](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar))

<table>
 <tr><th>Accueil</th><th>Barre de marque</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="page d’accueil" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="barre de marque" style="width: 264px;"/></A></td></tr>
 </table>

## Première expérience d’utilisation

Il s’agit de l’expérience vécue par un utilisateur lorsqu’il ouvre votre complément pour la première fois. Les points suivants répertorient les modèles de conception à intégrer pour la première exécution de votre complément. Vous trouverez une image de chacun d’entre eux en dessous.

* **Étapes pour commencer** permet aux utilisateurs ayant une liste d’étapes à suivre de commencer à utiliser votre complément. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step))
* **Valeur** communique la proposition de valeur de votre complément. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat))
* **Vidéo** présente aux utilisateurs une vidéo avant qu’ils commencent à utiliser votre complément. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat))
* **Procédure pas à pas** présente aux utilisateurs une série de fonctionnalités ou d’informations avant qu’ils commencent à utiliser le complément. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough))
* L’[Office Store](https://msdn.microsoft.com/fr-fr/library/office/jj220033.aspx) dispose d’un système qui gère les versions d’évaluation d’un complément, mais si vous souhaitez contrôler l’interface utilisateur relative à l’expérience d’évaluation de votre complément, utilisez les modèles suivants :

	* **Version d’évaluation** présente aux utilisateurs comment utiliser la version d’évaluation de votre complément. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat))
	* **Fonctionnalité d’évaluation** informe les utilisateurs que la fonctionnalité qu’ils tentent d’utiliser n’est pas disponible dans la version d’évaluation du complément. Par ailleurs, si votre complément est gratuit, mais qu’il comporte une fonctionnalité qui nécessite un abonnement, envisagez d’utiliser ce modèle. Vous pouvez également envisager d’utiliser ce modèle pour offrir une expérience avec une version antérieure après qu’une période d’évaluation est terminée. ([code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature))

> Important : Si vous décidez de gérer votre propre version d’évaluation et de ne pas utiliser l’Office Store pour gérer la version d’évaluation, assurez-vous que vous incluez la balise **Un autre achat peut être requis** dans les notes de test du service Mon tableau de bord vendeur.

Déterminez s’il convient de montrer la vidéo sur la première expérience d’utilisation une ou plusieurs fois (tout dépend de son importance pour votre scénario). Par exemple, si les utilisateurs utilisent régulièrement votre complément, ils peuvent ne plus se rappeler la façon de l’utiliser. Pour ces utilisateurs, il peut être utile de revoir cette première expérience d’utilisation. 

 <table>
 <tr><th>Étapes pour commencer</th><th>Valeur</th><th>Vidéo</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step">![instruction steps" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat">![value placemat" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="emplacement de la vidéo" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Première page de la procédure pas à pas</th><th>Version d’évaluation</th><th>Fonctionnalité de la version d’évaluation</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough">![walkthrough 1" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat">![trial placemat" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="emplacement de la fonctionnalité de la version d’évaluation" style="width: 264px;"/></A></td></tr>
 </table> 

## Notifications

Votre complément peut avertir les utilisateurs d’un événement (une erreur, par exemple) ou de l’état d’avancement d’un élément de plusieurs façons. Les points suivants répertorient ces méthodes. Vous trouverez une image de chacun d’entre eux en dessous.

* **Boîte de dialogue incorporée** affiche une boîte de dialogue dans le volet Office qui vous fournit des informations et, éventuellement, une expérience interactive, à l’aide des boutons ou d’autres commandes. Pensez à en utiliser une pour inviter un utilisateur à confirmer une action. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog))
* **Message incorporé** indique l’échec, la réussite ou des informations et peut apparaître à un emplacement spécifié dans le volet Office. Par exemple, si un utilisateur entre une adresse de messagerie erronée dans une zone de texte, un message d’erreur apparaît juste en dessous de la zone de texte. ([spec](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message))
* **Bannière de message** fournit des informations et, éventuellement, des instructions dans une bannière qui peut être réduite à une seule ligne, développée en plusieurs lignes ou masquée. Pensez à utiliser des bannières de message pour signaler une mise à jour du service ou donner un conseil utile lorsque le complément démarre. ([spec](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner))
* **Barre de progression** indique la progression d’un processus long et synchrone, tel qu’une tâche de configuration qui doit être terminée pour que l’utilisateur puisse effectuer d’autres actions. Il s’agit d’une page distincte interstitielle qui met en évidence la marque du complément. Utilisez une barre de progression quand le processus peut envoyer des notifications pour indiquer la progression de la tâche dans le complément. ([spec](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar))
* **Bouton fléché** indique qu’un processus synchrone long est lancé, mais ne fournit aucune indication sur son état d’avancement. Il s’agit d’une page distincte interstitielle qui met en évidence la marque du complément. Utilisez un bouton fléché quand le complément ne peut pas indiquer avec précision la progression du processus. ([spec](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner))
* **Annonce** fournit un bref message qui disparaît au bout de quelques secondes. Comme il se peut que l’utilisateur ne voie pas le message, utilisez une annonce uniquement pour les informations peu importantes. Utilisez une annonce pour informer les utilisateurs d’un événement dans un système distant, tel que la réception d’un message électronique. ([spec](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md), [code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast))

 <table>
 <tr><th>Boîte de dialogue incorporée</th><th>Message incorporé</th><th>Bannière de message</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="boîte de dialogue incorporée" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message">![inline message" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="bannière de message" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Barre de progression</th><th>Bouton fléché</th><th>Annonce</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="barre de progression" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner">![spinner" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="toast" style="width: 264px;"/></A></td></tr>
 </table>

## Composants

Voici des composants supplémentaires que vous pouvez utiliser avec votre complément dans différents scénarios.  

### Boîte de dialogue client

Les boîtes de dialogue client fournissent un autre moyen aux utilisateurs d’employer votre complément. 

* 
            La **boîte de dialogue d’alerte** affiche un message d’alerte avec des informations importantes, telles que des erreurs ou des notifications au-delà du contrôle de l’utilisateur.
* 
            Le **boîte de dialogue de rampe de type** affiche une boîte de dialogue avec du contenu textuel. Utilisez la boîte de dialogue de rampe de type pour transmettre des informations détaillées à l’utilisateur.
* 
            La **boîte de dialogue de navigation** affiche une boîte de dialogue comportant la navigation. Utilisez la boîte de dialogue de navigation pour permettre aux utilisateurs de naviguer entre les différents contenus.

<table>
 <tr><th>Boîte de dialogue d’alerte</th><th>Boîte de dialogue de rampe de type</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="boîte de dialogue d’alerte" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="boîte de dialogue de rampe de type" style="width: 300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>Boîte de dialogue de navigation</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation">![navigation dialog" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png)</A></td></tr>
</tr>
 </table>


### Évaluations et commentaires

Pour améliorer la visibilité et l’adoption de votre complément, vous devez fournir aux utilisateurs la possibilité de noter et de commenter votre complément dans l’Office Store. Ce modèle montre comment présenter les options de note et de commentaire aux utilisateurs à l’aide des éléments suivants :
- Commentaire sans y avoir été invité : utilisez l’icône ou le menu de navigation dans le pied de page.
- Commentaire après y avoir été invité : après la troisième exécution du complément, l’utilisateur est invité à envoyer un commentaire.

 <table>
 <tr><th>Évaluations et commentaires</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store">![Feedback and Ratings" style="width: 200px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG)</A></td></tr>
</tr>
 </table>

## Problèmes connus

* L’exécution de certains fichiers de code en dehors d’un projet de complément génère une erreur JavaScript. 
	* Résolution : veillez à ajouter ces fichiers à un projet de complément Office. 
* Après avoir converti ces modèles de conception en une SPA (application à page unique), toutes les sections de la page HTML s’alignent en haut et se superposent. 
	* Résolution : Lors de la conversion à partir d’un format HTML, des éléments DIV de wrapper supplémentaires peuvent être ajoutés. Assurez-vous que la hauteur de ces éléments DIV supplémentaires est réinitialisée correctement. Par exemple, si un DIV parent est défini sur une hauteur de 100 %, qu’un DIV enfant n’a aucune hauteur et qu’un DIV petit-enfant est défini sur 100 %, vous devez définir le DIV enfant sur 100 % pour que les sections s’affichent correctement.    
	
## Ressources supplémentaires

* [Meilleures pratiques de conception des compléments Office](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Structure de l’interface utilisateur Office](http://dev.office.com/fabric/). Ce projet utilise la version 2.1.0.

Ce projet a adopté le [code de conduite Microsoft Open Source](https://opensource.microsoft.com/codeofconduct/). Pour plus d’informations, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.

Copyright (c) Microsoft Corporation 2016. Tous droits réservés.



