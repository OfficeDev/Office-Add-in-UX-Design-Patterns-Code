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


