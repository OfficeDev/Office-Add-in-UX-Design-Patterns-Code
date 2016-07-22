# UX-Entwurfsmuster für Office-Add-Ins. 

Dieses Repository bietet Beispielimplementierungen von UX-Entwurfsmustern für Office Add-Ins in HTML- und CSS-Code.

Beim Entwerfen von Office-Add-Ins sollte das UX-Design des Add-Ins eine überzeugende Leistung bieten, durch die Office erweitert wird. Um ein interessantes Add-In zu erstellen, sollte das Add-In unter anderem eine Anpassung für das erste Ausführen, eine herausragende UX-Erfahrung sowie nahtlose Übergänge zwischen Seiten bieten. Eine übersichtliche und moderne UX-Funktionalität steigert die Benutzerbindung und die Akzeptanz Ihres Add-Ins. Dieses Repository stellt UX-Ressourcen für Entwickler dar, die Folgendes implementieren:

* Allgemeine UX-Entwurfsmuster basierend auf bewährten Methoden
* Office-Fabric-Komponenten und -Formen
* Add-Ins, die wie eine natürliche Erweiterung der standardmäßigen Office-Benutzeroberfläche aussehen 

> Wichtig: Nach Anpassung dieser Entwurfsmuster an ihre Anforderungen müssen Sie das Add-In auf allen Plattformen testen, auf denen das Add-In verfügbar sein soll. Diese UX-Entwurfsmuster wurden mithilfe von Office 2016 und Windows 10 getestet.

## Wie kann ich in die Verwendung dieser Ressourcen einsteigen?

Es gibt keine Voraussetzungen für die Verwendung dieser Entwurfs- oder Coderessourcen. Gehen Sie folgendermaßen vor, um mit dem Erstellen einer ansprechenden UX für Ihr Add-In zu beginnen:

* Sehen Sie sich die UX-Entwurfsmuster an, und ermitteln Sie, welche für Ihr Add-In wichtig sind. Wählen Sie z. B. eine der Anpassungen für das erste Ausführen aus.
* Führen Sie dann eine oder mehrere der folgenden Aktionen aus:
	* Kopieren Sie die Codedateien in Ihr Add-In-Projekt, und beginnen Sie, diese an Ihre Anforderungen anzupassen. Sie benötigen [den Objektordner](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) und den Codeordner für das benötigte Entwurfsmuster. Sehen Sie sich die folgenden Links an.
	* Sehen Sie sich die Spezifikationen an, und verwenden Sie diese als Leitfaden beim Erstellen Ihres eigenen UX-Designs. Sehen Sie sich die folgenden Links an.
	* Laden Sie die Adobe Illustrator-Dateien herunter, und bearbeiten Sie diese, um Ihre eigenen Add-In-Entwürfe zu modellieren. Sie finden die Dateien [hier](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files).

## Allgemeines

* **Zielseite (oder generische Seite)** ist eine Add-In-Standardseite. Benutzer werden möglicherweise nach dem ersten Ausführen oder nach dem Anmeldevorgang an die Zielseite weitergeleitet. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF-Datei"), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page))
* **Markenimage in der Markenleiste** ist die Zielseite mit einem Bild in der Fußzeile, das Ihre Marke darstellt. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar))

<table>
 <tr><th>Zielseite</th><th>Markenleiste</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="landing page" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="brand bar" style="width: 264px;"/></A></td></tr>
 </table>

## Anpassung für das erste Ausführen

Die Anpassung für das erste Ausführen bezieht sich auf die Erfahrung, die ein Benutzer macht, wenn er Ihr Add-In das erste Mal öffnet. Nachfolgend sind die Entwurfsmuster für die Anpassung der ersten Ausführung aufgeführt, die Sie in Ihr Add-In einschließen können. Bilder der einzelnen Muster finden Sie weiter unten.

* **Erste Schritte** bietet Benutzern eine sortierte Liste von Schritten, die den Einstieg in die Verwendung Ihres Add-Ins erleichtern. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step))
* **Wert** kommuniziert das Leistungsversprechen Ihres Add-Ins. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat))
* **Video** zeigt Benutzern ein Video, bevor sie mit der Verwendung des Add-Ins beginnen. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat))
* **Exemplarische Vorgehensweise** führt die Benutzer durch eine Reihe von Features oder Informationen, bevor sie mit der Verwendung des Add-Ins beginnen. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough))
* Der [Office Store](https://msdn.microsoft.com/de-de/library/office/jj220033.aspx) verfügt über ein System, das die Testversionen eines Add-Ins verwaltet. Wenn Sie die Benutzeroberfläche der Testversion Ihres Add-Ins steuern möchten, verwenden Sie die folgenden Muster:

	* **Testversion** zeigt Benutzern, wie eine Testversion Ihres Add-Ins funktioniert. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat))
	* **Testfunktion** teilt dem Benutzer mit, dass die verwendete Funktion in der Testversion des Add-Ins nicht verfügbar ist. Wenn das Add-In kostenlos ist und über eine Funktion verfügt, für die ein Abonnement erforderlich ist, ziehen Sie ebenfalls die Verwendung dieses Musters in Erwägung. Sie sollten die Verwendung dieses Musters auch erwägen, um eine heruntergestufte Benutzererfahrung nach Ablauf der Testversion zu ermöglichen. ([Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature))

> Wichtig: Wenn Sie sich dazu entscheiden, Ihre Testversion nicht über den Office Store sondern selbst zu verwalten, fügen Sie unbedingt das Tag **Möglicherweise sind zusätzliche Käufe erforderlich.** zu den Testversionshinweisen im Verkäuferdashboard hinzu.

Die Überlegung, ob Sie die Anpassung für das erste Ausführen einmal oder mehrmals anzeigen möchten, ist wichtig für Ihr Szenario. Wenn Benutzer Ihr Add-In beispielsweise in regelmäßigen Abständen verwenden, vergessen sie vielleicht, wie das Add-In verwendet wird. Für diese Benutzer kann es hilfreich sein, sich die Anpassung für das erste Ausführen noch einmal anzusehen. 

 <table>
 <tr><th>Erste Schritte</th><th>Wert</th><th>Video</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG" alt="instruction steps" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG" alt="value placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="video placemat" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Erste Seite der exemplarischen Vorgehensweise</th><th>Testversion</th><th>Testfunktion</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG" alt="walkthrough 1" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG" alt="trial placemat" style="width: 264px;/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="trial placemat feature" style="width: 264px;"/></A></td></tr>
 </table> 

## Benachrichtigungen

Es gibt verschiedene Möglichkeiten, wie das Add-In Benutzer über Ereignisse, z. B. Fehler, oder Fortschritte informieren kann. Nachfolgend sind diese Techniken aufgeführt. Bilder der einzelnen Muster finden Sie weiter unten.

* **Eingebettetes Dialogfeld** zeigt ein Dialogfeld innerhalb des Aufgabenbereichs, das Informationen und optional eine interaktive Umgebung bereitstellt, die Schaltflächen oder andere Steuerelemente verwendet. Es bietet sich an, ein solches zu verwenden, um den Benutzer aufzufordern, eine Aktion zu bestätigen. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog))
* **Inlinenachricht** gibt Fehler, Erfolg oder Informationen an und kann an einem bestimmten Ort im Aufgabenbereich angezeigt werden. Wenn ein Benutzer beispielsweise eine nicht ordnungsgemäß formatierte E-Mail-Adresse in einem Textfeld eingibt, wird direkt unter dem Textfeld eine Fehlermeldung angezeigt. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message))
* **Nachrichtenbanner** enthält Informationen und optional einen einfachen Aktionsaufruf in einem Banner, das zu einer einzigen Zeile reduziert, in mehrere Zeilen erweitert oder geschlossen werden kann. Sie sollten Nachrichtenbanner verwenden, um ein Dienstupdate oder einen hilfreichen Tipp anzuzeigen, wenn das Add-In gestartet wird. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner))
* **Statusanzeige** zeigt den Fortschritt eines lange dauernden, synchronen Prozesses an, z. B. eine Konfigurationsaufgabe, die abgeschlossen sein muss, bevor der Benutzer weitere Aktionen ausführen kann. Es handelt sich um eine Interstitialseite, die auch die Marke des Add-Ins stärkt. Verwenden Sie eine Statusanzeige, wenn der Prozess periodische Messungen darüber an das Add-In senden kann, wie weit der Prozess fortgeschritten ist. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar))
* **Drehfeld** zeigt an, dass ein lange dauernder, synchroner Prozess ausgeführt wird, gibt aber keine Informationen darüber, wie weit der Prozess fortgeschritten ist. Es handelt sich um eine Interstitialseite, die auch die Marke des Add-Ins stärkt. Verwenden Sie ein Drehfeld, wenn das Add-In nicht zuverlässig wissen kann, wie weit ein Prozess fortgeschritten ist. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner))
* **Popup** zeigt eine kurze Nachricht an, die nach ein paar Sekunden langsam ausgeblendet wird. Da der Benutzer die Nachricht möglicherweise nicht sieht, verwenden Sie das Popup nur für unwesentliche Informationen. Es bietet sich an, um Benutzer über ein Ereignis in einem Remotesystem zu benachrichtigen, z. B. den Eingang einer E-Mail. ([Spezifikation](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md), [Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast))

 <table>
 <tr><th>Eingebettetes Dialogfeld</th><th>Inlinenachricht</th><th>Nachrichtenbanner</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="embedded dialog" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG alt="inline message" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="message banner" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Statusanzeige</th><th>Drehfeld</th><th>Popup</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="progress bar" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG" alt="spinner" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="toast" style="width: 264px;"/></A></td></tr>
 </table>

## Komponenten

Im folgenden werden zusätzliche Komponenten aufgeführt, die Sie in Ihrem Add-In in einer Vielzahl von Szenarien verwenden können.  

### Clientdialogfeld

Clientdialogfelder bieten eine weitere Möglichkeit für die Arbeit mit Ihrem Add-In. 

* **Dialogfeld „Warnung“** zeigt ein Warnfeld mit wichtigen Informationen an, z. B. Fehlern oder Benachrichtigungen außerhalb des Benutzersteuerelements.
* **Typeramp-Dialogfeld** zeigt ein Dialogfeld mit Textinhalt an. Verwenden Sie das Typeramp-Dialogfeld, um ausführliche Informationen für Benutzer anzuzeigen.
* **Dialogfeld „Navigation“** zeigt ein Dialogfeld mit Navigation an. Verwenden Sie das Dialogfeld „Navigation“, um Benutzern das Navigieren zwischen verschiedenen Inhalten zu ermöglichen.

<table>
 <tr><th>Dialogfeld „Warnung“</th><th>Typeramp-Dialogfeld</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="alert dialog" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="typeramp dialog" style="width: 300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>Dialogfeld „Navigation“</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png" alt="navigation dialog" style="width: 264px;"/></A></td></tr>
</tr>
 </table>


### Feedback und Bewertungen

Um die Sichtbarkeit und die Akzeptanz Ihres Add-In zu verbessern, sollten Sie Benutzern ermöglichen, Feedback und Bewertungen zu Ihrem Add-In im Office Store abzugeben. Dieses Muster veranschaulicht die Darstellung von Feedback- und Bewertungsoptionen für Benutzer mithilfe von:
- nicht angefordertem Feedback über das Navigationsmenü oder das Symbol in der Fußzeile
- angefordertem Feedback: nach dreimaligem Ausführen des Add-Ins wird ein Benutzer dazu aufgefordert, Feedback abzugeben

 <table>
 <tr><th>Bewertungen und Feedback</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG" alt="Feedback and Ratings" style="width: 200px;"/></A></td></tr>
</tr>
 </table>

## Bekannte Probleme

* Beim Ausführen einiger Codedateien außerhalb eines Add-In-Projekts wird ein JavaScript-Fehler ausgelöst. 
	* Lösung: Stellen Sie sicher, dass Sie diese Dateien einem Office-Add-In-Projekt hinzugefügt haben. 
* Nach der Konvertierung dieser Entwurfsmuster in eine Einzelseiten-App (SPA) werden alle Abschnitte der HTML-Seite oben ausgerichtet, sodass es zu einer Überschneidung kommt. 
	* Lösung: Beim Konvertieren von HTML-Code werden möglicherweise zusätzliche Wrapper-DIV-Elemente hinzugefügt. Stellen Sie sicher, dass die Höhe dieser zusätzlichen DIV-Elemente ordnungsgemäß zurückgesetzt wird. Wenn ein übergeordnetes DIV-Element auf eine Höhe von 100 % festgelegt ist , ein untergeordnetes DIV-Element über keine Höhe verfügt und ein zwei Ebenen untergeordnetes DIV-Element auf 100 % festgelegt ist, müssen Sie das untergeordnete DIV-Element auf 100 % festlegen, damit die Abschnitte ordnungsgemäß angeordnet werden.    
	
## Zusätzliche Ressourcen

* [Bewährte Designmethoden für Office Add-Ins](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office-Benutzeroberfläche Fabric](http://dev.office.com/fabric/) Dieses Projekt verwendet Version 2.1.0.

In diesem Projekt wurden die [Microsoft Open Source-Verhaltensregeln](https://opensource.microsoft.com/codeofconduct/) übernommen. Weitere Informationen finden Sie unter [Häufig gestellte Fragen zu Verhaltensregeln](https://opensource.microsoft.com/codeofconduct/faq/), oder richten Sie Ihre Fragen oder Kommentare an [opencode@microsoft.com](mailto:opencode@microsoft.com).

Copyright (c) Microsoft Corporation 2016. Alle Rechte vorbehalten.



