# <a name="php-calendar-api-sample"></a>PHP 行事曆 API 範例 #

[日本 (日本語)](https://github.com/jasonjoh/php-calendar/blob/master/loc/readme-ja.md) (Japanese)

本範例顯示如何使用 PHP 的[行事曆 API](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations)。 該範例應用程式是一個虛構社區劇院莎士比亞節的「即將演出」應用程式。 使用者可以連線至其 Office 365 帳戶，並將事件新增到他們的行事曆以記下要參加的演出時間。 使用者可以選擇邀請朋友，這將會傳送會議邀請給每位受邀朋友。 

## <a name="api-features-used"></a>使用的 API 功能 ##

- 在使用者的預設行事曆上建立事件
- 新增附件至事件
- 新增出席者至事件
- 使用[行事曆檢視](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations#GetCalendarView)展開週期性事件，並顯示一天內的所有約會。

## <a name="required-software"></a>必要的軟體 ##

- [PHP 5.6](http://php.net/downloads.php)
- 支援 PHP 的網頁伺服器。

在測試中，我使用了安裝在 Windows 8.1 筆記本電腦上的 IIS 8。 我使用 [Web 平台安裝程式](http://www.microsoft.com/web/downloads/platform.aspx)安裝了 PHP 5.6.0 (僅限 Windows/IIS)。

## <a name="running-the-sample"></a>執行範例 ##

假設您在啟動之前已安裝了 PHP，並且網路伺服器已設定為處理和服務 PHP 檔案。 

1. 下載或分岔範例專案。
1. 在網路根目錄中建立名為 `php-calendar` 的新目錄。 將檔案從存放庫複製到這個目錄中。
1. [在 Azure Active Directory 中註冊應用程式](https://github.com/jasonjoh/office365-azure-guides/blob/master/RegisterAnAppInAzure.md). 該應用程式應註冊為具有 `http://localhost/php-calendar` 登入 URL 的網路應用程式，並應獲得「具有使用者行事曆完整存取權」權限，該權限可在「委派的權限」下拉式清單中找到。
1. 編輯 `.\o365\ClientReg.php` 檔案。 
    1. 複製在應用程式註冊期間取得的應用程式用戶端識別碼，並將其貼為 `$clientId` 變數的值。 
    1. 複製在應用程式註冊期間建立的機碼，並將其貼為 `$clientSecret` 變數的值。
    1. 儲存檔案。
1. 如果您的 PHP 安裝未設定更新的 CA 憑證以驗證 SSL，除非您在伺服器上執行 Fiddler 並將 `Office365Service.php`中的 `$enableFiddler` 變數設定為 `true`，否則要求會失敗。 或者，您可以在呼叫 `curl_exec` 之前插入下行。 **不過，** 請注意，這麼做會停用任何 SSL 驗證，因此您不應在生產環境中執行此操作。

    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
1. 開啟網頁瀏覽器並瀏覽至 `http://localhost/php-calendar/home.php`。
1. 您應該會看到一份各個莎士比亞戲劇即將演出的時間表。 按下任一個 [連線我的行事曆] 按鈕以登入 Office 365。
1. 登入後，您將會重新導向至首頁，而按鈕現在會顯示為 [新增到行事曆]。 按一下指定演出時間旁的按鈕，以將它新增至您的行事曆。 「必要的憑證」欄位為「是」的事件將包含作為事件附件的憑證。

## <a name="copyright"></a>著作權 ##

Copyright (c) Microsoft.著作權所有，並保留一切權利。

----------
跟隨我的推特 ([@JasonJohMSFT](https://twitter.com/JasonJohMSFT))

請追蹤 [Exchange 開發人員部落格](http://blogs.msdn.com/b/exchangedev/)