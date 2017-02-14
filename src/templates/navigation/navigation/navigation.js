// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
// See LICENSE in the project root for license information.

(function ($) {
    "use strict";

    Office.initialize = function () {
        $(document).ready(function () {

            // Initialize fabric components
            if ($.fn.ContextualMenu) {
                $('.ms-ContextualMenu').ContextualMenu();
            }

            $('#myButton').click(function () {
                document.getElementById("myDropdown").classList.toggle("is-open");
            });
        });
    };

})(jQuery);