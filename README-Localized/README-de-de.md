# <a name="php-calendar-api-sample"></a>Beispiel für PHP-Kalender-API #

[日本 (日本語)](https://github.com/jasonjoh/php-calendar/blob/master/loc/readme-ja.md) (Japanisch)

In diesem Beispiel wird gezeigt, wie Sie die [Kalender-API](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations) von PHP verwenden. Die Beispiel-App ist eine App für „kommende Vorstellungen“ bei einem Shakespeare-Festival eines fiktiven Laientheaters. Benutzer können ihre Office 365-Konten mit dem Kalender verbinden und Veranstaltungen für die Shows hinzufügen, die sie sich ansehen. Der Benutzer hat die Möglichkeit, Freunde einzuladen, wodurch jeder eingeladene Freund eine Besprechungsanfrage erhält. 

## <a name="api-features-used"></a>Verwendete API-Funktionen ##

- Erstellen von Ereignissen im Standardkalender eines Benutzers
- Hinzufügen von Anlagen zu Ereignissen
- Hinzufügen von Teilnehmern zu Ereignissen
- Verwenden einer [Kalenderansicht](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations#GetCalendarView) zum Erweitern der Ereignisserien und zum Anzeigen aller Termine für einen einzelnen Tag.

## <a name="required-software"></a>Erforderliche Software ##

- [PHP 5.6](http://php.net/downloads.php)
- Ein PHP-fähiger Webserver.

Bei meinen Tests habe ich IIS 8 auf einem Windows 8.1-Laptop verwendet. Ich habe PHP 5.6.0 mithilfe des [Webplattform-Installers](http://www.microsoft.com/web/downloads/platform.aspx) (nur Windows/IIS) installiert.

## <a name="running-the-sample"></a>Ausführen des Beispiels ##

Es wird davon ausgegangen, dass Sie PHP installiert haben, bevor Sie beginnen, und dass Ihr Webserver zur Verarbeitung von PHP-Dateien konfiguriert ist. 

1. Laden Sie das Beispielprojekt herunter.
1. Erstellen Sie ein neues Verzeichnis in Ihrem Webstammverzeichnis mit dem Namen `php-calendar`. Kopieren Sie die Dateien aus dem Repository in dieses Verzeichnis.
1. [Registrieren Sie die Anwendung in Azure Active Directory](https://github.com/jasonjoh/office365-azure-guides/blob/master/RegisterAnAppInAzure.md). Die App sollte als Web-App mit der Anmelde-URL `http://localhost/php-calendar` registriert werden und sollte die Berechtigung für Vollzugriff auf die Benutzerkalender haben, die im Dropdown „Delegierte Berechtigungen“ verfügbar ist.
1. Bearbeiten Sie die Datei `.\o365\ClientReg.php`. 
    1. Kopieren Sie die Client-ID für Ihre App, die Sie bei der App-Registrierung abgerufen haben, und kopieren Sie diese als den Wert für die `$clientId`-Variable. 
    1. Kopieren Sie den bei der App-Registrierung erstellten Schlüssel, und kopieren Sie ihn als den Wert für die `$clientSecret`-Variable.
    1. Speichern Sie die Datei.
1. Wenn Ihre PHP-Installation nicht mit aktualisierten Zertifizierungsstellenzertifikaten zur Überprüfung von SSL konfiguriert ist, schlagen Anfragen fehlt, es sei denn, Sie führen Fiddler auf dem Server aus, und legen die `$enableFiddler`-Variable auf `true` in `Office365Service.php` fest. Alternativ können Sie die folgende Zeile unmittelbar vor dem Aufruf von `curl_exec` einfügen. Beachten Sie **jedoch**, dass dadurch alle SSL-Überprüfungen deaktiviert werden, was in der Produktion NICHT zu empfehlen ist.

    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
1. Öffnen Sie einen Webbrowser, und navigieren Sie zu `http://localhost/php-calendar/home.php`.
1. Es sollte eine Liste kommender Vorstellungen für verschiedene Shakespeare-Stücke zu sehen sein. Klicken Sie auf eine der Schaltflächen „Meinen Kalender verbinden“, um sich bei Office 365 anzumelden.
1. Nach der Anmeldung sollten Sie zurück zur Startseite geleitet werden, und die Schaltflächen heißen nun „Zum Kalender hinzufügen“. Klicken Sie auf die Schaltfläche neben einer bestimmten Vorstellung, um diese zu Ihrem Kalender hinzuzufügen. Veranstaltungen, bei denen das Feld „Eintrittskarte erforderlich“ auf „Ja“ festgelegt ist, umfassen die Eintrittskarte als Anlage zu der Veranstaltung.

## <a name="copyright"></a>Copyright ##

Copyright (c) Microsoft. Alle Rechte vorbehalten.

----------
Kontaktieren Sie mich auf Twitter unter [@JasonJohMSFT](https://twitter.com/JasonJohMSFT)

Folgen Sie dem [Exchange Dev Blog](http://blogs.msdn.com/b/exchangedev/)