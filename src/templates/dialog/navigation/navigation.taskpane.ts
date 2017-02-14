/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */

(() => {
    Office.initialize = () => {
        $(document).ready(() => {
            $('#action-button').click(handleButton);
        });
    };

    function handleButton() {
        app.openDialog("https://localhost:3000/templates/dialog/navigation/navigation.html", 50, 50);
    }
})();
