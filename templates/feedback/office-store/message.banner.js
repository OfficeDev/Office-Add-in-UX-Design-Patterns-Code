// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

(function () {
    "use strict";

    // The code in this file leverages Fabric's message banner code, but it has been customized
    // to meet the needs of this scenario.

    var app = window.app || {};
    app.notification = {};

    $(document).ready(function () {
        /**
         * Define the MessageBanner constructor
         * @param {HTMLElement} container - the target container for an instance of MessageBanner
         * @constructor
         */
         app.notification.MessageBanner = function (container) {
             this.container = container;
             this.init();
        };

         app.notification.MessageBanner.prototype = CreatePrototype();

         // Create a MessageBanner components for every element in 
         // the page that is styled as a MessageBanner.
         $('.ms-MessageBanner').each(function () {
             new app.notification.MessageBanner(this);
         });


        function CreatePrototype(){

            var _clipper;
            var _bufferSize;
            var _textContainerMaxWidth = 700;
            var _clientWidth;
            var _textWidth;
            var _initTextWidth;
            var _chevronButton;
            var _errorBanner;
            var _closeButton;
            var _bufferElementsWidth = 88;
            var _bufferElementsWidthSmall = 35;
            var SMALL_BREAK_POINT = 480;

            /**
             * sets styles on resize
             */
            var _onResize = function() {
                _clientWidth = _errorBanner.offsetWidth;
                if(window.innerWidth >= SMALL_BREAK_POINT ) {
                    _resizeRegular();
                } else {
                    _resizeSmall();
                }
                _expand();
            };

            /**
             * resize above 480 pixel breakpoint
             */
            var _resizeRegular = function() {
                if ((_clientWidth - _bufferSize) > _initTextWidth && _initTextWidth < _textContainerMaxWidth) {
                    _textWidth = "auto";
                    //_chevronButton.className = "ms-MessageBanner-expand";
                    _collapse();
                } else {
                    _textWidth = Math.min((_clientWidth - _bufferSize), _textContainerMaxWidth) + "px";
                    if(_chevronButton.className.indexOf("is-visible") === -1) {
                       // _chevronButton.className += " is-visible";
                    }
                }
                _clipper.style.width = _textWidth;
            };

            /**
             * resize below 480 pixel breakpoint
             */
            var _resizeSmall = function() {
                if (_clientWidth - (_bufferElementsWidthSmall + _closeButton.offsetWidth) > _initTextWidth) {
                    _textWidth = "auto";
                    _collapse();
                } else {
                    _textWidth = (_clientWidth - (_bufferElementsWidthSmall + _closeButton.offsetWidth)) + "px";
                }
                _clipper.style.width = _textWidth;
            };
            /**
             * caches elements and values of the component
             */
            var _cacheDOM = function(context) {
                _errorBanner = context.container;
                _clipper = context.container.querySelector('.ms-MessageBanner-clipper');
                _chevronButton = context.container.querySelector('.ms-MessageBanner-expand');
                _bufferSize = _bufferElementsWidth;
                _closeButton = context.container.querySelector('.ms-MessageBanner-close');
            };

            /**
             * expands component to show full error message
             */
            var _expand = function() {              
                _errorBanner.className += " is-expanded";               
            };

            /**
             * collapses component to only show truncated message
             */
            var _collapse = function() {                
                _errorBanner.className = "ms-MessageBanner";               
            };

            var _toggleExpansion = function() {
                if (_errorBanner.className.indexOf("is-expanded") > -1) {
                    _collapse();
                } else {
                    _expand();
                }
            };

            /**
             * hides banner when close button is clicked
             */
            var _hideBanner = function() {
                if(_errorBanner.className.indexOf("hide") === -1) {
                    _errorBanner.className += " hide";
                    setTimeout(function() {
                        _errorBanner.className = "ms-MessageBanner is-hidden";
                    }, 500);

                    // If the user selects the X, they have dismissed the ratings message
                    // banner, and should be prompted again.
                    localStorage.AppUseCount = 0;
                    $('#ReviewMessageBanner').hide();
                }
            };

            /**
             * shows banner if the banner is hidden
             */
            var _showBanner = function() {
                _errorBanner.className = "ms-MessageBanner";
            };

            /**
             * sets handlers for resize and button click events
             */
            var _setListeners = function() {
                window.addEventListener('resize', _onResize, false);               
                _closeButton.addEventListener("click", _hideBanner, false);
            };

            /**
             * initializes component
             */
            var init = function() {
                _cacheDOM(this);
                _setListeners();
                _clientWidth = _errorBanner.offsetWidth;
                _initTextWidth = _clipper.offsetWidth;
                _onResize(null);
            };

            return {
                init: init,
                showBanner: _showBanner
            };
        };
    }); 
    window.app = app;
})();