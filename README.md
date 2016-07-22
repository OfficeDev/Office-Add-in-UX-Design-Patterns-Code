# UX design patterns for Office Add-ins 

This repository provides sample implementations in HTML, CSS, and JavaScript of common UX design patterns for Office Add-ins.

When designing Office Add-ins, the UX design of your add-in should provide compelling experiences that extend Office. For example, your add-in should provide a first-run experience, a first-class UX experience, and smooth transitions between pages, among other things. Providing a clean, modern UX experience increases user retention and adoption of your add-in. This repo has UX resources for developers that implement:

* Common UX design patterns based on best practices.
* Office Fabric components and styles.
* Add-ins that look like a natural extension of the default Office UI. 

> Important: After customizing these design patterns to meet your requirements, be sure to test your add-in on all platforms where your add-in will be available. These UX design patterns were tested using Office 2016 and Windows 10.

## How do I get started using these resources?

There are no prerequisites to use these design or code resources. To get started creating a great UX for your add-in:

* Review the UX design patterns, and identify which ones are important to your add-in. For example, pick one of the first-run experiences.
* Then do one or more of the following:
	* Copy the code files to your add-in project and start customizing them to meet your requirements. You will need the [assets folder](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets), and the code folder for the design pattern you choose. See links below.
	* Take a look at the specs and use them as a guide when creating your own UX design. See links below.
	* Download the Adobe Illustrator files and edit them to mock-up your own add-in designs. Get them [here](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files).

For more information about the availabe UX design patterns, see [UX design pattern templates for Office Add-ins](https://dev.office.com/docs/add-ins/design/ux-design-patterns).

## Known issues

* Running some code files outside of an add-in project throws a JavaScript error. 
	* Resolution: Ensure you add these files to an Office add-in project. 
* After converting these design patterns to a Single Page App (SPA), all sections of the HTML page become top-aligned and overlaps each other. 
	* Resolution: When converting from HTML additional wrapper DIVs may be added. Ensure that the height of these additional DIVs are reset properly. For example, if a parent DIV is set to a height of 100%, a child DIV has no height, and a grandchild DIV is set to 100%, you need to set the child DIV to 100% to layout the sections properly.    
	
## Additional resources

* [Best practices for developing Office Add-ins](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). This project uses version 2.1.0.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

Copyright (c) Microsoft Corporation 2016. All rights reserved.


