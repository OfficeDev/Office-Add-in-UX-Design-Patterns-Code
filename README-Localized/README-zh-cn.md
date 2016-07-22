# 适用于 Office 外接程序的 UX 设计模式。 

此存储库为 Office 外接程序提供了常见 UX 设计模式的 HTML 和 CSS 格式的示例实现。

在设计 Office 外接程序时，外接程序的 UX 设计应该提供引人注目的扩展 Office 体验。若要创建一个绝佳的外接程序，外接程序应该提供首次运行体验、一流的 UX 体验以及页面之间与其他功能之间的流畅切换。提供干净、现代的 UX 体验增加用户留存率和外接程序的采用率。本存储库为开发人员提供了 UX 资源，以实现：

* 基于最佳实践的常见 UX 设计模式。
* Office 结构组件和样式。
* 类似于默认 Office UI 自然延伸的外接程序。 

> 重要说明：自定义这些设计模式以满足你的需求后，请确保在你的外接程序可用的所有平台上测试你的外接程序。使用 Office 2016 和 Windows 10 对这些 UX 设计模式进行了测试。

## 如何开始使用这些资源？

使用这些设计或代码资源无需任何先决条件。开始为你的外接程序创建出色的 UX：

* 查看 UX 设计模式，并确定哪些模式对您的外接程序非常重要。例如，选取首次运行体验之一。
* 然后执行下列一项或多项操作：
	* 将代码文件复制到外接程序项目，并开始自定义这些代码文件以满足你的需求。你将需要 [assets 文件夹](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets)，以及适用于你所选的设计模式的代码文件夹。请参阅下面的链接。
	* 查看规范并将其用作创建自己的 UX 设计时的指南。请参阅下面的链接。
	* 下载 Adobe Illustrator 文件并编辑这些文件以模仿您自己的外接程序设计。从[此处](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files)获取文件。

## 常规

* **登录（或常规）页**是标准的外接程序页面。首次运行体验或登录过程后，用户可能被重定向到登录页。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF")、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page)）
* **品牌栏中的品牌图像**是页脚中带有图像的登录页，代表你的品牌。（[规范](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar)）

<table>
 <tr><th>登录</th><th>品牌栏</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="landing page" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="brand bar" style="width:264px;"/></A></td></tr>
 </table>

## 首次运行

首次运行体验是用户第一次打开您的外接程序时获得的体验。下面列出了可包含在外接程序中的首次运行设计模式。下面列出了每个设计模式的图像。

* **开始步骤**为用户提供执行步骤的排序列表以开始使用你的外接程序。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step)）
* **值**传达你的外接程序的价值主张。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat)）
* **视频**在用户开始使用你的外接程序之前向其展示视频。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat)）
* **演练**让用户在开始使用外接程序之前熟悉一系列功能或信息。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough)）
* [Office 应用商店](https://msdn.microsoft.com/zh-cn/library/office/jj220033.aspx)具有管理外接程序试用版的系统，但是如果你想要控制外接程序试用体验的 UI，请使用以下模式：

	* **试用版**向用户演示如何开始使用外接程序的试用版。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat)）
	* **试用版功能**提醒用户尝试使用的功能在外接程序试用版中不可用。或者，如果你的外接程序是免费的，但是其中的一项功能需要订阅，则应考虑使用此模式。你也可以考虑在试用结束后使用此模式以提供降级体验。（[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature)）

> 重要说明：如果你决定管理你自己的试用版，而不是使用 Office 应用商店对其进行管理，请确保将**可能需要额外购买**标记包括在卖家面板中的测试说明中。

考虑一次或多次向用户显示首次运行体验是否对你的方案非常重要。例如，如果用户定期使用你的外接程序，他们可能会忘记如何使用外接程序。再次看到首次运行体验可能对这些用户非常有帮助。 

 <table>
 <tr><th>开始步骤</th><th>值</th><th>视频</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step">![instruction steps" style="width: 264px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat">![value placemat" style="width: 264px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="video placemat" style="width:264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>演练第一页</th><th>试用版</th><th>试用版功能</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough">![walkthrough 1" style="width: 264px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat">![trial placemat" style="width: 264px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="trial placemat feature" style="width:264px;"/></A></td></tr>
 </table> 

## 通知

外接程序可以通过多个方法向用户通知事件，如错误、或进度。下面列出了这些技术。下面列出了每个技术的图像。

* **嵌入式对话框**显示在任务窗格中使用按钮或其他控件提供信息和互动体验（可选）的对话框。请考虑使用其中之一提示用户确认操作。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog)）
* **内联消息**表示错误、成功或信息，它可以出现在任务窗格中的指定位置。例如，如果用户在文本框中输入格式不正确的电子邮件地址，文本框正下方将出现一条错误消息。（[规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message)）
* **消息横幅**在可折叠为一行、扩展到多行或解除的横幅中提供信息和简单调用操作（可选）。考虑使用消息横幅来在外接程序启动时报告服务更新或有用的提示。（[规范](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner)）
* **进度栏**表示长期运行的同步过程（例如，用户在执行任何进一步操作前必须完成的配置任务）的进度。这是一个加强外接程序品牌的单独间隙页面。在过程可发送返回到外接程序的进度的定期度量值时使用进度栏。（[规范](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar)）
* **微调框**表示一个长时间运行的同步过程正在进行，但不提供这一过程的进度。这是一个也会加强外接程序品牌的单独间隙页面。在外接程序无法知晓某一过程的可靠进度时使用微调框。（[规范](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner)）
* **Toast** 提供一个会在几秒钟后消失的简短信息。由于用户可能看不到该消息，toast 仅用作非基本信息。这是在远程系统中通知用户某个事件的理想选择（例如收到一封电子邮件）。（[规范](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md)、[代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast)）

 <table>
 <tr><th>嵌入式对话框</th><th>内联消息</th><th>消息横幅</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="embedded dialog" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message">![inline message" style="width: 264px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="message banner" style="width:264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>进度栏</th><th>微调框</th><th>Toast</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="progress bar" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner">![spinner" style="width: 264px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG)</A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="toast" style="width:264px;"/></A></td></tr>
 </table>

## 组件

以下是你可以在各种方案中的外接程序中所使用的其他组件。  

### 客户端对话框

客户端对话框为你的用户提供了使用你的外接程序的另一种方法。 

* **警报对话框**显示具有重要信息的警告框，如超出用户控制范围的错误或通知。
* **Typeramp 对话框**显示具有文本内容的对话框。使用 typeramp 对话框向用户显示详细信息。
* **导航对话框**显示具有导航的对话框。使用导航对话框以允许用户在不同内容间导航。

<table>
 <tr><th>警报对话框</th><th>Typeramp 对话框</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="alert dialog" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="typeramp dialog" style="width:300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>导航对话框</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation">![navigation dialog" style="width: 264px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png)</A></td></tr>
</tr>
 </table>


### 反馈和评级

为了提高你的外接程序的可见性和采用率，你应在 Office 应用商店中为用户提供对你的外接程序进行评级和评价的功能。此模式演示了如何向用户呈现反馈和评级选项：
- 自发反馈 - 使用页脚上的导航菜单或图标。
- 有提示的反馈 - 外接程序运行 3 次后，将提示用户提供反馈。

 <table>
 <tr><th>评级和反馈</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store">![Feedback and Ratings" style="width: 200px;](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG)</A></td></tr>
</tr>
 </table>

## 已知问题

* 运行外接程序项目外的某些代码文件会引发 JavaScript 错误。 
	* 解决方案：确保将这些文件添加到 Office 外接程序项目。 
* 在这些设计模式转换为单页应用 (SPA) 后，HTML 页的所有部分变为顶部对齐并相互重叠。 
	* 解决方案：从 HTML 进行转换时，可能添加额外包装 DIV。确保正确重置这些额外 DIV 的高度。例如，若父级 DIV 设置为 100% 高度，子级 DIV 无高度，而孙级 DIV 设置为 100%，则你需要将子级 DIV 设置为 100% 以正确对部分进行布局。    
	
## 其他资源

* [开发 Office 外接程序的最佳实践](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI 结构](http://dev.office.com/fabric/)。此项目使用 2.1.0 版。

此项目采用 [Microsoft 开源行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅 [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)（行为准则常见问题解答），有任何其他问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。

Copyright (C) Microsoft Corporation 2016。保留所有权利。



