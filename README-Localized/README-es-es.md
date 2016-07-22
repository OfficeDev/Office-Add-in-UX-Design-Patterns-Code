# Modelos de diseño de la experiencia del usuario para complementos de Office. 

Este repositorio proporciona implementaciones de ejemplo en HTML y CSS de patrones de diseño comunes de experiencia del usuario para los complementos de Office.

Al diseñar complementos de Office, hay que procurar que la experiencia del usuario del complemento sea atractiva y que amplíe las funciones de Office. Para crear un gran complemento, este debe tener una experiencia de primera ejecución, ofrecer una experiencia del usuario de primera clase y facilitar una transición suave entre las páginas, entre otras cosas. Una experiencia del usuario moderna y sin complicaciones aumenta la retención de usuarios y la adopción del complemento. En este repositorio hay recursos para desarrolladores que implementan:

* Modelos de diseño de la experiencia del usuario comunes basados en procedimientos recomendados.
* Componentes y estilos de Office Fabric.
* Complementos que parecen una extensión natural de la interfaz de usuario predeterminada de Office. 

> Importante: Tras personalizar estos patrones de diseño para que cumplan los requisitos, asegúrese de probar el complemento en todas las plataformas en las que estará disponible. Estos patrones de diseño de experiencia del usuario se han probado con Office 2016 y Windows 10.

## ¿Cómo puedo comenzar a usar estos recursos?

No existen requisitos previos para usar estos recursos de diseño o código. Para comenzar a crear una excelente experiencia del usuario para su complemento:

* Revise los modelos de diseño de la experiencia del usuario e identifique los que son importantes para su complemento. Por ejemplo, seleccione una de las experiencias de primera ejecución.
* Después, siga uno o más de estos procedimientos:
	* Copie los archivos de código en el proyecto del complemento y empiece a personalizarlos para adaptarlos a sus requisitos. Necesitará la [carpeta de recursos](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) y la carpeta de código para el modelo de diseño que elija. Vea los vínculos a continuación.
	* Vea las especificaciones y úselas como guía al crear su propio diseño de la experiencia del usuario. Vea los vínculos a continuación.
	* Descargue los archivos de Adobe Illustrator y modifíquelos para crear un boceto de sus propios diseños de complemento. Descárguelos desde [aquí](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files).

## General

* 
            La **página de aterrizaje (o genérica)** es una página de complemento estándar. Los usuarios pueden redirigirse a una página de aterrizaje después de una experiencia de primera ejecución o proceso de inicio de sesión. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF"), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page))
* 
            La **imagen de marca en la barra de la marca** es la página de aterrizaje con una imagen en el pie de página que representa la marca. ([especificación](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar))

<table>
 <tr><th>Página de aterrizaje</th><th>Barra de marca</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="página de aterrizaje" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="barra de marca" style="width: 264px;"/></A></td></tr>
 </table>

## Primera ejecución

Una experiencia de primera ejecución es la experiencia que tiene un usuario al abrir el complemento por primera vez. En la lista siguiente se muestran los modelos de diseño que puede incluir en el complemento. A continuación se muestran imágenes de todos los modelos.

* 
            En **Primeros pasos** se proporciona a los usuarios una lista ordenada de pasos para empezar a usar su complemento. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step))
* 
            En **Valor** se comunica la propuesta de valor del complemento. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat))
* 
            En **Vídeo** se muestra a los usuarios un vídeo antes de que empiecen a usar el complemento. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat))
* 
            En el **tutorial**, se muestra a los usuarios una serie de características o información antes de que empiecen a usar el complemento. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough))
* La [Tienda Office](https://msdn.microsoft.com/es-es/library/office/jj220033.aspx) tiene un sistema que administra las versiones de prueba de un complemento, pero si quiere controlar la interfaz de usuario de la experiencia de prueba del complemento, use los siguientes modelos:

	* 
            En **Prueba** se muestra a los usuarios cómo empezar a usar una versión de prueba del complemento. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat))
	* 
            En **Característica de prueba** se informa a los usuarios de que la característica que intentan usar no está disponible en la versión de prueba del complemento. O bien, si el complemento es gratuito, pero tiene una característica que requiere una suscripción, debe considerar la opción de usar este modelo. También puede usar este modelo para proporcionar una experiencia de versión anterior una vez que ha finalizado la versión de prueba. ([código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature))

> Importante: Si decide administrar su propia versión de prueba y no usar la Tienda Office para administrar la prueba, asegúrese de incluir la etiqueta **Puede requerirse una compra adicional** en las notas de prueba en el panel del vendedor.

Determine si es importante para su escenario mostrar una o varias veces la experiencia de primera ejecución a los usuarios. Por ejemplo, si los usuarios usan el complemento de vez en cuando, es posible que se olviden de cómo usarlo. Volver a ver la experiencia de primera ejecución puede resultar útil para esos usuarios. 

 <table>
 <tr><th>Pasos para empezar</th><th>Valor</th><th>Vídeo</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step">![instruction steps" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat">![value placemat" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="video placemat" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Primera página del tutorial</th><th>Prueba</th><th>Característica de prueba</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough">![walkthrough 1" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat">![trial placemat" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="trial placemat feature" style="width: 264px;"/></A></td></tr>
 </table> 

## Notificaciones

Hay varias formas en que el complemento puede notificar a los usuarios de eventos, como errores o progreso. En la lista siguiente se muestran estas técnicas. A continuación se muestran imágenes de todos los modelos.

* **Diálogo insertado**: muestra un diálogo dentro del panel de tareas con información y, de manera opcional, una experiencia interactiva con botones u otros controles. Se puede usar para mostrar una notificación al usuario o para confirmar una acción. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog))
* **Mensaje en línea**: indica un error, una operación correcta o información, y puede aparecer en una ubicación especificada del panel de tareas. Por ejemplo, si un usuario escribe en un cuadro de texto una dirección de correo electrónico con un formato incorrecto, se muestra un mensaje de error justo debajo del cuadro de texto. ([especificación](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message))
* **Mensaje emergente**: proporciona información y, de manera opcional, una sencilla llamada a la acción en un mensaje emergente que se puede contraer a una única línea, expandir a varias líneas o descartar. Puede usar mensajes emergentes para informar sobre una actualización de servicio o para mostrar una sugerencia útil cuando se inicie el complemento. ([especificación](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner))
* **Barra de progreso**: indica el progreso de un proceso sincrónico de ejecución prolongada, como una tarea de configuración que es necesario completar antes de que el usuario pueda realizar otra acción. Es una página intersticial independiente que también refuerza la marca del complemento. Use una barra de progreso cuando el proceso pueda enviar medidas periódicas del progreso para informar al complemento. ([especificación](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar))
* **Indicador giratorio**: indica que se está realizando un proceso sincrónico de ejecución prolongada, pero no proporciona ninguna indicación de cuánto se ha completado. Es una página intersticial independiente que también refuerza la marca del complemento. Use un indicador giratorio cuando el complemento no pueda determinar de forma confiable qué parte del proceso se ha completado. ([especificación](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner))
* **Notificación del sistema**: proporciona un mensaje breve que desaparece después de unos segundos. Como es posible que el usuario no vea el mensaje, use la notificación del sistema solo para información que no se considere esencial. Es una opción adecuada para notificar a los usuarios de un evento en un sistema remoto, como el recibo de un correo electrónico. ([especificación](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast))

 <table>
 <tr><th>Diálogo insertado</th><th>Mensaje en línea</th><th>Mensaje emergente</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="diálogo insertado" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message">![inline message" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="banner de mensaje" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Barra de progreso</th><th>Indicador giratorio</th><th>Notificación del sistema</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="barra de progreso" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner">![spinner" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="notificación del sistema" style="width: 264px;"/></A></td></tr>
 </table>

## Componentes

Los siguientes componentes son adicionales y los puede usar en el complemento en una variedad de escenarios.  

### Diálogo de cliente

Los diálogos de cliente proporcionan otra forma para que los usuarios trabajen con el complemento. 

* 
            El **diálogo de alerta** muestra un cuadro de alerta con información importante, como errores o notificaciones más allá del control del usuario.
* 
            El **diálogo de Typeramp** muestra un cuadro de diálogo con contenido textual. Use el diálogo de Typeramp para mostrar información constructiva al usuario.
* 
            El **diálogo de navegación** muestra un cuadro de diálogo con la navegación. Use el diálogo de navegación para permitir que los usuarios naveguen entre contenido diferente.

<table>
 <tr><th>Diálogo de alerta</th><th>Diálogo de Typeramp</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="diálogo de alerta" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="diálogo de Typeramp" style="width: 300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>Diálogo de navegación</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation">![navigation dialog" style="width: 264px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png)</A></td></tr>
</tr>
 </table>


### Comentarios y calificaciones

Para mejorar la visibilidad y la adopción del complemento, debe proporcionar a los usuarios la capacidad de calificar y revisar el complemento en la Tienda Office. Este modelo muestra cómo presentar opciones de comentarios y calificaciones a los usuarios mediante:
- Comentarios no solicitados: con el menú o icono de navegación en el pie de página.
- Comentarios solicitados: después de ejecutar 3 veces el complemento, se le pide al usuario que proporcione comentarios.

 <table>
 <tr><th>Calificaciones y comentarios</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store">![Feedback and Ratings" style="width: 200px;](../https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG)</A></td></tr>
</tr>
 </table>

## Problemas conocidos

* Al ejecutar algunos archivos de código fuera de un proyecto de complemento, se muestra un error de JavaScript. 
	* Solución: Asegúrese de agregar los archivos a un proyecto de complemento de Office. 
* Tras convertir estos modelos de diseño en una aplicación de una página (SPA), todas las secciones de la página HTML se alinean a la parte superior y se superponen entre sí. 
	* Solución: Al convertir desde HTML, se pueden agregar otros DIV de contenedor. Asegúrese de que la altura de estos DIV adicionales se restablezca correctamente. Por ejemplo, si un DIV primario se establece en una altura de 100 %, un DIV secundario no tiene altura y un DIV descendiente del secundario se establece en 100 %, debe establecer el DIV secundario al 100 % para mostrar las secciones correctamente.    
	
## Recursos adicionales

* [Procedimientos recomendados de diseño para complementos de Office](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). Este proyecto usa la versión 2.1.0.

Este proyecto ha adoptado el [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) (Código de conducta de código abierto de Microsoft). Para obtener más información, consulte las [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) (Preguntas más frecuentes del código de conducta) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) con otras preguntas o comentarios.

Copyright (c) Microsoft Corporation 2016. Todos los derechos reservados.



