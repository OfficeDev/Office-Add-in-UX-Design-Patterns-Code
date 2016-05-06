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

            // Hides the dialog.
            document.getElementById("buttonCancel").onclick = function () {
                $("#showEmbeddedDialog").css('visibility', 'hidden');
            }

           
        });

    };

   

   
}());