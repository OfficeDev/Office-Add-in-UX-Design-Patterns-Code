# Authentication Dialog Flow - Single Identity Provider

Use dialogs to present authentication screens to your end users. Consider this UX design pattern when using a **single identity provider** and your add-in has **space to display that provider's button**. Compare to the [multiple identity providers ux design pattern](Authentication_Dialog_Multiple_ID.md).

## More Details

- **Microsoft Branded Sign-in Button** - When using Microsoft's Identity service you'll have the opportunity to use a branded sign-in button that is customizable to light and dark themes. [Learn more](https://azure.microsoft.com/en-us/documentation/articles/active-directory-branding-guidelines/#visual-guidance-for-sign-in).
- **Company Branding** - Azure Active Directory allows customization of sign-in and access panel pages for consistent look and feel with your services. [Learn More](https://azure.microsoft.com/en-us/documentation/articles/active-directory-add-company-branding/).
- **Dialog Sizing** - Target your dialogs to a few key widths or breakpoints for better responsive design. [Learn more](https://msdn.microsoft.com/windows/uwp/layout/screen-sizes-and-breakpoints-for-responsive-design)
- Current Fabric Version Used: [2.6.1](https://github.com/OfficeDev/office-ui-fabric-core/releases/tag/2.6.1)
- [Download .Ai (Adobe Illustrator) file](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Source%20Files/Authentication_Dialog_Single_ID.ai?raw=true)
- Find the Code Sample (To be published)

***
![Authentication Dialog Single Identity - Flowchart](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/titlepage.jpg)
Recommended screen flow for when using a single identity provider in your add-in.

![Authentication Flow - First run placemat](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_fre.jpg)
1. First Run Placemat - Place the branded sign-in button as a clear call-to action inside your add-in's UI.


![Authentication Dialog Single Identity - Provider Sign-in](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_providerui.jpg)
2. Provider Sign-in - The identity provider will have their own UI. Microsoft Azure Active Directory allows customization of sign-in and access panel pages for consistent look and feel with your service. [Learn More](https://azure.microsoft.com/en-us/documentation/articles/active-directory-add-company-branding/).


![Authentication Dialog Single Identity - Progress](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_progress.jpg)
3. Progress - Indicate progress while settings and UI load.

![Authentication Dialog Single Identity - Home Page](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_homepage.jpg)
4. Home Page - Land your users on a useful home page to begin their add-in experience.

![Authentication Dialog Single Identity - Sign-out](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_signout.jpg)
5. Sign-out - Include a discoverable entry point for users to manage their profile.

![Authentication Dialog Single Identity - Variant First Run Placemat](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_variantfre.jpg)
6. Variant First Run Placemat - Without UI space for a branded sign-in button, add-ins can begin authentication in a dialog. Above illustrates an add-in where a first run experience is launched from an add-in comand.

![Authentication Dialog Single Identity - Variant Provider Sign-in](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_variantproviderui.jpg)
7. Variant Provider Sign-in - Continue the sign-in experience with provider UI in a dialog.

![Authentication Dialog Single Identity - Variant Progress](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Single_ID/auth_dialog_singleid_variantprogress.jpg)
8. Variant Progress  - Indicate progress while settings and UI load. Close the dialog on complete.
