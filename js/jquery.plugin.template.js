/**
 * jQuery plugin template
 * Featuring public and private methods and overridable/extensible defaults.
 * 
 * @requires jQuery {@link https://jquery.com/}
 * @author Firstname Lastname <email@address.dom>
 * @license LICENSE (/path/to/LICENSE.md)
 */

'use strict';

(function($, window, document, undefined) {
    /**
     * This plugin's name. Used for namespacing,
     * console errors, jQuery's data.
     * 
     * @type {string}
     * @private
     */
    const pluginName = 'jQueryPlugin';

    /**
     * Capitalized plugin name for the console messages.
     * 
     * @type {string}
     * @private
     */
    const displayName = pluginName.charAt(0).toUpperCase() + pluginName.slice(1);

    /**
     * All the publicly available methods.
     * 
     * @type {object}
     * @private
     */
     const methods = {
        /**
         * Returns the element's parameters.
         * 
         * @example
         * // Returns {settings...}
         * const instance = $(element).jQueryPlugin('getInstance');
         * 
         * @returns {(undefined|object)} The element's settings.
         * @public
         */
        getInstance() {
            return $(this).data(pluginName);
        },

        /**
         * Public method with arguments.
         * 
         * @example
         * $(element).jQueryPlugin('publicMethod', options);
         * 
         * @param {mixed} options Any kind of argument.
         * @public
         */
        publicMethod(options) {
            // Do something with $(this) and options...
        },
    };

    class Plugin {
        /**
         * Initialize the target element and extend the default options with the
         * caller's parameters; then, start core logic.
         * 
         * @param {object} element The target element's identifier.
         * @param {object} options Parameters - defaults extending eventual options.
         * @private
         */
        constructor(element, options) {
            this.element = $(element);
            this.settings = $.extend(true, {}, $.fn[pluginName].defaults, options); // Deep copy

            // Store all the console messages.
            this.messages = [];

            this._init();
            this._printMessages();
        }

        /**
         * Start this plugin's logic, such as checking settings,
         * building the expected output, and so on.
         * Always work with this.element and this.settings.
         * @private
         */
        _init() {
            // Send a message to the console for specific events.
            if (typeof this.settings.pluginParam !== 'string') {
                this._sendMessage('missing pluginParam', 'error');
            }

            // Call a public method within the plugin itself.
            this.element[pluginName]('publicMethod');

            // Callback
            if (typeof this.settings.pluginCallback === 'function') {
                this.settings.pluginCallback();
            }

            // Cache the settings in the target's data.
            this.element.data(pluginName, this.settings);
        }

        /**
         * Craft a message to send to the browser's console.
         * 
         * @param {string} content The message's content.
         * @param {(undefined|string)} type The message's type.
         * @private
         */
        _sendMessage(content, type) {
            const defaultType = 'log';
            const allowedTypes = [defaultType, 'error', 'info', 'warn',];

            let messageType = defaultType;
            if (allowedTypes.includes(type)) {
                messageType = type;
            }

            this.messages.push({
                type: messageType,
                content: content,
            });
        }

        /**
         * Print eventual messages that this plugin raised.
         * @private
         */
        _printMessages() {
            $.each(this.messages, function(i, message) {
                console[message.type](displayName + ': ' + message.content + '.');
            });
        }
    }

    /**
     * Initialize this plugin for each instanced element
     * or apply the desired public method.
     * 
     * @example
     * $(element).jQueryPlugin({
     *     pluginParam: 'pluginValue',
     *     customParam: 'customValue',
     * 
     *     pluginCallback() {
     *        // ...
     *     },
     * });
     * 
     * @param {(object|string)} config Options or method (with eventual arguments).
     * @returns {(undefined|function)} One of the public methods or this plugin's instance.
     * @public
     */
    $.fn[pluginName] = function(config) {
        if (methods[config]) {
            return methods[config].apply(this, [].slice.call(arguments, 1));
        } else if (typeof config === 'object') {
            return this.each(function(i, target) {
                new Plugin(this, config);
            });
        } else {
            console.error(displayName + ': invalid options.');
        }
    };

    /**
     * This plugin's default attributes and callbacks.
     * Each element can be externally overridden.
     * 
     * @example
     * $.fn.jQueryPlugin.defaults.pluginParam = 'customValue';
     * $.fn.jQueryPlugin.defaults.customParam = 'anotherValue';
     * 
     * @type {object}
     * @public
     */
    $.fn[pluginName].defaults = {
        pluginParam: 'paramValue',
    };
})(jQuery, window, document);
