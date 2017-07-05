// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
// See LICENSE in the project root for license information.

declare var fabric: any;

(($) => {
    $(document).ready(() => {
        Office.initialize = () => { 
            initializeSettingsMenu(); 
        };

        function initializeSettingsMenu() {
            let $button = $('#mainMenu');            
            $('.ms-ContextualMenu').map((i, menu)=>{ new fabric['ContextualMenu'](menu, $button[0])});
        }

        //$('.ms-ContextualMenu-link:has(.ms-Icon)').css('lineHeight', '0')
    });
})(jQuery);