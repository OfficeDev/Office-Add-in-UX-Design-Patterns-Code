/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */

(() => {
    Office.initialize = () => {
        $(document).ready(() => {
            $('#action-button').click(() => {
                let dialog = new OfficeHelpers.Dialog('dialog.html', 1024, 768);
                return dialog.result;
            });
        });
    };
})();
