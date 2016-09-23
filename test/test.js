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
        ],
        "display" : {
          "name" : "Helen Gertrude Zierak",
          "gender" : "Female",
          "lifespan" : "1896-1970",
          "birthDate" : "7 February 1896",
          "birthPlace" : "Amsterdam, Montgomery, New York, United States",
          "deathDate" : "24 November 1970",
          "deathPlace" : "Tacoma, Pierce, Washington, United States",
          "ascendancyNumber" : "1",
          "descendancyNumber" : "1",
          "familiesAsParent" : [ {
            "parent1" : {
              "resource" : "https://familysearch.org/ark:/61903/4:1:K1VK-9VB",
              "resourceId" : "K1VK-9VB"
            },
            "parent2" : {
              "resource" : "#K1VK-9B3",
              "resourceId" : "K1VK-9B3"
            },
            "children" : [ {
              "resource" : "https://familysearch.org/ark:/61903/4:1:K66W-QDT",
              "resourceId" : "K66W-QDT"
            }, {
              "resource" : "https://familysearch.org/ark:/61903/4:1:LZX4-YHK",
              "resourceId" : "LZX4-YHK"
            } ]
          } ],
          "familiesAsChild" : [ {
            "parent1" : {
              "resource" : "https://familysearch.org/ark:/61903/4:1:LWMS-5MF",
              "resourceId" : "LWMS-5MF"
            },
            "parent2" : {
              "resource" : "https://familysearch.org/ark:/61903/4:1:LWMS-R9Y",
              "resourceId" : "LWMS-R9Y"
            },
            "children" : [ {
              "resource" : "#K1VK-9B3",
              "resourceId" : "K1VK-9B3"
            } ]
          } ]
        },
        links: {
          "spouses" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/spouses"
          },
          "ancestry" : {
            "href" : "https://familysearch.org/platform/tree/ancestry?person=KWXX-MP9"
          },
          "person" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9"
          },
          "parents" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/parents"
          },
          "person-with-relationships" : {
            "href" : "https://familysearch.org/platform/tree/persons-with-relationships?person=KWXX-MP9"
          },
          "descendancy" : {
            "href" : "https://familysearch.org/platform/tree/descendancy?person=KWXX-MP9"
          },
          "merge" : {
            "template" : "https://familysearch.org/platform/tree/persons/{pid}/merges/{dpid}{?filter,access_token}",
            "type" : "application/json,application/x-fs-v1+json,application/x-fs-v1+xml,application/xml,text/html",
            "accept" : "application/x-fs-v1+json,application/x-fs-v1+xml",
            "allow" : "OPTIONS,GET,POST",
            "title" : "Person Merge"
          },
          "change-history" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/changes"
          },
          "children" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/children"
          },
          "spouse-relationships" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/spouse-relationships"
          },
          "child-relationships" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/child-relationships"
          },
          "collection" : {
            "href" : "https://familysearch.org/platform/collections/tree"
          },
          "ordinance-reservations" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/reservations"
          },
          "portrait" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/portrait"
          },
          "parent-relationships" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/parent-relationships"
          },
          "artifacts" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/memories"
          },
          "matches" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/matches"
          },
          "ordinances" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/ordinances"
          },
          "non-matches" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/not-a-match"
          },
          "portraits" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/portraits"
          },
          "notes" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/notes"
          },
          "source-descriptions" : {
            "href" : "https://familysearch.org/platform/tree/persons/KWXX-MP9/sources"
          }
        }
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
    ],
    agents: [
      {
        id: 'agent',
        identifiers: {
          $: 'ident'
        },
        names: [
          {
            lang: 'en',
            value: 'Name'
          }  
        ],
        homepage: {
          resource: 'http://homepage'
        },
        openid: {
          resource: 'http://openid'
        },
        accounts: [
          {
            accountName: 'jimbo'
          }  
        ],
        emails: [
          {
            resource: 'http://email'
          }  
        ],
        phones: [
          {
            resource: 'http://phone'
          }  
        ],
        addresses: [
          {
            value: 'big long address',
            postalCode: '123456'
          }  
        ],
        person: {
          resource: 'http://person'
        }
      }  
    ],
    events: [
      {
        type: 'http://gedcomx.org/Marriage',
        date: {
          formal: '+2002-06-06'
        },
        place: {
          original: 'Her town, MN'
        },
        roles: [
          {
            person: {
              resource: 'http://groom'
            },
            type: 'http://gedcomx.org/Participant'
          }
        ]
      }  
    ],
    documents: [
      {
        type: 'http://gedcomx.org/Abstract',
        extracted: false,
        textType: 'plain',
        text: 'Lots of text',
        attribution: {
          created: 123456789
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