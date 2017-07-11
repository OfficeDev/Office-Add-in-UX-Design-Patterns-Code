// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
// See LICENSE in the project root for license information.

// (function ($) {
//     "use strict";

//     $(document).ready(function () {

//         // Initialize fabric components
//         if ($.fn.ContextualMenu) {
//             $('.ms-ContextualMenu').ContextualMenu();
//         }

//         $('#myButton').click(function () {
//             document.getElementById("myDropdown").classList.toggle("is-open");
//         });
//     });
// })(jQuery);

declare var fabric: any;

(($) => {
    $(document).ready(() => {
        Office.initialize = () => { 
            initializeDropdown(); 
            initializeToggle();
            initializeButton();
        };

        function initializeDropdown() {
            let $dropdown = $('#list');            
            $('.ms-Dropdown').map((i, menu)=>{ new fabric['Dropdown'](menu, $dropdown[0])});
        }

        function initializeToggle() {
            let $toggle = $('#toggle');            
            $('.ms-Toggle').map((i, menu)=>{ new fabric['Toggle'](menu, $toggle[0])});
        }

        function initializeButton() {
            let $button = $('#button');            
            $('.ms-Button').map((i, menu)=>{ new fabric['Button'](menu, $button[0])});
        }
    });
})(jQuery);
