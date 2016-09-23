var chai = require('chai');
chai.use(require('chai-json-schema'));
var assert = chai.assert;
var gedxSchema = require('../');

it('validates', function(){
  assert.jsonSchema(require('./data/person.js'), gedxSchema);
});

it('fails', function(){
  assert.notJsonSchema([
    'no bueno'  
  ], gedxSchema);
});