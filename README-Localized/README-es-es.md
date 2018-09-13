# <a name="php-calendar-api-sample"></a>Ejemplo de la API de calendario de PHP #

[日本 (日本語)](https://github.com/jasonjoh/php-calendar/blob/master/loc/readme-ja.md) (japonés)

En este ejemplo se muestra cómo se puede usar la [API de calendario](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations) de PHP. La aplicación de ejemplo es una aplicación de "próximos programas" para un festival de Shakespeare de un teatro ficticio de la comunidad. Los usuarios pueden conectarse a su cuenta de Office 365 y agregar eventos a su calendario sobre las sesiones a las que asistirán. El usuario tiene la opción de invitar a sus amigos, lo que hará que se envíe una convocatoria de reunión a cada amigo invitado. 

## <a name="api-features-used"></a>Características de la API utilizadas ##

- Crear eventos en el calendario predeterminado de un usuario
- Agregar datos adjuntos a eventos
- Agregar asistentes a eventos
- Se usa una [vista Calendario](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations#GetCalendarView) para expandir los eventos periódicos y mostrar todas las citas para un solo día.

## <a name="required-software"></a>Software necesario ##

- [PHP 5.6](http://php.net/downloads.php)
- Un servidor web capaz de proporcionar PHP.

En mi prueba, usé IIS 8 instalado en un portátil con Windows 8.1. Instalé PHP versión 5.6.0 a través del [instalador de la plataforma web](http://www.microsoft.com/web/downloads/platform.aspx) (solo Windows/IIS).

## <a name="running-the-sample"></a>Ejecución del ejemplo ##

Se supone que tiene PHP instalado antes de comenzar y que el servidor web está configurado para procesar y proporcionar archivos PHP. 

1. Descargue o bifurque el proyecto de ejemplo.
1. Cree un nuevo directorio en el directorio raíz web llamado `php-calendar`. Copie los archivos del repositorio en este directorio.
1. [Registre la aplicación en Azure Active Directory](https://github.com/jasonjoh/office365-azure-guides/blob/master/RegisterAnAppInAzure.md). Se debe registrar la aplicación como una aplicación web con una dirección URL de inicio de sesión de `http://localhost/php-calendar` y se le debe dar el permiso "Tener acceso total a los calendarios de los usuarios", que está disponible en la lista desplegable "Permisos delegados".
1. Edite el archivo `.\o365\ClientReg.php`. 
    1. Copie el Id. de cliente de aplicación obtenido durante el registro de la aplicación y péguelo como valor de la variable `$clientId`. 
    1. Copie la clave que creó durante el registro de la aplicación y péguela como valor de la variable `$clientSecret`.
    1. Guarde el archivo.
1. Si la instalación de PHP no está configurada con los certificados de entidad emisora actualizados para comprobar SSL, se producirá un error en las solicitudes a no ser que ejecute Fiddler en el servidor y establezca la variable `$enableFiddler` como `true` en `Office365Service.php`. Como alternativa, puede insertar la línea siguiente justo antes de cualquier llamada a `curl_exec`. **Sin embargo,** debe tenerse en cuenta que al hacerlo se deshabilita cualquier comprobación de SSL, por lo que NO se debe realizar en un entorno de producción.

    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
1. Abra un explorador web y vaya a `http://localhost/php-calendar/home.php`.
1. Verá una lista de las próximas sesiones de las diversas obras de Shakespeare. Haga clic en cualquiera de los botones "Conectar mi calendario" para iniciar sesión en Office 365.
1. Una vez iniciada la sesión, se le debe redirigir a la página principal y los botones ahora deben indicar "Agregar al calendario". Haga clic en el botón situado junto a una sesión específica para agregarla al calendario. Los eventos con un campo "Vale requerido" con valor Sí incluirá el vale como datos adjuntos del evento.

## <a name="copyright"></a>Copyright ##

Copyright (c) Microsoft. Todos los derechos reservados.

----------
Conectar conmigo en Twitter [@JasonJohMSFT](https://twitter.com/JasonJohMSFT)

Seguir el [Blog de desarrollo de Exchange](http://blogs.msdn.com/b/exchangedev/)