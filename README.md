# gedcomx-json-schema

[![npm](https://img.shields.io/npm/v/gedcomx-json-schema.svg)](https://www.npmjs.com/package/gedcomx-json-schema)
[![Build Status](https://travis-ci.org/rootsdev/gedcomx-json-schema.svg?branch=master)](https://travis-ci.org/rootsdev/gedcomx-json-schema)

[JSON Schema](http://json-schema.org/) for [GEDCOM X](http://www.gedcomx.org/).
Pairs nicely with validation tools such as [tv4](https://github.com/geraintluff/tv4).

This supports the GEDCOM X Conceptual Model, RS, Atom Extensions, and Records 
specs in JSON format.

```js
var tv4 = require('tv4'),
    gedxSchema = require('gedcomx-json-schema');
    
var result = tv4.validateResult(data, gedxSchema);
```