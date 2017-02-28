(function ($) {
    $(document).ready(function () {
        Office.initialize = function () {
            initializeSettingsMenu();
        };
        function initializeSettingsMenu() {
            var $button = $('#settingsMenu');
            $('.ms-ContextualMenu').map(function (i, menu) { new fabric['ContextualMenu'](menu, $button[0]); });
        }
    });
})(jQuery);
