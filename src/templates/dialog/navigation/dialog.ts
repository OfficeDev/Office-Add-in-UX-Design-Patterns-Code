/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */
/// <reference path="../../../../node_modules/@microsoft/office-js-helpers/dist/office.helpers.d.ts" />
declare var fabric: any;

(() => {
    Office.initialize = () => {
        $(document).ready(() => {
            $('#ok').click(() => OfficeHelpers.Dialog.close('OK'));
            $('#cancel').click(() => OfficeHelpers.Dialog.close('Cancel'));
            initializePivot();
        });
    };

    function initializePivot() {
        $('.ms-Pivot').map((i, pivot) => new fabric['Pivot'](pivot));
    }
})();
