# Modelos de diseño de la experiencia de usuario para complementos de Office 

Este repositorio proporciona implementaciones de ejemplo en HTML, CSS y JavaScript de patrones de diseño comunes de experiencia del usuario para los complementos de Office.

Al diseñar complementos de Office, hay que procurar que la experiencia del usuario del complemento sea atractiva y que amplíe las funciones de Office. Por ejemplo, este debe tener una experiencia de primera ejecución, ofrecer una experiencia del usuario de primera clase y facilitar una transición suave entre las páginas, entre otras cosas. Una experiencia del usuario moderna y sin complicaciones aumenta la retención de usuarios y la adopción del complemento. En este repositorio hay recursos para desarrolladores que implementan:

* Modelos de diseño de la experiencia del usuario comunes basados en procedimientos recomendados.
* Componentes y estilos de Office Fabric.
* Complementos que parecen una extensión natural de la interfaz de usuario predeterminada de Office. 

Para obtener información general y los tipos de modelos de diseño de la experiencia del usuario disponibles, consulte [Modelos de diseño de la experiencia del usuario para complementos de Office](https://dev.office.com/docs/add-ins/design/ux-design-patterns).

> Importante: Tras personalizar estos patrones de diseño para que cumplan los requisitos, asegúrese de probar el complemento en todas las plataformas en las que estará disponible. Estos patrones de diseño de experiencia del usuario se han probado con Office 2016 y Windows 10.

## Usar los modelos de diseño de la experiencia del usuario

Puede usar las [especificaciones de diseñadores de la experiencia del usuario](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files) como guía a la hora de crear su propio diseño de la experiencia del usuario o puede agregar el [código fuente](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates) directamente al proyecto. Para agregar el código fuente:

1. Clone este repositorio. 
2. Copie la [carpeta de activos](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) y la carpeta de código para el modelo individual que elija en su proyecto de complemento.  
3. Incorpore el modelo individual al complemento. Por ejemplo:
	- Edite la ubicación de origen o la URL del comando en el manifiesto.
	- Use el modelo de diseño de la experiencia del usuario como modelo para otras páginas.
	- Cree vínculos al modelo de diseño de la experiencia del usuario o desde este.

## Problemas conocidos

* Al ejecutar algunos archivos de código fuera de un proyecto de complemento, se muestra un error de JavaScript. 
	* Solución: Asegúrese de agregar los archivos a un proyecto de complemento de Office. 
* Tras convertir estos modelos de diseño en una aplicación de una página (SPA), todas las secciones de la página HTML se alinean a la parte superior y se superponen entre sí. 
	* Solución: Al convertir desde HTML, se pueden agregar otros DIV de contenedor. Asegúrese de que la altura de estos DIV adicionales se restablezca correctamente. Por ejemplo, si un DIV primario se establece en una altura de 100 %, un DIV secundario no tiene altura y un DIV descendiente del secundario se establece en 100 %, debe establecer el DIV secundario al 100 % para mostrar las secciones correctamente.    
	
## Recursos adicionales

* [Procedimientos recomendados de diseño para complementos de Office](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). Este proyecto usa la versión 2.1.0 o posterior.

Este proyecto ha adoptado el [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) (Código de conducta de código abierto de Microsoft). Para obtener más información, consulte las [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) (Preguntas más frecuentes del código de conducta) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) con otras preguntas o comentarios.

Copyright (c) Microsoft Corporation 2016. Todos los derechos reservados.



