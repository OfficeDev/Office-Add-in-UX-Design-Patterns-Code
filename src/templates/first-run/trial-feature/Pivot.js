﻿// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
// See LICENSE in the project root for license information.

/**
 * Pivot Plugin
 *
 * Adds basic demonstration functionality to .ms-Pivot components.
 *
 */
(function ($) {
    $.fn.Pivot = function () {

        /** Go through each pivot we've been given. */
        return this.each(function () {

            var $pivotContainer = $(this);

            /** When clicking/tapping a link, select it. */
            $pivotContainer.on('click', '.ms-Pivot-link', function (event) {
                event.preventDefault();
                /** Check if current selection has elipses child element */
                var $elipsisCheck = $(this).find('.ms-Pivot-ellipsis');

                /** Find pivot content linked to the current pivot */
                var pivotContentSelector = $(this).attr('data-pivotContent');
                var $pivotContent = $(pivotContentSelector);

                /** Only execute when no elipses element can be found */
                if ($elipsisCheck.length === 0) {

                    $(this).siblings('.ms-Pivot-link.is-selected').each(function (index, element) {

                        /** Check if the pivot is attached to any content */
                        /** Use data attribute as selector instead of forcing id/class */
                        var contentSelector = $(element).attr('data-pivotContent');
                        if (contentSelector) {
                            /** Remove selection for pivot content */
                            $(contentSelector).removeClass('is-selected');
                        }

                        /** Remove pivot selection */
                        $(this).removeClass('is-selected');
                    });

                    /** Add pivot & pivot-content selection */
                    $(this).addClass('is-selected');
                    $pivotContent.addClass('is-selected');
                }

            });

        });

    };
})(jQuery);