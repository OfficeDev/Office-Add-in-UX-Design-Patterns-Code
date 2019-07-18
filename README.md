---
topic: sample
products:
- office-outlook
- office-excel
- office-powerpoint
- office-word
- office-365
languages:
- html
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  platforms:
  - CSS
  createdDate: 5/5/2016 2:01:42 PM
---
# UX design patterns for Office Add-ins 

This repository provides sample implementations in HTML, CSS, and JavaScript of common UX design patterns for Office Add-ins.

When designing Office Add-ins, the UX design of your add-in should provide compelling experiences that extend Office. For example, your add-in should provide a first-run experience, a first-class UX experience, and smooth transitions between pages, among other things. Providing a clean, modern UX experience increases user retention and adoption of your add-in. This repo has UX resources for developers that implement:

* Common UX design patterns based on best practices.
* Office Fabric components and styles.
* Add-ins that look like a natural extension of the default Office UI. 

For overview information and the types of UX design patterns available, see [UX design pattern templates for Office Add-ins](https://docs.microsoft.com/en-us/office/dev/add-ins/design/ux-design-pattern-templates).

> Important: After customizing these design patterns to meet your requirements, be sure to test your add-in on all platforms where your add-in will be available. These UX design patterns were tested using Office 2016 and Windows 10.

## Using the UX design patterns

You can use the [UX designer specifications](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns) as a guide when you create your own UX design, or you can add the [source code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates) directly to your project. To add the source code:

1. Clone this repo. 
2. Copy the [assets folder](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets), and the code folder for the individual pattern you choose to your add-in project.  
3. Incorporate the individual pattern into your add-in. For example:
	- Edit the source location or add-in command URL in the manifest.
	- Use the UX design pattern as a template for other pages.
	- Link to or from the UX design pattern.

## Known issues

* Running some code files outside of an add-in project throws a JavaScript error. 
	* Resolution: Ensure you add these files to an Office add-in project. 
* After converting these design patterns to a Single Page App (SPA), all sections of the HTML page become top-aligned and overlaps each other. 
	* Resolution: When converting from HTML additional wrapper DIVs may be added. Ensure that the height of these additional DIVs are reset properly. For example, if a parent DIV is set to a height of 100%, a child DIV has no height, and a grandchild DIV is set to 100%, you need to set the child DIV to 100% to layout the sections properly.    
	
## Additional resources

* [Best practices for developing Office Add-ins](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). This project uses version 2.1.0 or higher.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

Copyright (c) Microsoft Corporation 2016. All rights reserved.


