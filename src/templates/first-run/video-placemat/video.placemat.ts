// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.


declare var fabric: any;
var dialog:any;

(($) => {
    "use strict";

    let overlay:any;

    Office.initialize = () => { 
        $(document).ready(() => {
            
            let OverlayElement = document.querySelector('.ms-Overlay');
            overlay = new fabric['Overlay'](OverlayElement);

            function showMessage() {
                // Direct the user to view the video.
                $('.ms-MessageBar').attr('class', 'ms-MessageBar');
            }

            function removeMessage() {
                // Remove the messageBar from the task pane.
                $('.ms-MessageBar').attr('class', 'ms-MessageBar hidden');
            };

            function reEnableParentUI() {
                // Enable the button because they launched the video and then closed the dialog.
                $("#buttonGetStarted").prop("disabled", false);
            }

            $('#videoImage').click(()=>{
                overlay.show();
                showMessage();
                reEnableParentUI();
                openDialog();
            });

            function dialogCallback(asyncResult:any) {
                if (asyncResult.status == "failed") {
            
                    // In addition to general system errors, there are 3 specific errors for 
                    // displayDialogAsync that you can handle individually.
                    switch (asyncResult.error.code) {
                        case 12004:
                            console.log("Domain is not trusted");
                            break;
                        case 12005:
                        console.log("HTTPS is required");
                            break;
                        case 12007:
                        console.log("A dialog is already opened.");
                            break;
                        default:
                        console.log(asyncResult.error.message);
                            break;
                    }
                }
                else {
                    dialog = asyncResult.value;
                    /*Messages are sent by developers programatically from the dialog using office.context.ui.messageParent(...)*/
                    dialog.addEventHandler(Office.EventType.DialogMessageReceived, messageHandler);
            
                    /*Events are sent by the platform in response to user actions or errors. For example, the dialog is closed via the 'x' button*/
                    dialog.addEventHandler(Office.EventType.DialogEventReceived, eventHandler);
                }
            }
            
            
            function messageHandler(arg:any) {
                dialog.close();
                console.log(arg.message);
            }
            
            
            function eventHandler(arg:any) {
            
                // In addition to general system errors, there are 2 specific errors 
                // and one event that you can handle individually.
                switch (arg.error) {
                    case 12002:
                    console.log("Cannot load URL, no such page or bad URL syntax.");
                        break;
                    case 12003:
                    console.log("HTTPS is required.");
                        break;
                    case 12006:
                        // The dialog was closed, typically because the user the pressed X button.
                        console.log("Dialog closed by user");
                        $('.ms-MessageBar').attr('class', 'ms-MessageBar hidden');
                        overlay.hide();
                        break;
                    default:
                    console.log("Undefined error in dialog window");
                        break;
                }
            }
            
            function openDialog() {
                let fullUrl = "https://localhost:3000/templates/first-run/video-placemat/dialog.html";

                Office.context.ui.displayDialogAsync(fullUrl,
                    { height: 50, width: 50 }, dialogCallback);
            }

        });
    };
})(jQuery);

