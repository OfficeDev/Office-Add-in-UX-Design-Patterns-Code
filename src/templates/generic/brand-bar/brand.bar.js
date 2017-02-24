(function ($) {
    $(document).ready(function () {
        function initializeContextualMenu() {
            var ContextualMenuElements = document.querySelectorAll(".dp-brand-bar--right");
            for (var i = 0; i < ContextualMenuElements.length; i++) {
                var ButtonElement = ContextualMenuElements[i].querySelector(".dp-brand-bar--right__button");
                var ContextualMenuElement = ContextualMenuElements[i].querySelector(".ms-ContextualMenu");
                new fabric['ContextualMenu'](ContextualMenuElement, ButtonElement);
            }
        }
        initializeContextualMenu();
    });
})(jQuery);
