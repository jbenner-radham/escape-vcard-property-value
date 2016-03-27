'use strict';

let expect                   = require('chai').expect;
let escapeVcardPropertyValue = require('../lib/escape-vcard-property-value');

describe('Escape vCard Property Value', () => {
    it('should escape a comma', () => {
        expect(escapeVcardPropertyValue(',')).to.equal('\\,');
    });

    it('should escape a semicolon', () => {
        expect(escapeVcardPropertyValue(';')).to.equal('\\;');
    });

    it('should escape a backslash', () => {
        expect(escapeVcardPropertyValue('\\')).to.equal('\\\\');
    });

    it('should escape a newline', () => {
        expect(escapeVcardPropertyValue('\n')).to.equal('\\n');
    });
});
