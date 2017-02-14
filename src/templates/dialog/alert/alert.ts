/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */

(() => {
    Office.initialize = () => {
        $(document).ready(() => {
            $('#ok-button').click(messageParent);
        });
    };

    function messageParent() {
        Office.context.ui.messageParent('ok');
    }
})();
