# <a name="php-calendar-api-sample"></a>PHP 日历 API 示例 #

[日本 (日本語)](https://github.com/jasonjoh/php-calendar/blob/master/loc/readme-ja.md) (Japanese)

本示例演示如何从 PHP 使用[日历 API](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations)。 该示例应用是一个虚构的社区剧院莎士比亚节的“预告节目”应用。 用户可以连接自己的 Office 365 帐户，并将事件添加到自己的日历中，以了解他们要参与的节目时间。 用户可以选择邀请朋友，这将向每个受邀朋友发送会议请求。 

## <a name="api-features-used"></a>使用的 API 功能 ##

- 在用户的默认日历上创建事件
- 将附件添加到事件
- 将参加者添加到事件
- 使用[日历视图](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations#GetCalendarView)展开定期事件并显示一天的所有约会。

## <a name="required-software"></a>所需软件 ##

- [PHP 5.6](http://php.net/downloads.php)
- 能够提供 PHP 服务的 Web 服务器。

在我的测试中，我使用了安装在 Windows 8.1 笔记本电脑上的 IIS 8。 我使用 [Web 平台安装程序](http://www.microsoft.com/web/downloads/platform.aspx)安装了 PHP 5.6.0（仅限Windows/IIS）。

## <a name="running-the-sample"></a>运行示例 ##

假设你在启动之前安装了 PHP，并且 Web 服务器已配置为进程和服务器 PHP 文件。 

1. 下载示例项目或为其创建分支。
1. 在名为 `php-calendar` 的 Web 根目录中创建新目录。 将文件从存储库复制到此目录。
1. [在 Azure Active Directory 中注册应用](https://github.com/jasonjoh/office365-azure-guides/blob/master/RegisterAnAppInAzure.md)。 该应用应注册为登录 URL 为 `http://localhost/php-calendar` 的 Web 应用，并应获得“能够完全访问用户日历”的权限，该权限可在“委派权限”下拉列表中找到。
1. 编辑 `.\o365\ClientReg.php` 文件。 
    1. 复制在应用注册期间获取的应用的客户端 ID，并将其粘贴为 `$clientId` 变量的值。 
    1. 复制在应用注册期间创建的密钥，并将其粘贴为 `$clientSecret` 变量的值。
    1. 保存文件。
1. 如果 PHP 安装未配置更新的 CA 证书以验证 SSL，请求将会失败，除非你在服务器上运行 Fiddler 并在 `Office365Service.php` 中将 `$enableFiddler` 变量设置为 `true`。 或者，可以在对 `curl_exec` 进行任何调用之前直接插入以下行。 **但是，** 应注意，这样做会禁用任何 SSL 验证，这不应在生产中完成。

    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
1. 打开 Web 浏览器，浏览到 `http://localhost/php-calendar/home.php`。
1. 应能看到各种莎士比亚戏剧预告节目的时间列表。 单击任何“连接我的日历”按钮，登录到 Office 365。
1. 登录后，应该会将你重定向回主页，并且按钮现在应显示为“添加到日历”。 单击特定节目时间旁的按钮，将其添加到日历。 如果某个事件的“需要凭证”字段为“是”，它将包含凭证作为事件的附件。

## <a name="copyright"></a>版权 ##

版权所有 (c) Microsoft。保留所有权利。

----------
在 Twitter 上通过 [@JasonJohMSFT](https://twitter.com/JasonJohMSFT) 与我联系

关注 [Exchange 开发人员博客](http://blogs.msdn.com/b/exchangedev/)