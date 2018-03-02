# <a name="ux-design-patterns-for-office-add-ins"></a>Office 增益集的 UX 設計模式 

此儲存機制提供 Office 增益集的一般 UX 設計模式的 HTML、CSS 和 JavaScript 中的範例實作。

設計 Office 增益集時，增益集的 UX 設計應提供可擴充 Office 的絕佳體驗。例如，您的增益集應該提供初次執行體驗、最出色 UX 經驗，以及能夠流暢地在其他頁面間轉換。提供簡潔、最新的 UX 體驗能夠提升使用者忠誠度並讓更多人採用您的增益集。這個儲存機制具有開發人員的 UX 資源，會實作：

* 根據最佳作法的一般 UX 設計模式。
* Office Fabric 元件與樣式。
* 看起來像預設 Office UI 自然擴充的增益集。 

如需可用的 UX 設計模式概觀資訊及類型，請參閱 [Office 增益集的 UX 設計模式範本](https://dev.office.com/docs/add-ins/design/ux-design-patterns)。

> 重要事項：自訂這些設計模式以符合您的需求之後，一定要在您的增益集可用的所有平台上測試增益集。使用 Office 2016 和 Windows 10 測試這些 UX 設計模式。

## <a name="using-the-ux-design-patterns"></a>使用 UX 設計模式

當您要建立自己的 UX 設計時，可以使用 [UX 設計工具的規格](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns)做為指引，或可以直接將[原始程式碼](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates)新增至您的專案。若要新增原始原始碼︰

1. 複製此儲存機制。 
2. 將[資產資料夾](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets)及您所選的個別模式的程式碼資料夾，複製到您的增益集專案。  
3. 將個別模式納入您的增益集。例如：
    - 編輯資訊清單中的來源位置或增益集命令 URL。
    - 使用 UX 設計模式作為其他網頁的範本。
    - 從 UX 設計模式連結或連結至 UX 設計模式。

## <a name="known-issues"></a>已知問題

* 執行增益集專案以外的某些程式碼檔案會擲回 JavaScript 錯誤。 
    * 解決方案：請確定您在 Office 增益集專案中加入這些檔案。 
* 將這些設計模式轉換為單一頁面應用程式 (SPA) 之後，HTML 網頁的所有區段會變成靠上對齊，並與彼此重疊。 
    * 解決方案：從 HTML 轉換時，可能會新增其他包裝函式 DIV。請確定適當重設這些額外的 DIV 的高度。例如，如果父系 DIV 設為 100% 的高度，子系 DIV 沒有高度，孫系 DIV 設為 100%，則您需要將子系 DIV 設為 100%，以適當地配置區段。    
    
## <a name="additional-resources"></a>其他資源

* [開發 Office 增益集的最佳做法](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI 結構](http://dev.office.com/fabric/)。此專案會使用版本 2.1.0 或更新版本。

此專案已採用 [Microsoft 開放原始碼執行](https://opensource.microsoft.com/codeofconduct/)。如需詳細資訊，請參閱[程式碼執行常見問題集](https://opensource.microsoft.com/codeofconduct/faq/)，如果有其他問題或意見，請連絡 [opencode@microsoft.com](mailto:opencode@microsoft.com)。

Copyright (c) Microsoft Corporation 2016.著作權所有，並保留一切權利。


