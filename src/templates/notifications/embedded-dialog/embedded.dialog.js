// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
// See LICENSE in the project root for license information.

(function () {
    "use strict";


    // The initialize function must be run each time a new page loads.
    Office.initialize = function () {

        
        $(document).ready(function () {
            
            //Shows the dialog in the task pane when the button is clicked. 
            document.getElementById("buttonCommand").onclick = function () {                
                $("#showEmbeddedDialog").css('visibility', 'visible');
            }

            // Hides the dialog.
            document.getElementById("buttonClose").onclick = function () {
                $("#showEmbeddedDialog").css('visibility', 'hidden');
            }

            // Cancels the action and closes the dialog.
            document.getElementById("buttonCancel").onclick = function () {
                $("#showEmbeddedDialog").css('visibility', 'hidden');
            }

            // Performs the action and closes the dialog.
            document.getElementById("buttonOk").onclick = function () {
                // Do action here.
                $("#showEmbeddedDialog").css('visibility', 'hidden');
            }
        });

    };

   

   
}());