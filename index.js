'use strict';

/**
 * .
 * @param {object} options hash contains a property named fn to invoke a normal Handlebars template
 * @return {string}
 */
function fn(options) {
    return options.fn(this);
}

module.exports = fn;