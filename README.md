escape-vcard-property-value
===========================
[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![Build Status][BUILD BADGE]][BUILD PAGE]

Escape vCard property values.

Install
-------
```sh
$ npm install escape-vcard-property-value
```

Usage
-----
```js
var escapeVcardPropertyValue = require('escape-vcard-property-value');

escapeVcardPropertyValue(',');  // > '\,'
escapeVcardPropertyValue(';');  // > '\;'
escapeVcardPropertyValue('\\'); // > '\\'
escapeVcardPropertyValue('\n'); // > '\\n'
```

Testing
-------
```sh
$ npm test
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[BUILD BADGE]: https://img.shields.io/travis/jbenner-radham/escape-vcard-property-value.svg?style=flat-square
[BUILD PAGE]: https://travis-ci.org/jbenner-radham/escape-vcard-property-value
[LICENSE BADGE]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square
[LICENSE PAGE]: https://github.com/jbenner-radham/escape-vcard-property-value/blob/master/LICENSE
[NPM PAGE]: https://www.npmjs.com/package/escape-vcard-property-value
[NPM VERSION BADGE]: https://img.shields.io/npm/v/escape-vcard-property-value.svg?style=flat-square
