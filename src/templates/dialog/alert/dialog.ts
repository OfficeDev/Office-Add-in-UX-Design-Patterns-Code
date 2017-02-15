/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */
/// <reference path="../../../../node_modules/@microsoft/office-js-helpers/dist/office.helpers.d.ts" />

(($) => {
    $(document).ready(() => {
        Office.initialize = () => {
            $('#ok').click(() => OfficeHelpers.Dialog.close('OK'));
        };
    });
})(jQuery);
