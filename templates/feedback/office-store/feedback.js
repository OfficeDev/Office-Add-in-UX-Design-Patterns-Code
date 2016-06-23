// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

(function () {
    "use strict";

    // The Office initialize function must be run on each page that has
    // script that calls the Office.js library.
    Office.initialize = function () { };

    $(document).ready(function () {

        // replace the following URL with a relative URL. 
        var strURL = "https://localhost:3000/templates/feedback/office-store/dialog.redirect.html";

        if ($.fn.ContextualMenu) {
            $('.ms-ContextualMenu').ContextualMenu();
        }
        $('#ReviewMessageBanner').hide();
        incrementAddinUsageCountAndRate();

        $(".ms-Icon--menu").click(function () {
            if ($("#navMenu").hasClass("is-open")) {
                hideDropDown();
            } else {
                showDropDown();
            }
        });

        $("#btnYes").click(function () {
            // We must first open the dialog using a page in our project, and then redirect 
            // to the Office Store. If you try to open the Office Store directly in the dialog,
            // you will be prompted to login in an embedded dialog within the dialog. 
            // This is not a good user experience.
            showPopup(strURL);
        });

        $("#btnNo").click(function () {
            // The user selected No, so don't show the rating message banner again.
            localStorage.DoNotRate = true;
            $('#ReviewMessageBanner').hide();
        });

        $("#feedbackItem").click(function () {
            // We must first open the dialog using a page in our project, and then redirect 
            // to the Office Store. If you try to open the Office Store directly in the dialog,
            // you will be prompted to login in an embedded dialog within the dialog. 
            // This is not a good user experience.
            showPopup(strURL);
            hideDropDown();
        });

        $(".ms-Icon--smiley").click(function () {
            // We must first open the dialog using a page in our project, and then redirect 
            // to the Office Store. If you try to open the Office Store directly in the dialog,
            // you will be prompted to login in an embedded dialog within the dialog. 
            // This is not a good user experience.
            showPopup(strURL);
            hideDropDown();
        });

        function showPopup(url) {

            // height and width are percentages of the size of the parent Office application 
            // e.g. PowerPoint, Excel, Word, etc.

            Office.context.ui.displayDialogAsync(url,
                                                { height: 75, width: 80, requireHTTPS: true }
                                                );            
        }

        function showDropDown() {
            $('#navMenu').attr('class', 'ms-ContextualMenu is-open');
        }

        function hideDropDown() {
            $('#navMenu').attr('class', 'ms-ContextualMenu');
        }

        function incrementAddinUsageCountAndRate() {

            // This function initializes and increments the add-in usage count rate and 
            // optionally shows a message banner asking the user to provide a rating.
            
            var MaxAttemptsBeforeShowingRating = 3; //This is the number of times the add-in runs before prompting the user to rate the add-in.            

            if (typeof (Storage) !== "undefined") {
                // Your browser supports the use of localStorage.

                if (localStorage.AppUseCount) {
                    localStorage.AppUseCount = Number(localStorage.AppUseCount) + 1;
                }
                else {
                    localStorage.AppUseCount = 1;
                }

                if ((localStorage.AppUseCount >= MaxAttemptsBeforeShowingRating) && (!localStorage.DoNotRate)) {
                    // Prompt the user to rate the add-in.
                    $('#ReviewMessageBanner').show();
                    localStorage.AppUseCount = 0;
                }
                
            }
            else {
                // Your browser does not support the use of localStorage.
                // Provide alternate experience or appropriate error message.
            }
        }
    });
})();