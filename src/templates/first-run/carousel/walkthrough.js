// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

(function () {
    "use strict";

    var app = window.app || {};
    app.firstrun = {};
    app.firstrun.stage = 1;

    
    $(document).ready(function () {

        app.firstrun.totalPages = $('#pageMarkers').get(0).childElementCount;

        // Navigates to a different stage
        app.firstrun.newStage = function () {
            if (this.id === 'next') {
                app.firstrun.nextStage();
            } else {
                app.firstrun.previousStage();
            }
        };

        $('.change-stage').click(app.firstrun.newStage);

        // Navigates to the next stage of the First Run experience.
        app.firstrun.nextStage = function () {
            var nextToLastPage = app.firstrun.totalPages - 1;
            switch (app.firstrun.stage) {
                case nextToLastPage:
                    // Render the special last page UI, e.g., the Next button disappears.
                    app.firstrun.showLastStage();
                    break;
                default:
                    // Note the "+ 1" in the parameter, so the next page is rendered.
                    app.firstrun.showIntermediateStage(app.firstrun.stage + 1);
                    break;
            }
        };

        // Navigates to the previous stage of the First Run experience.
        app.firstrun.previousStage = function () {

            switch (app.firstrun.stage) {
                case 2:
                    // Render the special first page UI, e.g., the Previous button disappears.
                    app.firstrun.showStartStage();
                    break;
                default:
                    // Note the "- 1" in the parameter, so the previous page is rendered.
                    app.firstrun.showIntermediateStage(app.firstrun.stage - 1);
                    break;
            }
        };

        app.firstrun.showStartStage = function() {

            // The UI pattern that is unique to the start stage
            $('#welcomeHeadline').show();
            $('#goToHomeLabel')[0].innerText = "Skip ";
            $('#next').attr('class', 'change-stage ms-font-m ms-fontColor-white');
            $('#previous').attr('class', 'invisible');

            // UI changes that apply to all stage transitions
            app.firstrun.setStageUI(1);
        };
       
        app.firstrun.showIntermediateStage = function (nextStage) {

            // The UI pattern that is unique to intermediate stages
            $('#welcomeHeadline').hide();
            $('#goToHomeLabel')[0].innerText = "Skip ";
            $('#next').attr('class', 'change-stage ms-font-m ms-fontColor-white');
            $('#previous').attr('class', 'change-stage ms-font-m ms-fontColor-white');

            // UI changes that apply to all stage transitions
            app.firstrun.setStageUI(nextStage);
        };

        app.firstrun.showLastStage = function () {

            // The UI pattern that is unique to the last stage
            $('#welcomeHeadline').hide();
            $('#goToHomeLabel')[0].innerText = "Get Started ";
            $('#next').attr('class', 'invisible');
            $('#previous').attr('class', 'change-stage ms-font-m ms-fontColor-white');

            // UI changes that apply to all stage transitions
            app.firstrun.setStageUI(app.firstrun.totalPages);
        };

        app.firstrun.setStageUI = function (stage) {
            $('.page' + stage).show().siblings().hide();
            app.firstrun.setStageProgress(stage);
            app.firstrun.stage = stage;
        }

        app.firstrun.setStageProgress = function (stage) {
            $('#page' + stage + "Marker").attr('class', 'ms-fontColor-white');
            $('#page' + stage + "Marker").siblings().attr('class', 'ms-fontColor-themeTertiary');
        }
    });    
    window.app = app;
})();