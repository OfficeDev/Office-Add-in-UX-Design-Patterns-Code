# 适用于 Office 外接程序的 UX 设计模式 

此存储库为 Office 外接程序提供了常见 UX 设计模式的 HTML、CSS 和 JavaScript 中的示例实现。

在设计 Office 外接程序时，外接程序的 UX 设计应该提供引人注目的扩展 Office 体验。例如，外接程序应该提供首次运行体验、一流的 UX 体验以及页面之间与其他功能之间的流畅切换。提供干净、现代的 UX 体验增加用户留存率和外接程序的采用率。本存储库为开发人员提供了 UX 资源，以实现：

* 基于最佳实践的常见 UX 设计模式。
* Office 结构组件和样式。
* 类似于默认 Office UI 自然延伸的外接程序。 

有关概述信息以及可用的 UX 设计模式的类型，请参阅 [UX design pattern templates for Office Add-ins](https://dev.office.com/docs/add-ins/design/ux-design-patterns)（适用于 Office 外接程序的 UX 设计模式模板）。

> 重要说明：自定义这些设计模式以满足你的需求后，请确保在你的外接程序可用的所有平台上测试你的外接程序。使用 Office 2016 和 Windows 10 对这些 UX 设计模式进行了测试。

## 使用 UX 设计模式

在创建你自己的 UX 设计时，可以使用 [UX 设计器规范](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files)作为指南，或者直接将[源代码](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates)添加到你的项目。添加源代码：

1. 克隆该存储库。 
2. 将 [assets 文件夹](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets)和所选的个人模式的代码文件夹复制到外接程序项目。  
3. 将个人模式纳入到外接程序中。例如：
	- 编辑清单中的源位置或外接程序命令 URL。
	- 将 UX 设计模式用作其他页面的模板。
	- 链接至 UX 设计模式。

## 已知问题

* 运行外接程序项目外的某些代码文件会引发 JavaScript 错误。 
	* 解决方案：确保将这些文件添加到 Office 外接程序项目。 
* 在这些设计模式转换为单页应用 (SPA) 后，HTML 页的所有部分变为顶部对齐并相互重叠。 
	* 解决方案：从 HTML 进行转换时，可能添加额外包装 DIV。确保正确重置这些额外 DIV 的高度。例如，若父级 DIV 设置为 100% 高度，子级 DIV 无高度，而孙级 DIV 设置为 100%，则你需要将子级 DIV 设置为 100% 以正确对部分进行布局。    
	
## 其他资源

* [开发 Office 外接程序的最佳实践](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI 结构](http://dev.office.com/fabric/)。此项目使用 2.1.0 版或更高版本。

此项目采用 [Microsoft 开源行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅 [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)（行为准则常见问题解答），有任何其他问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。

Copyright (C) Microsoft Corporation 2016。保留所有权利。



