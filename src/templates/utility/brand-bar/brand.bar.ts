// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
// See LICENSE in the project root for license information.

/**
 * Brand Bar Plugin
 *
 * Adds basic demonstration functionality of the Office Add-in Brand Bar component.
 *
 */

declare var fabric: any;

(($) => {
    $(document).ready(() => {
        Office.initialize = () => { 
            initializeSettingsMenu(); 
        };

        function initializeSettingsMenu() {
            let $button = $('#settingsMenu');            
            $('.ms-ContextualMenu').map((i, menu)=>{ new fabric['ContextualMenu'](menu, $button[0])});
        }
    });
})(jQuery);


