// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

(function () {
    "use strict";

    // The initialize function must be run each time a new page loads.
    Office.initialize = function () {
        $(document).ready(function () {
            document.getElementById("videoimage").onclick = function () {
                showVideoDialog();
            }
        });
    };

    // Closes the dialog window. Consider adding additional code here that runs after the video finishes.
    function reEnableParentUI(arg) {
        // Enable the button because they launched the video and then closed the dialog.
        $("#buttonGetStarted").prop("disabled", false);
    }

    // Use the display dialog to open a pop-up and display the video.
    function showVideoDialog() {
        var fullUrl = "https://localhost:3000/templates/first-run/video-placemat/video.dialog.html";

        // Height and width are percentages of the size of the parent Office application, e.g. PowerPoint, Excel, Word, etc.
        Office.context.ui.displayDialogAsync(fullUrl,
            { height: 50, width: 50, requireHTTPS: false }, reEnableParentUI);
    }
}());