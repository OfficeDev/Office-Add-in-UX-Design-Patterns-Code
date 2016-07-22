# Конструктивные шаблоны пользовательского интерфейса для надстроек Office. 

В этом репозитории представлены примеры реализации распространенных конструктивных шаблонов пользовательского интерфейса на HTML и CSS для надстроек Office.

Разрабатывая надстройки Office, следует учитывать, что дизайн пользовательского интерфейса надстройки должен привлекать пользователя и расширять возможности Office. Помимо прочего, качественная надстройка должна учитывать первый ее запуск, оставлять прекрасные впечатления от использования и обеспечивать плавные переходы между страницами. Понятный и современный интерфейс увеличивает популярность вашей надстройки среди пользователей. В этом репозитории представлены ресурсы для разработчиков, которые относятся к пользовательскому интерфейсу и позволяют реализовать следующее:

* Стандартные шаблоны пользовательского интерфейса, созданные на основе накопленного опыта.
* Компоненты и стили Office Fabric.
* Надстройки, прекрасно вписывающиеся в стандартный пользовательский интерфейс Office. 

> Важно! Настроив эти шаблоны в соответствии со своими требованиями, проверьте надстройку на всех платформах, где она будет доступна. Эти шаблоны пользовательского интерфейса были протестированы в Office 2016 и Windows 10.

## Как начать работу с этими ресурсами?

Для использования предоставленных шаблонов или файлов с кодом не нужно выполнять обязательные требования. Чтобы начать создавать превосходные пользовательские интерфейсы для своих надстроек:

* Изучите конструктивные шаблоны пользовательского интерфейса и определите, какие из них лучше всего подходят для вашей надстройки. Например, выберите один из интерфейсов, используемых при первом запуске.
* Затем выполните одно или несколько указанных ниже действий.
	* Скопируйте файлы с кодом в проект надстройки и начните настраивать их в соответствии со своими требованиями. Вам потребуются [папка с ресурсами](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) и папка с кодом для выбранного шаблона. Воспользуйтесь приведенными ниже ссылками.
	* Изучите спецификации и используйте их при создании собственного дизайна пользовательского интерфейса. Воспользуйтесь представленными ниже ссылками.
	* Скачайте файлы Adobe Illustrator и измените их, чтобы создать макеты интерфейса для надстройки. Вы можете скачать их [здесь](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files).

## Общие рекомендации

* **Целевая, или заглавная, страница** — это стандартная страница надстройки. Пользователи могут попадать на целевую страницу после первого запуска надстройки или при входе. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF"), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page).) 
* **Панель с фирменной символикой** — это целевая страница с изображением, представляющим торговую марку, в нижнем колонтитуле. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar).)

<table>
 <tr><th>Целевая страница</th><th>Панель с фирменной символикой</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="Целевая страница" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="Панель с фирменной символикой" style="width: 264px;"/></A></td></tr>
 </table>

## Первый запуск

Интерфейс, используемый при первом запуске, — это интерфейс, отображаемый для пользователя, когда тот запускает надстройку в первый раз. Ниже перечислены конструктивные шаблоны интерфейса, используемого при первом запуске, которые вы можете включить в свою надстройку. Ниже показаны изображения каждого из конструктивных шаблонов.

* **Steps to start** (Первые шаги). Предоставляет пользователям упорядоченный список действий для начала работы с надстройкой. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step).)
* **Value** (Решаемые задачи). Разъясняет, какие задачи можно решить с помощью надстройки. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat).)
* **Video** (Видео). Показывает пользователям видеоролик, прежде чем они начнут работать с надстройкой. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat).)
* **Walkthrough** (Пошаговое руководство). Предоставляет пользователям сведения о ряде функций или другую информацию, прежде чем они начнут работать с надстройкой. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough).)
* В [Магазине Office](https://msdn.microsoft.com/ru-ru/library/office/jj220033.aspx) предусмотрена система управления пробными версиями надстроек, но если вам нужно управлять пользовательским интерфейсом такой пробной версии, используйте следующие шаблоны:

	* **Trial** (Пробная версия). Показывает пользователям, как начать работу с пробной версией надстройки. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat).)
	* **Trial feature** (Пробная функция). Сообщает пользователю, что функция, которую он пытается использовать, недоступна в пробной версии надстройки. Кроме того, этот шаблон можно использовать, если надстройка предоставляется бесплатно, но в ней есть функция, для использования которой требуется подписка. С помощью этого шаблона вы также можете предоставлять ограниченную версию после окончания пробного периода. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature).)

> Важно! Если вы решите самостоятельно управлять подпиской, не применяя для этого Магазин Office, добавьте тег **Может потребоваться дополнительная покупка** в примечания по тестированию на панели мониторинга продаж.

Решите, сколько раз (один или несколько) необходимо отображать интерфейс первого запуска. Например, если пользователи нечасто работают с надстройкой, они могут забыть, как это делать. В таких случаях может быть полезно повторно отображать интерфейс первого запуска. 

 <table>
 <tr><th>Действия, необходимые для запуска</th><th>Решаемые задачи</th><th>Видео</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG" alt="instruction steps" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG" alt="value placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="Сопутствующее видео" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Первая страница пошагового руководства</th><th>Пробная версия</th><th>Пробная функция</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG" alt="walkthrough 1" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG" alt="trial placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="Пробная функция" style="width: 264px;"/></A></td></tr>
 </table> 

## Уведомления

Существует много способов, которыми надстройка может уведомлять пользователей о событиях, например об ошибках или ходе выполнения действий. Эти методы перечислены ниже. Ниже показаны изображения для каждого из методов.

* **Внедренное диалоговое окно** отображается в области задач. В нем представлены сведения и (при необходимости) интерактивный интерфейс с использованием кнопок и других элементов управления. Рекомендуем использовать диалоговое окно для подтверждения пользователем каких-либо действий. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog).)
* **Встроенное сообщение** отображает информацию об ошибках, успешном выполнении действий или другие сведения. Может отображаться в указанном расположении в области задач. Например, если пользователь вводит в текстовом поле электронный адрес в недопустимом формате, то под полем отобразится сообщение об ошибке. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message).)
* **Баннер с сообщением** предоставляет сведения или простые инструкции либо рекомендации. Его можно свернуть в одну строку, развернуть на несколько строк или закрыть. Баннеры с сообщениями рекомендуем использовать для информирования об обновлениях служб или отображения полезных советов при запуске надстройки. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner).)
* **Индикатор выполнения** показывает ход выполнения длительных синхронных процессов, например задач по настройке, которые необходимо выполнить, прежде чем пользователь сможет приступить к дальнейшим действиям. Это отдельная промежуточная страница, на которой также отображается фирменная символика надстройки. Используйте индикатор выполнения, если процесс может периодически отправлять сведения о том, сколько времени осталось до его завершения. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar).)
* **Индикатор работы** указывает на то, что выполняется длительный синхронный процесс, но не указывает, сколько времени осталось до его завершения. Это отдельная промежуточная страница, на которой также отображается фирменная символика надстройки. Используйте индикатор работы, если надстройка не может достоверно сообщить, сколько времени необходимо для завершения процесса. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner).)
* **Всплывающее уведомление** содержит краткое сообщение, исчезающее через несколько секунд. Так как пользователь может и не увидеть такое сообщение, всплывающие уведомления используются для отображения несущественной информации. Это хороший способ уведомлять пользователей о событиях в удаленной системе, например о получении электронного письма. ([Спецификация](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md), [код](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast).)

 <table>
 <tr><th>Внедренное диалоговое окно</th><th>Встроенное сообщение</th><th>Баннер с сообщением</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="Внедренное диалоговое окно" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG alt="inline message" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="Баннер с сообщением" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Индикатор выполнения</th><th>Индикатор работы</th><th>Всплывающее уведомление</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="Индикатор выполнения" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG alt="spinner" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="Всплывающее уведомление" style="width: 264px;"/></A></td></tr>
 </table>

## Компоненты

Ниже перечислены дополнительные компоненты, которые можно использовать в надстройке для различных сценариев.  

### Диалоговое окно клиента

Диалоговые окна клиентов обеспечивают еще один способ работы пользователей с надстройкой. 

* **Диалоговое окно с оповещением** содержит важные сведения, например сообщения об ошибках или уведомления, которые пользователь не может контролировать.
* **Диалоговое окно с набором шрифтов** содержит текстовый контент. С помощью этого диалогового окна можно показывать пользователю подробные сведения.
* **Диалоговое окно навигации** содержит элементы для навигации. С его помощью пользователи могут открывать различный контент.

<table>
 <tr><th>Диалоговое окно с оповещением</th><th>Диалоговое окно с набором шрифтов</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="Диалоговое окно с оповещением" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="Диалоговое окно с набором шрифтов" style="width: 300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>Диалоговое окно навигации</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png" alt="navigation dialog" style="width: 264px;"/></A></td></tr>
</tr>
 </table>


### Отзывы и оценки

Чтобы сделать надстройку более заметной и популярной, следует предоставить пользователям возможность оценивать и рецензировать надстройку в Магазине Office. В этом шаблоне показано, как предоставить пользователям возможность оставлять отзывы и ставить оценки следующими способами:
- без предложения (с помощью меню навигации или значка в нижнем колонтитуле);
- по запросу (после 3 запусков надстройки пользователю предлагается оставить отзыв).

 <table>
 <tr><th>Оценки и обратная связь</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG" alt="Feedback and Ratings" style="width: 200px;"/></A></td></tr>
</tr>
 </table>

## Известные проблемы

* При выполнении некоторых файлов с кодом за пределами проекта надстройки возникает ошибка JavaScript. 
	* Решение: добавьте эти файлы в проект Office. 
* После преобразования этих шаблонов в одностраничное приложение (SPA) все разделы HTML-страницы будут выровнены по верхнему краю и наложены друг на друга. 
	* Решение. При преобразовании из формата HTML могут быть добавлены дополнительные оболочки DIV. Убедитесь, что высота этих дополнительных оболочек сбрасывается надлежащим образом. Например, если для родительского элемента DIV задана высота 100 %, для дочернего элемента DIV высота не задана, а для внучатого элемента DIV задана высота 100 %, то для дочернего элемента необходимо задать высоту 100 %, чтобы правильно расположить разделы.    
	
## Дополнительные ресурсы

* [Рекомендации по разработке надстроек Office](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). В этом проекте используется версия 2.1.0.

Этот проект соответствует [правилам поведения Майкрософт, касающимся обращения с открытым кодом](https://opensource.microsoft.com/codeofconduct/). Читайте дополнительные сведения в [разделе вопросов и ответов по правилам поведения](https://opensource.microsoft.com/codeofconduct/faq/) или отправляйте новые вопросы и замечания по адресу [opencode@microsoft.com](mailto:opencode@microsoft.com).

© Корпорация Майкрософт (Microsoft Corporation), 2016 г. Все права защищены.



