# Office 增益集的 UX 設計模式。 

此儲存機制提供 Office 增益集的一般 UX 設計模式的 HTML 和 CSS 中的範例實作。

設計 Office 增益集時，增益集的 UX 設計應提供可擴充 Office 的絕佳體驗。若要建立出色的增益集，增益集應該提供初次執行體驗、最出色 UX 經驗，以及能夠流暢地在其他頁面間轉換。提供簡潔、最新的 UX 體驗能夠提升使用者忠誠度並讓更多人採用您的增益集。這個儲存機制具有開發人員的 UX 資源，會實作：

* 根據最佳作法的一般 UX 設計模式。
* Office Fabric 元件與樣式。
* 看起來像預設 Office UI 自然擴充的增益集。 

> 重要事項：自訂這些設計模式以符合您的需求之後，一定要在您的增益集可用的所有平台上測試增益集。使用 Office 2016 和 Windows 10 測試這些 UX 設計模式。

## 如何開始使用這些資源？

沒有任何先決條件，即可使用這些設計或程式碼資源。若要開始為您的增益集建立絕佳的 UX︰

* 檢閱 UX 設計模式，並找出哪些對增益集來說很重要。例如，挑選其中一個初次執行體驗。
* 執行下列一項或多項操作：
	* 將程式碼檔案複製到您的增益集專案，並開始自訂以符合您的需求。您將會需要[資產資料夾](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets)，和您所選擇之設計模式的程式碼資料夾。請參閱下列連結。
	* 建立您自己的 UX 設計時，請參閱規格並將它們作為指南使用。請參閱下列連結。
	* 下載 Adobe Illustrator 檔案並加以編輯，來模擬您自己的增益集設計。可在[這裡](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files)取得檔案。

## 一般

* **登陸 (或一般) 頁面**是標準增益集頁面。使用者可能會在初次執行體驗或登入程序之後被重新導向至登入登陸頁面。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF")、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page))
* **商標列中的商標影像**是登陸頁面，在頁尾具有代表您的品牌的影像。([規格](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar))

<table>
 <tr><th>登陸</th><th>品牌列</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="landing page" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="brand bar" style="width:264px;"/></A></td></tr>
 </table>

## 初次執行

初次執行體驗是使用者第一次開啟增益集時的體驗。下面列出您可在增益集中包含的初次執行設計模式。其中每個影像如下。

* **啟動步驟**為使用者提供步驟排序清單，即可開始使用增益集。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step))
* **值**傳達了增益集的價值主張。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat))
* **影片**在使用者開始增益集前會向其顯示影片。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat))
* **逐步解說**在使用者開始使用增益集前，會先帶他們了解一系列功能或資訊。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough))
* [Office 市集](https://msdn.microsoft.com/zh-tw/library/office/jj220033.aspx)具有系統，可以管理增益集的試用版，但是如果您想要控制增益集試用版的 UI 經驗，請使用下列模式︰

	* **試用版**向使用者示範如何開始使用增益集試用版。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat))
	* **試用版功能**會告知使用者，他們嘗試使用的功能在增益集試用版中無法使用。或者，如果您的增益集是免費的，但是其中有一些功能需要訂閱，您應該考慮使用這種模式。您也可以考慮使用這種模式，在試用版結束後，提供降級的經驗。([程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature))

> 重要事項：如果您決定要管理您自己的試用版，並且不使用 Office 市集來管理試用版，請確保您在賣方儀表板中的測試附註包含**可能需要另外購買**標記。

請考慮對您的案例來說，向使用者顯示一次或多次初次執行體驗是否很重要。例如，如果使用者是定期使用您的增益集，它們可能會忘記如何使用。再次看到初次執行體驗對這些使用者來說可能很有幫助。 

 <table>
 <tr><th>開始步驟</th><th>值</th><th>影片</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG" alt="instruction steps" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG" alt="value placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="video placemat" style="width:264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>逐步解說第一頁</th><th>試用版</th><th>試用版功能</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG" alt="walkthrough 1" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG" alt="trial placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="trial placemat feature" style="width:264px;"/></A></td></tr>
 </table> 

## 通知

增益集有多種方式，可以通知使用者事件 (例如錯誤) 或進度。下表列出這些技術。其中每個影像如下。

* **內嵌對話方塊**會在工作窗格顯示對話方塊，其中提供資訊，並使用按鈕或其他控制項選擇性地提供互動式體驗。請考慮使用其中一種來提示使用者確認動作。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog))
* **內嵌訊息**表示錯誤、成功或資訊，而且它可以出現在工作窗格中指定的位置。例如，如果使用者在文字方塊中輸入格式不正確的電子郵件地址，錯誤訊息就會出現在文字方塊的正下方。([規格](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message))
* **訊息橫幅**提供資訊，並選擇性地提供簡單的動作呼叫，該橫幅可摺疊成一行、展開成好幾行，或將其關閉。請考慮在增益集啟動時，使用訊息橫幅來報告服務更新或有用的提示。([規格](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner))
* **進度列**指出長時間執行、同步處理程序 (例如使用者在能夠採取任何動作前必須完成的設定工作) 的進度。它是個別的插入式頁面，其中同時會強調增益集的品牌。當程序可以定期將程序還需多久時間的量值傳回增益集時，請使用進度列。([規格](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar))
* **載入狀態圓環**表示長時間執行、同步處理程序正在進行中，但不會顯示還需多久的時間。它是個別的插入式頁面，其中同時會強調增益集的品牌。當增益集無法知道處理程序還需多久時，請使用載入狀態圓環。([規格](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner))
* **快顯通知**提供幾秒鐘後即會淡出的簡短訊息。因為使用者可能不會看到訊息，只對非必要的資訊才使用快顯通知。這是一個好選擇，可用在遠端系統中通知使用者接收電子郵件之類的事件。([規格](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md)、[程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast))

 <table>
 <tr><th>內嵌的對話方塊</th><th>內嵌訊息</th><th>訊息橫幅</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="embedded dialog" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG" alt="inline message" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="message banner" style="width:264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>進度列</th><th>載入狀態圓環</th><th>快顯通知</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="progress bar" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG" alt="spinner" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="toast" style="width:264px;"/></A></td></tr>
 </table>

## 元件

以下是您可以在各種案例的增益集中使用的其他元件。  

### 用戶端對話方塊

用戶端對話方塊提供您的使用者使用增益集的另一種方法。 

* **警示對話方塊**顯示具有重要資訊的警示方塊，例如錯誤或超出使用者控制的通知。
* **Typeramp 對話方塊**顯示具有文字內容的對話方塊。您可以使用 [typeramp] 對話方塊，向使用者顯示費盡心思的資訊。
* **瀏覽對話方塊**顯示具有瀏覽的對話方塊。使用 [瀏覽] 對話方塊允許使用者在不同的內容之間瀏覽。

<table>
 <tr><th>警示對話方塊</th><th>Typeramp 對話方塊</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="alert dialog" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="typeramp dialog" style="width:300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>瀏覽對話方塊</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png" alt="navigation dialog" style="width: 264px;"/></A></td></tr>
</tr>
 </table>


### 意見反應與評分

若要改善您的增益集的可視性和採用，您應該在 Office 市集為使用者提供評分和檢閱增益集的能力。此模式會示範如何為使用者呈現意見反應及評分選項，使用︰
- 自發性意見反應 - 使用頁尾上的瀏覽功能表或圖示。
- 系統提示意見反應 - 在增益集執行 3 次之後，系統會提示使用者提供意見反應。

 <table>
 <tr><th>評分和意見反應</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG" alt="Feedback and Ratings" style="width: 200px;"/></A></td></tr>
</tr>
 </table>

## 已知問題

* 執行增益集專案以外的某些程式碼檔案會擲回 JavaScript 錯誤。 
	* 解決方案：請確定您在 Office 增益集專案中加入這些檔案。 
* 將這些設計模式轉換為單一頁面應用程式 (SPA) 之後，HTML 網頁的所有區段會變成靠上對齊，並與彼此重疊。 
	* 解決方案：從 HTML 轉換時，可能會新增其他包裝函式 DIV。請確定適當重設這些額外的 DIV 的高度。例如，如果父系 DIV 設為 100% 的高度，子系 DIV 沒有高度，孫系 DIV 設為 100%，則您需要將子系 DIV 設為 100%，以適當地配置區段。    
	
## 其他資源

* [開發 Office 增益集的最佳作法](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI 結構](http://dev.office.com/fabric/).此專案會使用版本 2.1.0。

此專案已採用 [Microsoft 開放原始碼執行](https://opensource.microsoft.com/codeofconduct/)。如需詳細資訊，請參閱[程式碼執行常見問題集](https://opensource.microsoft.com/codeofconduct/faq/)，如果有其他問題或意見，請連絡 [opencode@microsoft.com](mailto:opencode@microsoft.com)。

Copyright (c) Microsoft Corporation 2016 著作權所有，並保留一切權利。



