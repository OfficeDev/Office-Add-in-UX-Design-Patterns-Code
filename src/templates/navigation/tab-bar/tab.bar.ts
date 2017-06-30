(($) => {
    $(document).ready(() => {
        $('.dp-tab-bar__button').click(function() {
            $(".dp-tab-bar__button").removeClass('dp-tab-bar--active');
            $('.dp-tab-bar__button--text').removeClass('ms-fontWeight-semibold');
            $(this).addClass('dp-tab-bar--active');
            $('.dp-tab-bar--active .dp-tab-bar__button--text').addClass('ms-fontWeight-semibold');
        })
    });
})(jQuery);