/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */


$(document).ready(function () {
    $('.ms-navigation-dialog__tab').each(function () {
        $('.ms-navigation-dialog__tab-link').click(openPage);
        // The click handler for selecting a page from the command bar menu.
        function openPage(evt) {
            // Go through all of the content, and hide them.
            var tabcontent = $(".ms-navigation-dialog__tabcontent");
            $(tabcontent).hide().removeClass('ms-navigation-dialog__tabcontent--active');

            var tab = $(".ms-navigation-dialog__tab-link--active");
            $(tab).removeClass('ms-navigation-dialog__tab-link--active');
            $(evt.target).addClass('ms-navigation-dialog__tab-link--active');
                        
            // Now display the content for the selectcommand bar item.
            $('#' + evt.target.getAttribute('data-tab')).show().addClass('ms-navigation-dialog__tabcontent--active');
        }        
    });

});