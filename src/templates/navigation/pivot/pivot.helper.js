// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
// See LICENSE in the project root for license information.

// Initialize the pivot and breadcrumb components
(function ($) {
    "use strict";
    Office.initialize = function () {
        $(document).ready(function () {
            if ($.fn.Pivot) {
                $('.ms-Pivot').Pivot();
            }
            var breadcrumbs = document.querySelectorAll('.ms-Breadcrumb');

            var Breadcrumb1 = new fabric['Breadcrumb'](breadcrumbs[0]);
            var Breadcrumb2 = new fabric['Breadcrumb'](breadcrumbs[1]);
            var Breadcrumb3 = new fabric['Breadcrumb'](breadcrumbs[2]);
            var Breadcrumb4 = new fabric['Breadcrumb'](breadcrumbs[3]);
        });
    };
})(jQuery);


