// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license 
// information.

(function () {
    "use strict";

    Office.initialize = function (reason) {
        $(document).ready(function () {
            $('#action-button').click(handleButton);
        });
    };

    function handleButton() {
        app.openDialog("https://localhost:3000/templates/dialog/alert/alert.html", 10, 30);
    }
   
}());