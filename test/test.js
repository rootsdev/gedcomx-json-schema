var chai = require('chai');
chai.use(require('chai-json-schema'));
var assert = chai.assert;

var gedxSchema = require('../');

it('validates', function(){
  assert.jsonSchema({
    persons: [
      {
        id: 'testPerson',
        private: true,
        gender: {
          type: 'http://gedcomx.org/Female'
        },
        names: [
          {
            type: 'http://gedcomx.org/BirthName',
            nameForms: [
              {
                fullText: 'Joanna Hopkins'
              }
            ]
          }  
        ],
        facts: [
          {
            type: 'http://gedcomx.org/Birth',
            date: {
              formal: '+2001-04-09'
            },
            place: {
              original: 'Farm house'
            }
          }  
        ]
      }
    ]
  }, gedxSchema);
});

it('fails', function(){
  assert.notJsonSchema([
    'no bueno'  
  ], gedxSchema);
});