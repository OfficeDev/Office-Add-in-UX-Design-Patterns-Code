// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

/**
 * Toast component
 *
 * A component to display error messages
 *
 */

/**
 * @namespace fabric
 */
var fabric = fabric || {};
/**
 *
 * @param {number} timer - the expiration time for the toast in seconds. default is 5 seconds.
 * @constructor
 */
fabric.Toast = function (timer) {

    // toast message template
    var _template = '<div class="ms-toast" id="{{id}}">'
                    + '<div class="ms-toast__header">'
                    + '<h4 class="ms-toast__title ms-font-l ms-fontColor-themePrimary ms-fontWeight-semibold">{{title}}</h4>'
                    + '<i class="ms-toast__close ms-Icon ms-Icon--x"></i>'
                    + '</div>'
                    + '<div class="ms-toast__content">'
                    + '<i class="ms-toast__info ms-Icon ms-Icon--infoCircle ms-fontColor-themePrimary enlarge"></i>'
                    + '<p class="ms-toast__message ms-font-m">{{message}}</p>'
                    + '</div>'
                    + '</div>';
    var _maxLength = 150;
    var _closeButton;
    var _errorBanner;
    var _timer = timer || 5;
    var _id = 0;
    var _body = document.querySelector('body');

    /**
     * @function showToast - displays a toast
     * @memberOf fabric.Toast
     */
    var _showToast = function (title, message) {
        var toastContent = _template.replace('{{id}}', 'toast_' + (_id++));
        toastContent = toastContent.replace('{{title}}', title);
        toastContent = toastContent.replace('{{message}}', message);

        var toast = document.createElement('div');
        toast.innerHTML = toastContent;
        toast = toast.firstChild;

        var closeButton = toast.querySelector('.ms-toast__close');
        closeButton.addEventListener('click', _dismiss);

        // set the expiry of the toast
        setTimeout(function () { _dismiss(null, toast); }, 1000 * _timer);

        _body.appendChild(toast);

        // start toast appear animation
        toast.style.transform = 'translate3d(20px, 200px, 0)';

        // complete toast appear animation
        setTimeout(function () { toast.style.transform = 'translate3d(20px, -20px, 0)'; }, 0);
    }

    var _dismiss = function (event, cachedToast) {
        var toast = cachedToast || event.target.parentElement.parentElement;
        if (toast.className.indexOf('ms-toast') > -1) {
            toast.querySelector('.ms-toast__close').removeEventListener('click', _dismiss);
            toast.style.transform = 'translate3d(20px, 200px, 0)';

            // remove the toast object from the body when the animation completes
            setTimeout(function () {
                var el = document.querySelector('#' + toast.id);
                el.parentNode.removeChild(el);
            }, 300);
        }
    }

    return {
        showToast: _showToast
    };
};