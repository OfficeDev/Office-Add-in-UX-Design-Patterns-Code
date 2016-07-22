# UX design pattern templates for Office Add-ins 

This repository provides sample HTML, CSS, and JavaScript implementations of common UX design patterns for Office Add-ins. Use the UX design pattern templates to:

- Apply solutions to common customer scenarios.
- Apply design best practices.
- Incorporate Office UI Fabric components and styles.
- Build add-ins that visually integrate with the default Office UI. 

For an overview of the templates, see [UX design pattern templates](http://dev.office.com/docs/add-ins/design/ux-design-patterns).

> Important: After you customize these templates to meet your needs, be sure to test your add-in on all platforms where your add-in will be available. These UX design patterns were tested using Office 2016 and Windows 10.

## Get started

You can get started with these design and code resources right away. To use these patterns in your Office Add-in:

* Review the [UX design patterns](http://dev.office.com/docs/add-ins/design/ux-design-patterns), and identify which ones are important to your add-in. 
* Do one or more of the following:
	* Copy the code files to your add-in project and customize them to meet your needs. You will need the [assets folder](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets), and the code folder for the design pattern you choose.
	* Take a look at the [specs](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/tree/master/Patterns/PDF) and use them as a guide when you create your UX design. 
	* Download the [Adobe Illustrator](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files) files and edit them to mock-up your own add-in designs.


## Known issues

* Running some code files outside of an add-in project throws a JavaScript error. 
	* Resolution: Make sure that you add these files to an Office add-in project. 
* When you convert these design patterns to a Single Page App (SPA), all sections of the HTML page become top-aligned and overlap each other. 
	* Resolution: When you convert from HTML, additional wrapper DIVs might be added. Make sure that the height of these additional DIVs are reset properly. For example, if a parent DIV is set to a height of 100%, a child DIV has no height, and a grandchild DIV is set to 100%, you need to set the child DIV to 100% to lay out the sections properly.    
	
## Additional resources

* [Best practices for developing Office Add-ins](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/) (this project uses version 2.1.0)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

Copyright (c) Microsoft Corporation 2016. All rights reserved.


