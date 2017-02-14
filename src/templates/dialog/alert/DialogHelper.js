/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */

(function () {
    "use strict";

    var app = window.app || {};
    app.dialog = {};

    function dialogCallback(asyncResult) {
        if (asyncResult.status == "failed") {
            console.log(asyncResult.error.message);
        }
        else {
            app.dialog = asyncResult.value;
            /*Messages are sent by developers programatically from the dialog using office.context.ui.messageParent(...)*/
            app.dialog.addEventHandler(Microsoft.Office.WebExtension.EventType.DialogMessageReceived, messageHandler);

            /*Events are sent by the platform in response to user actions or errors. For example, the dialog is closed via the 'x' button*/
            app.dialog.addEventHandler(Microsoft.Office.WebExtension.EventType.DialogEventReceived, eventHandler);
        }
    }

    function messageHandler(arg) {
        app.dialog.close();
    }

    function eventHandler(arg) {
        switch (arg.error) {
            case 12002:
                console.log("Cannot load URL, 404 not found?");
                break;
            case 12003:
                console.log("Invalid URL Syntax");
                break;
            case 12004:
                console.log("Domain not in AppDomain list");
                break;
            case 12005:
                console.log("HTTPS Required");
                break;
            case 12006:
                console.log("Dialog closed");
                break;
            case 12007:
                console.log("Dialog already opened");
                break;
        }
    }

    app.openDialog = function (URL, h, w) {
        Office.context.ui.displayDialogAsync(URL,
            { height: h, width: w }, dialogCallback);
    }

    window.app = app;
})();