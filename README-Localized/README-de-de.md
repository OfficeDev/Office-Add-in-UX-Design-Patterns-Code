# <a name="ux-design-patterns-for-office-add-ins"></a>UX-Entwurfsmuster für Office-Add-Ins 

Dieses Repository bietet Beispielimplementierungen von allgemeinen UX-Entwurfsmustern für Office Add-Ins in HTML-, CSS- und JavaScript-Code.

Beim Entwerfen von Office-Add-Ins sollte das UX-Design des Add-Ins eine überzeugende Leistung bieten, durch die Office erweitert wird. Das Add-In sollte beispielsweise unter anderem eine Anpassung für das erste Ausführen, eine herausragende UX-Erfahrung sowie nahtlose Übergänge zwischen Seiten bieten. Eine übersichtliche und moderne UX-Funktionalität steigert die Benutzerbindung und die Akzeptanz Ihres Add-Ins. Dieses Repository stellt UX-Ressourcen für Entwickler dar, die Folgendes implementieren:

* Allgemeine UX-Entwurfsmuster basierend auf bewährten Methoden
* Office-Fabric-Komponenten und -Formen
* Add-Ins, die wie eine natürliche Erweiterung der standardmäßigen Office-Benutzeroberfläche aussehen 

Allgemeine Informationen sowie Informationen zu den verfügbaren Typen von UX-Entwurfsmustern finden Sie unter [UX-Entwurfsmustervorlagen für Office-Add-Ins](https://dev.office.com/docs/add-ins/design/ux-design-patterns).

> Wichtig: Nach Anpassung dieser Entwurfsmuster an ihre Anforderungen müssen Sie das Add-In auf allen Plattformen testen, auf denen das Add-In verfügbar sein soll. Diese UX-Entwurfsmuster wurden mithilfe von Office 2016 und Windows 10 getestet.

## <a name="using-the-ux-design-patterns"></a>Verwenden der UX-Entwurfsmuster

Sie können die [UX-Entwurfsspezifikationen](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns) als Hilfe beim Erstellen Ihres eigenen UX-Entwurfs verwenden, oder Sie können den [Quellcode](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates) direkt zu Ihrem Projekt hinzufügen. So fügen Sie den Quellcode hinzu

1. Klonen Sie dieses Repository. 
2. Kopieren Sie den [Objektordner](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) und den Codeordner für das einzelne Muster, das Sie für Ihr Add-In-Projekt ausgewählt haben.  
3. Integrieren Sie das einzelne Muster in Ihr Add-In. Beispiel:
    - Bearbeiten Sie den Quellspeicherort oder die Add-In-Befehls-URL im Manifest.
    - Verwenden Sie das UX-Entwurfsmuster als Vorlage für andere Seiten.
    - Stellen Sie eine Verknüpfung zu oder von dem UX-Entwurfsmuster her.

## <a name="known-issues"></a>Bekannte Probleme

* Beim Ausführen einiger Codedateien außerhalb eines Add-In-Projekts wird ein JavaScript-Fehler ausgelöst. 
    * Lösung: Stellen Sie sicher, dass Sie diese Dateien einem Office-Add-In-Projekt hinzugefügt haben. 
* Nach der Konvertierung dieser Entwurfsmuster in eine Einzelseiten-App (SPA) werden alle Abschnitte der HTML-Seite oben ausgerichtet, sodass es zu einer Überschneidung kommt. 
    * Lösung: Beim Konvertieren von HTML-Code werden möglicherweise zusätzliche Wrapper-DIV-Elemente hinzugefügt. Stellen Sie sicher, dass die Höhe dieser zusätzlichen DIV-Elemente ordnungsgemäß zurückgesetzt wird. Wenn ein übergeordnetes DIV-Element auf eine Höhe von 100 % festgelegt ist , ein untergeordnetes DIV-Element über keine Höhe verfügt und ein zwei Ebenen untergeordnetes DIV-Element auf 100 % festgelegt ist, müssen Sie das untergeordnete DIV-Element auf 100 % festlegen, damit die Abschnitte ordnungsgemäß angeordnet werden.    
    
## <a name="additional-resources"></a>Weitere Ressourcen

* [Bewährte Methoden für die Entwicklung von Office-Add-Ins](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). Dieses Projekt verwendet Version 2.1.0 oder höher.

In diesem Projekt wurden die [Microsoft Open Source-Verhaltensregeln](https://opensource.microsoft.com/codeofconduct/) übernommen. Weitere Informationen finden Sie unter [Häufig gestellte Fragen zu Verhaltensregeln](https://opensource.microsoft.com/codeofconduct/faq/), oder richten Sie Ihre Fragen oder Kommentare an [opencode@microsoft.com](mailto:opencode@microsoft.com).

Copyright (c) Microsoft Corporation 2016. Alle Rechte vorbehalten.


