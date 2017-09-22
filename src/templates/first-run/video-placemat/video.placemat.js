// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
var dialog;
(function ($) {
    "use strict";
    var overlay;
    Office.initialize = function () {
        $(document).ready(function () {
            var OverlayElement = document.querySelector('.ms-Overlay');
            overlay = new fabric['Overlay'](OverlayElement);
            function showMessage() {
                // Direct the user to view the video.
                $('.ms-MessageBar').attr('class', 'ms-MessageBar');
            }
            function removeMessage() {
                // Remove the messageBar from the task pane.
                $('.ms-MessageBar').attr('class', 'ms-MessageBar hidden');
            }
            ;
            function reEnableParentUI() {
                // Enable the button because they launched the video and then closed the dialog.
                $("#buttonGetStarted").prop("disabled", false);
            }
            $('#videoImage').click(function () {
                overlay.show();
                showMessage();
                reEnableParentUI();
                openDialog();
            });
            function dialogCallback(asyncResult) {
                if (asyncResult.status == "failed") {
                    // In addition to general system errors, there are 3 specific errors for 
                    // displayDialogAsync that you can handle individually.
                    switch (asyncResult.error.code) {
                        case 12004:
                            console.log("Domain is not trusted");
                            break;
                        case 12005:
                            console.log("HTTPS is required");
                            break;
                        case 12007:
                            console.log("A dialog is already opened.");
                            break;
                        default:
                            console.log(asyncResult.error.message);
                            break;
                    }
                }
                else {
                    dialog = asyncResult.value;
                    /*Messages are sent by developers programatically from the dialog using office.context.ui.messageParent(...)*/
                    dialog.addEventHandler(Office.EventType.DialogMessageReceived, messageHandler);
                    /*Events are sent by the platform in response to user actions or errors. For example, the dialog is closed via the 'x' button*/
                    dialog.addEventHandler(Office.EventType.DialogEventReceived, eventHandler);
                }
            }
            function messageHandler(arg) {
                dialog.close();
                console.log(arg.message);
            }
            function eventHandler(arg) {
                // In addition to general system errors, there are 2 specific errors 
                // and one event that you can handle individually.
                switch (arg.error) {
                    case 12002:
                        console.log("Cannot load URL, no such page or bad URL syntax.");
                        break;
                    case 12003:
                        console.log("HTTPS is required.");
                        break;
                    case 12006:
                        // The dialog was closed, typically because the user the pressed X button.
                        console.log("Dialog closed by user");
                        $('.ms-MessageBar').attr('class', 'ms-MessageBar hidden');
                        overlay.hide();
                        break;
                    default:
                        console.log("Undefined error in dialog window");
                        break;
                }
            }
            function openDialog() {
                var fullUrl = "https://localhost:3000/templates/first-run/video-placemat/dialog.html";
                Office.context.ui.displayDialogAsync(fullUrl, { height: 50, width: 50 }, dialogCallback);
            }
        });
    };
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZXMvZmlyc3QtcnVuL3ZpZGVvLXBsYWNlbWF0L3ZpZGVvLnBsYWNlbWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtIQUFrSDtBQUlsSCxJQUFJLE1BQVUsQ0FBQztBQUVmLENBQUMsVUFBQyxDQUFDO0lBQ0MsWUFBWSxDQUFDO0lBRWIsSUFBSSxPQUFXLENBQUM7SUFFaEIsTUFBTSxDQUFDLFVBQVUsR0FBRztRQUNoQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRWQsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRCxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFaEQ7Z0JBQ0kscUNBQXFDO2dCQUNyQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFFRDtnQkFDSSw0Q0FBNEM7Z0JBQzVDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQUEsQ0FBQztZQUVGO2dCQUNJLGdGQUFnRjtnQkFDaEYsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBRUQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNmLFdBQVcsRUFBRSxDQUFDO2dCQUNkLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLFVBQVUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBRUgsd0JBQXdCLFdBQWU7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFFakMseUVBQXlFO29CQUN6RSx1REFBdUQ7b0JBQ3ZELE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsS0FBSyxLQUFLOzRCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs0QkFDckMsS0FBSyxDQUFDO3dCQUNWLEtBQUssS0FBSzs0QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7NEJBQzdCLEtBQUssQ0FBQzt3QkFDVixLQUFLLEtBQUs7NEJBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOzRCQUN2QyxLQUFLLENBQUM7d0JBQ1Y7NEJBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUNuQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLE1BQU0sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUMzQiw4R0FBOEc7b0JBQzlHLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFFL0UsK0hBQStIO29CQUMvSCxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQy9FLENBQUM7WUFDTCxDQUFDO1lBR0Qsd0JBQXdCLEdBQU87Z0JBQzNCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBR0Qsc0JBQXNCLEdBQU87Z0JBRXpCLHFFQUFxRTtnQkFDckUsa0RBQWtEO2dCQUNsRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsS0FBSyxLQUFLO3dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQzt3QkFDNUQsS0FBSyxDQUFDO29CQUNWLEtBQUssS0FBSzt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQzlCLEtBQUssQ0FBQztvQkFDVixLQUFLLEtBQUs7d0JBQ04sMEVBQTBFO3dCQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7d0JBQ3JDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQzt3QkFDMUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNmLEtBQUssQ0FBQztvQkFDVjt3QkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7d0JBQzVDLEtBQUssQ0FBQztnQkFDZCxDQUFDO1lBQ0wsQ0FBQztZQUVEO2dCQUNJLElBQUksT0FBTyxHQUFHLHVFQUF1RSxDQUFDO2dCQUV0RixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQ3hDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDbkQsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoidGVtcGxhdGVzL2ZpcnN0LXJ1bi92aWRlby1wbGFjZW1hdC92aWRlby5wbGFjZW1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0LiBBbGwgcmlnaHRzIHJlc2VydmVkLiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBmdWxsIGxpY2Vuc2UgaW4gcm9vdCBvZiByZXBvLlxyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGZhYnJpYzogYW55O1xyXG52YXIgZGlhbG9nOmFueTtcclxuXHJcbigoJCkgPT4ge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgbGV0IG92ZXJsYXk6YW55O1xyXG5cclxuICAgIE9mZmljZS5pbml0aWFsaXplID0gKCkgPT4geyBcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgT3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXMtT3ZlcmxheScpO1xyXG4gICAgICAgICAgICBvdmVybGF5ID0gbmV3IGZhYnJpY1snT3ZlcmxheSddKE92ZXJsYXlFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlyZWN0IHRoZSB1c2VyIHRvIHZpZXcgdGhlIHZpZGVvLlxyXG4gICAgICAgICAgICAgICAgJCgnLm1zLU1lc3NhZ2VCYXInKS5hdHRyKCdjbGFzcycsICdtcy1NZXNzYWdlQmFyJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZU1lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG1lc3NhZ2VCYXIgZnJvbSB0aGUgdGFzayBwYW5lLlxyXG4gICAgICAgICAgICAgICAgJCgnLm1zLU1lc3NhZ2VCYXInKS5hdHRyKCdjbGFzcycsICdtcy1NZXNzYWdlQmFyIGhpZGRlbicpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVFbmFibGVQYXJlbnRVSSgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVuYWJsZSB0aGUgYnV0dG9uIGJlY2F1c2UgdGhleSBsYXVuY2hlZCB0aGUgdmlkZW8gYW5kIHRoZW4gY2xvc2VkIHRoZSBkaWFsb2cuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2J1dHRvbkdldFN0YXJ0ZWRcIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnI3ZpZGVvSW1hZ2UnKS5jbGljaygoKT0+e1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVFbmFibGVQYXJlbnRVSSgpO1xyXG4gICAgICAgICAgICAgICAgb3BlbkRpYWxvZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpYWxvZ0NhbGxiYWNrKGFzeW5jUmVzdWx0OmFueSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFzeW5jUmVzdWx0LnN0YXR1cyA9PSBcImZhaWxlZFwiKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIGFkZGl0aW9uIHRvIGdlbmVyYWwgc3lzdGVtIGVycm9ycywgdGhlcmUgYXJlIDMgc3BlY2lmaWMgZXJyb3JzIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5RGlhbG9nQXN5bmMgdGhhdCB5b3UgY2FuIGhhbmRsZSBpbmRpdmlkdWFsbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhc3luY1Jlc3VsdC5lcnJvci5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTIwMDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbWFpbiBpcyBub3QgdHJ1c3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMDA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhUVFBTIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTIwMDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQSBkaWFsb2cgaXMgYWxyZWFkeSBvcGVuZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFzeW5jUmVzdWx0LmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nID0gYXN5bmNSZXN1bHQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLypNZXNzYWdlcyBhcmUgc2VudCBieSBkZXZlbG9wZXJzIHByb2dyYW1hdGljYWxseSBmcm9tIHRoZSBkaWFsb2cgdXNpbmcgb2ZmaWNlLmNvbnRleHQudWkubWVzc2FnZVBhcmVudCguLi4pKi9cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuYWRkRXZlbnRIYW5kbGVyKE9mZmljZS5FdmVudFR5cGUuRGlhbG9nTWVzc2FnZVJlY2VpdmVkLCBtZXNzYWdlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8qRXZlbnRzIGFyZSBzZW50IGJ5IHRoZSBwbGF0Zm9ybSBpbiByZXNwb25zZSB0byB1c2VyIGFjdGlvbnMgb3IgZXJyb3JzLiBGb3IgZXhhbXBsZSwgdGhlIGRpYWxvZyBpcyBjbG9zZWQgdmlhIHRoZSAneCcgYnV0dG9uKi9cclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuYWRkRXZlbnRIYW5kbGVyKE9mZmljZS5FdmVudFR5cGUuRGlhbG9nRXZlbnRSZWNlaXZlZCwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYW5kbGVyKGFyZzphbnkpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJnLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKGFyZzphbnkpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbiBhZGRpdGlvbiB0byBnZW5lcmFsIHN5c3RlbSBlcnJvcnMsIHRoZXJlIGFyZSAyIHNwZWNpZmljIGVycm9ycyBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBvbmUgZXZlbnQgdGhhdCB5b3UgY2FuIGhhbmRsZSBpbmRpdmlkdWFsbHkuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFyZy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTIwMDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgbG9hZCBVUkwsIG5vIHN1Y2ggcGFnZSBvciBiYWQgVVJMIHN5bnRheC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTIwMDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIVFRQUyBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTIwMDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBkaWFsb2cgd2FzIGNsb3NlZCwgdHlwaWNhbGx5IGJlY2F1c2UgdGhlIHVzZXIgdGhlIHByZXNzZWQgWCBidXR0b24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCBieSB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubXMtTWVzc2FnZUJhcicpLmF0dHIoJ2NsYXNzJywgJ21zLU1lc3NhZ2VCYXIgaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5kZWZpbmVkIGVycm9yIGluIGRpYWxvZyB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvcGVuRGlhbG9nKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZ1bGxVcmwgPSBcImh0dHBzOi8vbG9jYWxob3N0OjMwMDAvdGVtcGxhdGVzL2ZpcnN0LXJ1bi92aWRlby1wbGFjZW1hdC9kaWFsb2cuaHRtbFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIE9mZmljZS5jb250ZXh0LnVpLmRpc3BsYXlEaWFsb2dBc3luYyhmdWxsVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaGVpZ2h0OiA1MCwgd2lkdGg6IDUwIH0sIGRpYWxvZ0NhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4iXX0=
