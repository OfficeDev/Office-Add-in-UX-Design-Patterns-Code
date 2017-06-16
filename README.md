# UX design patterns for Office Add-ins

[![Build Status](https://travis-ci.org/OfficeDev/Office-Add-in-UX-Design-Patterns-Code.svg?branch=dev)](https://travis-ci.org/OfficeDev/office-js-helpers)

This repository provides sample implementations in HTML, CSS, and JavaScript of common UX design patterns for Office Add-ins.

When designing Office Add-ins, the UX design of your add-in should provide compelling experiences that extend Office. For example, your add-in should provide a first-run experience, a first-class UX, and smooth transitions between pages, among other things. Providing a clean, modern User Experience increases user retention and adoption of your add-in. This repo has UX resources for developers that implement:

* Common UX design patterns based on best practices.
* Office Fabric components and styles.
* Add-ins that look like a natural extension of the default Office UI.

For overview information and the types of UX design patterns available, see [UX design pattern templates for Office Add-ins](https://dev.office.com/docs/add-ins/design/ux-design-patterns).

> Important: After customizing these design patterns to meet your requirements, be sure to test your add-in on all platforms where your add-in will be available. These UX design patterns were tested using Office 2016 and Windows 10.

## Table of contents

- [Contributing to the UX design patterns](#user-content-contributing-to-the-ux-design-patterns)
- [Using the UX design patterns](#user-content-using-the-ux-design-patterns)
- [UX design patterns list](#user-content-ux-design-patterns-list)
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

You can  add the [source code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates) directly to your project. To add the source code:

1. Clone this repo.
2. Copy the [assets folder](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets), and the code folder for the individual pattern you choose to your add-in project.
3. Incorporate the individual pattern into your add-in. For example:
	- Edit the source location or add-in command URL in the manifest.
	- Use the UX design pattern as a template for other pages.
	- Link to or from the UX design pattern.

## UX design patterns list

#### Authentication

  * [Authentication Dialog Flow - Multiple Identity](src/docs/auth-multi.md) - Present a multi authentication screen to your end users.
  * [Authentication Dialog Flow - Single Identity](src/docs/auth-single.md) - Present a single identity authentication screen to your end users.

#### Branding
  
  * [Brand Bar](src/docs/brand-bar.md) - A space in the footer to include your brand name, logo and an optional settings access location.
  * [Splash Screen](src/docs/splash-screen.md) - This is a screen to display your company branding while the add-in is loading.
 
#### First-Run

  * [Carousel](src/docs/carousel.md) - Takes users through a series of features or informational steps before they start.
  * [Instruction Step](src/docs/instruction-step.md) - Provides users with an ordered list of instructions to get started.
  * [Trial](src/docs/trial.md) - Allows users to sign up for a trial.
  * [Trial Feature](src/docs/trial-feature.md) - Allows users to sign up for a trial for a specific feature.
  * [Value Placemat](src/docs/value-placemat.md) - Provides a clear value proposition and list of features.
  * [Video Placemat](src/docs/video-placemat.md) - Provides value through video content.

#### Navigation

  * [Back Button](src/docs/back-button.md) - Shows a task pane with Back and Next Page buttons.
  * [Contextual Menu](src/docs/contextual-menu.md) - Provides links to the main areas of an add-in. Also called "left nav" or "navigation pane."
  * [Pivot](src/docs/pivot.md) - Allows users to navigate between different content. 
  * [Tab Bar](src/docs/tab-bar.md) - Shows navigation links at the top of the add-in space using icons and labels.

#### Utility

  * [Command Bar](src/docs/command-bar.md) - A surface that houses commands that operate on the content or parent region it resides above.
  * [Embedded Dialog](src/docs/embedded-dialog.md) - Displays a dialog inside of the task pane or content add-in.
  * [Landing Page](src/docs/landing-page.md) - A generic layout, which can be utilized as a starting point for add-ins.
  * [Settings](src/docs/settings.md) - Displays common components that may be used within an add-in's settings menu.
  
#### Notification

  * [Progress Indicator](src/docs/progress-indicator.md) - Shows the completion status of an operation lasting more than 2 seconds.
  * [Spinner](src/docs/spinner.md) - Indicates to the user that things are processing.
  * [Toast](src/docs/toast.md) - Provides a brief message that fades away after a few seconds.

## Design Resources

* Prototyping
  * [Components](src/assets/design-resources/AddinUXDesign_UIComponents.ai)
  * [Patterns](src/assets/design-resources/AddinUXDesign_UXPatterns.ai)
* Outlook Mobile
  * [iOS](src/assets/design-resources/iOS-Addins-Components-Final.sketch)

## Known issues

* Running some code files outside of an add-in project throws a JavaScript error.
	* Resolution: Ensure you add these files to an Office add-in project.
* After converting these design patterns to a Single Page App (SPA), all sections of the HTML page become top-aligned and overlaps each other.
	* Resolution: When converting from HTML additional wrapper DIVs may be added. Ensure that the height of these additional DIVs are reset properly. For example, if a parent DIV is set to a height of 100%, a child DIV has no height, and a grandchild DIV is set to 100%, you need to set the child DIV to 100% to layout the sections properly.

## Additional resources

* [Best practices for developing Office Add-ins](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/)

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

Copyright © 2017 Microsoft Corporation. All rights reserved.


