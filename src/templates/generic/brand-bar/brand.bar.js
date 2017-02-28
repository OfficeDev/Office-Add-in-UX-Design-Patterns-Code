(function ($) {
    $(document).ready(function () {
        Office.initialize = function () {
            initializeSettingsMenu();
        };
        function initializeSettingsMenu() {
            var button = $('#settingsMenu');
            $('.ms-ContextualMenu').map(function (i, menu) { return new fabric['ContextualMenu'](menu, button); });
        }
    });
})(jQuery);
