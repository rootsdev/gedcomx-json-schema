var chai = require('chai');
chai.use(require('chai-json-schema'));
var assert = chai.assert;

var gedxSchema = require('../');

it('validates', function(){
  assert.jsonSchema({
    persons: [
      {
        private: false,
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
    ],
    relationships: [
      {
        type: 'http://gedcomx.org/Couple',
        person1: {
          resource: 'http://identifier/for/person/1'
        },
        person2: {
          resource: 'http://identifier/for/person/2'
        },
        facts: [
          {
            type: 'http://gedcomx.org/Marriage'
          }
        ]
      }  
    ],
    sourceDescriptions: [
      {
        resourceType: 'http://some/type',
        citations: [
          {
            lang: 'en',
            value: 'Long source citation'
          }
        ],
        mediaType: 'book',
        about: 'http://a/resource',
        mediator: {
          resource: 'http://mediator'
        },
        sources: [
          {
            description: 'http://source/reference'
          }
        ],
        analysis: {
          resource: 'http://analysis'
        },
        componentOf: {
          description: 'http://container'
        },
        titles: [
          {
            lang: 'en',
            value: 'Title'
          },
          {
            lang: 'es',
            value: 'Titulo'
          }
        ],
        notes: [
          {
            subject: 'Note',
            text: 'Some note text'
          }
        ],
        attribution: {
          created: 1234578129
        },
        rights: [
          {
            resource: 'https://some/right'
          }
        ],
        coverage: {
          temporal: {
            formal: '+2015'
          },
          spatial: {
            original: 'A place'
          }
        },
        descriptions: [
          {
            value: 'A description'
          }
        ],
        identifiers: {
          $: 'identifier'
        },
        created: 1000000,
        modified: 11111111,
        repository: {
          resource: 'http://repository'
        }
      }
    ]
  }, gedxSchema);
});

it('fails', function(){
  assert.notJsonSchema([
    'no bueno'  
  ], gedxSchema);
});