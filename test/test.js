var chai = require('chai');
chai.use(require('chai-json-schema'));
// chai.tv4.banUnknown = true;
var assert = chai.assert;
var gedxSchema = require('../');

it('validates GedcomX Document', function(){
  assert.jsonSchema(require('./data/person.js'), gedxSchema);
});

it('validates Atom Feed', function(){
  assert.jsonSchema(require('./data/feed.js'), gedxSchema);
});

it.only('validates Record', function(){
  assert.jsonSchema(require('./data/record.js'), gedxSchema);
});

it('fails', function(){
  assert.notJsonSchema([
    'no bueno'  
  ], gedxSchema);
});