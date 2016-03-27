'use strict';

module.exports = (value) => {
    /**
     * PROTIP: The order of this chain is very important!
     * @see http://tools.ietf.org/html/rfc6350#section-3.4
     */
    return value.replace('\\', '\\\\')
        .replace(',', '\\,')
        .replace(';', '\\;')
        .replace(/\n/g, '\\n');
};
