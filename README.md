# UX design patterns for Office Add-ins

[![Build Status](https://travis-ci.org/OfficeDev/Office-Add-in-UX-Design-Patterns-Code.svg?branch=dev)](https://travis-ci.org/OfficeDev/office-js-helpers)

This repository provides sample implementations in HTML, CSS, and JavaScript of common UX design patterns for Office Add-ins.

When designing Office Add-ins, the UX design of your add-in should provide compelling experiences that extend Office. For example, your add-in should provide a first-run experience, a first-class UX experience, and smooth transitions between pages, among other things. Providing a clean, modern UX experience increases user retention and adoption of your add-in. This repo has UX resources for developers that implement:

* Common UX design patterns based on best practices.
* Office Fabric components and styles.
* Add-ins that look like a natural extension of the default Office UI.

For overview information and the types of UX design patterns available, see [UX design pattern templates for Office Add-ins](https://dev.office.com/docs/add-ins/design/ux-design-patterns).

> Important: After customizing these design patterns to meet your requirements, be sure to test your add-in on all platforms where your add-in will be available. These UX design patterns were tested using Office 2016 and Windows 10.

## Table of contents

- [Contributing to the UX design patterns](#user-content-contributing-to-the-ux-design-patterns)
- [Using the UX design patterns](#user-content-using-the-ux-design-patterns)
- [Patterns list](#user-content-patterns-list)
- [Design Resources](#user-content-design-resources)
- [Known issues](#user-content-known-issues)
- [Additional Resources](#user-content-additional-resources)

## Contributing to the UX design patterns

1. Clone this repo.
2. Run `npm install`.
3. Run `npm start`.
4. Next steps:
	- An instance of `browser-sync` is launched to help you get started. Make sure you trust the certificate.
	- All the source files are located in the `src` folder.
	- The compiled files are generated in the `dist` folder. Note: Please don't make any changes here as these files are wiped clean.
	- Inside of the `dist` folder, you'll find a generated `manifest.xml`. Please sideload it to help debug inside of Office.
	- Upon sideloading, you should see a `Design Patterns` tab inside of the Office application.
	- Find your listed template and launch it. Note: If you get an error during this step, double check if you have trusted the certificate. If the error persists, make sure the path is correct in the generated manifest. If not, please log an `issue`.

## Using the UX design patterns

You can use the [UX designer specifications](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files) as a guide when you create your own UX design, or you can add the [source code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates) directly to your project. To add the source code:

1. Clone this repo.
2. Copy the [assets folder](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets), and the code folder for the individual pattern you choose to your add-in project.
3. Incorporate the individual pattern into your add-in. For example:
	- Edit the source location or add-in command URL in the manifest.
	- Use the UX design pattern as a template for other pages.
	- Link to or from the UX design pattern.

## Patterns list

#### Brand

  * [Brand Bar](src/templates/generic/brand-bar) - The brand bar is a space in the footer to include your brand name and logo.
  * [Splash Screen](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Splashscreen.md) - This is a screen for displaying your branding while the add-in is loading.
 
#### First-Run

  * [Paging Panel](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md) - Takes users through a series of features or information before they start using the add-in.
  * [Steps to Start](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md) - Provides users with an ordered list of steps to perform to get started using your add-in.
  * [Trial Feature](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/FirstRun_TrialFeature.md) - Allows unlocking a feature in an add-in, and signing-up for a trial version of the add-in.
  * [Trial Version](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md) - Shows users how to get started with a trial version of your add-in.
  * [Value Placemat](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md) - Communicates your add-in's value proposition.
  * [Video Placemat](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md) - Shows users a video before they start using your add-in.

<!--#### General-->
#### Authorization

  * [Authentication Dialog Single Identity](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Authentication_Dialog_Single_ID.md) - Present authentication screens to your end users.
  * [Authentication Dialog Multiple Identity](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Authentication_Dialog_Multiple_ID.md) - Present authentication screens to your end users.
  <!--* [Base Styles and Typography Ramp](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Base_styles_typeramp.md) - Basic guidelines for typography and padding.-->
  <!--* [Commands](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Commands.md) - Shows how to present the command bar in your add-in.-->
  <!--* [Multi-Section](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/MultiSection.md) - Displays a common layout and set of tools that may be used within an add-in.-->
  
#### Navigation

  * [Back Button](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Back_Button.md) - Shows a task pane with Back and Next Page buttons. 
  <!--* [Navigation](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Navigation.md) - Shows a hamburger menu in a task pane. -->
  <!--* [Navigation & Commands](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Navigation_%26_Commands.md) - Displays navigation and command options together.-->
  <!--* [Pivot](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Pivot.md) - Displays navigational links in a bar at the top of the add-in space.-->
  * [Tab Bar](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Tab_Bar.md) - Shows navigation links at the top of the add-in space using icons and labels.
  
#### Notifications

  <!--* [Client Dialog](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Client_Dialog.md) - Displays a dialog in the main space of the Office application.-->
  * [Embedded Dialog](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md) - Displays a dialog inside of the add-in space.
  <!--* [Feedback](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Feedback.md) - Allows an add-in to ask for customer feedback.-->
  * [Inline Message](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md) - Indicates error, success, or information.
  * [Message Banner](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md) - Provides information in a collapsible, dismissable banner.
  <!--* [Progress](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md) - Shows how to indicate the progress of a long-running process.-->
  * [Toast](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md) - Provides a brief message that fades away after a few seconds.

#### Utility
  * [Settings](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Settings.md) - Displays common components that may be used within an add-in's settings menu.

## Desgin Resources

* [Icon Production Template](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/Icon_production.pdf), *Open the pdf as reference, use the AI file for production*
* [Office UI Fabric Icon Master Sheet](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/OfficeUIFabric_icon_mastersheet.pdf), *Open the pdf as reference, use the AI file for production*
* Office Add-in Templates for Desktop
  * [Word Desktop](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Word_Desktop_reference.pdf)
  * [Excel Desktop](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Excel_Desktop_reference.pdf)
  * [PowerPoint Desktop](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_PowerPoint_Desktop_reference.pdf)
* Office Add-in Templates for iPad
  * [Word iPad](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Word_iPad_reference.pdf)
  * [Excel iPad](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Excel_iPad_reference.pdf)
  * [PowerPoint iPad](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_PowerPoint_iPad_reference.pdf)
* Outlook Mobile
  * [iOS](/src/assets/helpful-templates/outlook-mobile/)
* Store Experience Toolkit [(In Progress)](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Templates_StoreExperience.md)


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


