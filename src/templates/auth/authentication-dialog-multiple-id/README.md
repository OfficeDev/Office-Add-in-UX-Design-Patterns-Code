# Authentication Dialog Flow - Multiple Identity Providers

Use dialogs to present authentication screens to your end users. Consider this UX design pattern when using **multiple identity providers** or your add-in has **no space to display branded sign-in buttons**. Compare to [single identity provider ux design pattern](Authentication_Dialog_Single_ID.md).

## More Details

- **Microsoft Branded Sign-in Button** - When using Microsoft's Identity service you'll have the opportunity to use a branded sign-in button that is customizable to light and dark themes. [Learn more](https://azure.microsoft.com/en-us/documentation/articles/active-directory-branding-guidelines/#visual-guidance-for-sign-in).
- **Company Branding** - Azure Active Directory allows customization of sign-in and access panel pages for consistent look and feel with your services. [Learn More](https://azure.microsoft.com/en-us/documentation/articles/active-directory-add-company-branding/).
- **Dialog Sizing** - Target your dialogs to a few key widths or breakpoints for better responsive design. [Learn more](https://msdn.microsoft.com/windows/uwp/layout/screen-sizes-and-breakpoints-for-responsive-design)
- Current Fabric Version Used: [2.6.1](https://github.com/OfficeDev/office-ui-fabric-core/releases/tag/2.6.1)
- [Download .Ai (Adobe Illustrator) file](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Source%20Files/Authentication_Dialog_Multiple_ID.ai?raw=true)
- Find the Code Sample (To be published)

***

![Authentication Dialog Multiple Identity - Flowchart](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/titlepage.jpg)
Recommended screen flow for when using multiple identity providers in your add-in.


![Authentication Flow - First Run Placemat](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_fre.jpg)
1. First Run Placemat - The screen contains a clear call to action, "Sign-in"


![Authentication Dialog Multiple Identity - Provider Choices](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_choices.jpg)
2. Provider Choices - End users are presented with a set of identity providers to choose from, including an authentication form. Note that the add-in UI is on hold until the dialog closes.


![Authentication Dialog Multiple Identity - Provider Sign-in](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_providerui.jpg)
3. Provider Sign-in - The identity provider will have their own UI. Microsoft Azure Active Directory allows customization of sign-in and access panel pages for consistent look and feel with your service. [Learn More](https://azure.microsoft.com/en-us/documentation/articles/active-directory-add-company-branding/).


![Authentication Dialog Multiple Identity - Progress](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_progress.jpg)
4. Progress - Indicate progress while settings and UI load. 


![Authentication Dialog Multiple Identity - Home Page](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_homepage.jpg)
5. Home Page - Land your users on a useful home page to begin their add-in experience.


![Authentication Dialog Multiple Identity - Sign-out](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_signout.jpg)
6. Sign-out - Include a discoverable entry point for users to manage their profile.


![Authentication Dialog Multiple Identity - Provider choices variant A](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_variantA.jpg)
7. Provider Choices Variant A - Authentication form with multiple provider sign-in buttons.

![Authentication Dialog Multiple Identity - Provider choices variant B](https://raw.githubusercontent.com/OfficeDev/Office-Add-in-UX-Design-Patterns/master/Patterns/Assets/Authentication_Dialog_Multiple_ID/auth_dialog_multiid_variantB.jpg)
7. Provider Choices Variant B - Multiple provider sign-in buttons.
