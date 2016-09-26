/**
 * Merge two objects into a new object. Does not modify either object.
 * http://stackoverflow.com/a/171256
 */
function merge(obj1, obj2){
  var obj3 = {}, attr;
  for(attr in obj1){ obj3[attr] = obj1[attr]; }
  for(attr in obj2){ obj3[attr] = obj2[attr]; }
  return obj3;
}

// Here we list the definitions that will be extended below.
var ExtensibleDataProperties = {
    id: { type: 'string' }
  },
  
  HypermediaEnabledDataProperties = merge(ExtensibleDataProperties, {
    links: { $ref: '#/definitions/Links' }
  }), 
  
  ConclusionProperties = merge(HypermediaEnabledDataProperties, {
    analysis: { $ref: '#/definitions/ResourceReference' },
    attribution: { $ref: '#/definitions/Attribution' },
    confidence: { type: 'string' },
    id: { type: 'string' },
    lang: { type: 'string' },
    notes: {
      type: 'array',
      items: { $ref: '#/definitions/Note' }
    },
    sources: {
      type: 'array',
      items: { $ref: '#/definitions/SourceReference' }
    },
    sortKey: { type: 'string' }
  }),
  
  SubjectProperties = merge(ConclusionProperties, {
    evidence: {
      type: 'array',
      items: { $ref: '#/definitions/EvidenceReference' }
    },
    extracted: { type: 'boolean' },
    identifiers: { $ref: '#/definitions/Identifiers' },
    media: {
      type: 'array',
      items: { $ref: '#/definitions/SourceReference' }
    }
  }),
  
  AtomCommonAttributes = {
    base: { type: 'string' },
    lang: { type: 'string' }
  };

// The core definitions
module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  anyOf: [
    { $ref: '#/definitions/GedcomX' },
    { $ref: '#/definitions/AtomFeed' }
  ],
  definitions: {
    
    // GedcomX Core Conceptual Model
    Address: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        city: { type: 'string' },
        country: { type: 'string' },
        postalCode: { type: 'string' },
        stateOrProvince: { type: 'string' },
        street: { type: 'string' },
        stree2: { type: 'string' },
        street3: { type: 'string' },
        street4: { type: 'string' },
        street5: { type: 'string' },
        street6: { type: 'string' },
        value: { type: 'string' }
      })
    },
    Agent: {
      type: 'object',
      properties: merge(HypermediaEnabledDataProperties, {
        identifiers: { $ref: '#/definitions/Identifiers' },
        names: {
          type: 'array',
          items: { $ref: '#/definitions/TextValue' },
        },
        homepage: { $ref: '#/definitions/ResourceReference' },
        openid: { $ref: '#/definitions/ResourceReference' },
        accounts: {
          type: 'array',
          items: { $ref: '#/definitions/OnlineAccount' }
        },
        emails: {
          type: 'array',
          items: { $ref: '#/definitions/ResourceReference' }
        },
        phones: {
          type: 'array',
          items: { $ref: '#/definitions/ResourceReference' }
        },
        addresses: {
          type: 'array',
          items: { $ref: '#/definitions/Address' }
        },
        person: { $ref: '#/definitions/ResourceReference' }
      })
    },
    Attribution: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        contributor: { $ref: '#/definitions/ResourceReference' },
        modified: { type: 'integer' },
        changeMessage: { type: 'string' },
        creator: { $ref: '#/definitions/ResourceReference' },
        created: { type: 'integer' }
      })
    },
    Coverage: {
      type: 'object',
      properties: merge(HypermediaEnabledDataProperties, {
        spatial: { $ref: '#/definitions/PlaceReference' },
        temporal: { $ref: '#/definitions/Date' }
      })
    },
    Date: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        original: { type: 'string' },
        formal: { type: 'string' },
        normalized: {
          type: 'array',
          items: { $ref: '#/definitions/TextValue' }
        }
      })
    },
    Document: {
      type: 'object',
      properties: merge(ConclusionProperties, {
        type: { type: 'string' },
        extracted: { type: 'boolean' },
        textType: { type: 'string' },
        text: { type: 'string' },
        attribution: { $ref: '#/definitions/Attribution' }
      })
    },
    DisplayProperties: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        gender: { type: 'string' },
        lifespan: { type: 'string' },
        birthDate: { type: 'string' },
        birthPlace: { type: 'string' },
        deathDate: { type: 'string' },
        deathPlace: { type: 'string' },
        marriageDate: { type: 'string' },
        marriagePlace: { type: 'string' },
        ascendancyNumber: { type: 'string' },
        descendancyNumber: { type: 'string' },
        familiesAsParent: {
          type: 'array',
          items: { $ref: '#/definitions/FamilyView' }
        },
        familiesAsChild: {
          type: 'array',
          items: { $ref: '#/definitions/FamilyView' }
        }
      }
    },
    Event: {
      type: 'object',
      properties: merge(SubjectProperties, {
        type: { type: 'string' },
        date: { $ref: '#/definitions/Date' },
        place: { $ref: '#/definitions/PlaceReference' },
        roles: {
          type: 'array',
          items: { $ref: '#/definitions/EventRole' }
        }
      }),
    },
    EventRole: {
      type: 'object',
      properties: merge(ConclusionProperties, {
        person: { $ref: '#/definitions/ResourceReference' },
        type: { type: 'string' },
        details: { type: 'string' }
      })
    },
    EvidenceReference: {
      type: 'object',
      properties: merge(HypermediaEnabledDataProperties, {
        resource: { type: 'string' },
        resourceId: { type: 'string' },
        attribution: { $ref: '#/definitions/Attribution' }
      })
    },
    Fact: {
      type: 'object',
      properties: merge(ConclusionProperties, {
        type: { type: 'string' },
        date: { $ref: '#/definitions/Date' },
        place: { $ref: '#/definitions/PlaceReference' },
        value: { type: 'string' },
        qualifiers: {
          type: 'array',
          items: { $ref: '#/definitions/Qualifier' }
        }
      })
    },
    FamilyView: {
      type: 'object',
      properties: {
        parent1: { $ref: '#/definitions/ResourceReference' },
        parent2: { $ref: '#/definitions/ResourceReference' },
        children: {
          type: 'array',
          items: { $ref: '#/definitions/ResourceReference' }
        }
      }
    },
    GedcomX: {
      type: 'object',
      properties: merge(HypermediaEnabledDataProperties, {
        id: { type: 'string' },
        lang: { type: 'string' },
        attribution: { $ref: '#/definitions/Attribution' }, 
        persons: {
          type: 'array',
          items: { $ref: '#/definitions/Person' }
        },
        relationships: {
          type: 'array',
          items: { $ref: '#/definitions/Relationship' }
        },
        sourceDescriptions: {
          type: 'array',
          items: { $ref: '#/definitions/SourceDescription' }
        },
        agents: {
          type: 'array',
          items: { $ref: '#/definitions/Agent' }
        },
        events: {
          type: 'array',
          items: { $ref: '#/definitions/Event' }
        },
        documents: {
          type: 'array',
          items: { $ref: '#/definitions/Document' }
        },
        places: {
          type: 'array',
          items: { $ref: '#/definitions/PlaceDescription' }
        },
        description: { type: 'string' }
      })
    },
    Gender: {
      type: 'object',
      properties: merge(ConclusionProperties, {
        type: { type: 'string' }
      })
    },
    Identifiers: {
      type: 'object',
      patternProperties: {
        ".*": {
          anyOf: [
            { type: 'string' },
            { type: 'array', items: { type: 'string' } }
          ]
        }
      }
    },
    Link: {
      type: 'object',
      properties: {
        rel: { type: 'string' },
        href: { type: 'string' },
        template: { type: 'string' },
        type: { type: 'string' },
        accept: { type: 'string' },
        allow: { type: 'string' },
        hreflang: { type: 'string' },
        title: { type: 'string' }
      }
    },
    Links: {
      type: 'object',
      patternProperties: {
        ".*": { $ref: '#/definitions/Link' }
      }
    },
    Name: {
      type: 'object',
      properties: merge(ConclusionProperties, {
        type: { type: 'string' },
        date: { $ref: '#/definitions/Date' },
        nameForms: {
          type: 'array',
          items: { $ref: '#/definitions/NameForm' }
        },
        preferred: { type: 'boolean' }
      })
    },
    NameForm: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        lang: { type: 'string' },
        fullText: { type: 'string' },
        parts: {
          type: 'array',
          items: { $ref: '#/definitions/NamePart' }
        }
      })
    },
    NamePart: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        type: { type: 'string' },
        value: { type: 'string' },
        qualifiers: {
          type: 'array',
          items: { $ref: '#/definitions/Qualifier' }
        }
      })
    },
    Note: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        lang: { type: 'string' },
        subject: { type: 'string' },
        text: { type: 'string' },
        attribution: { $ref: '/#definitions/Attribution' }
      })
    },
    OnlineAccount: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        serviceHomePage: { $ref: '#/definitions/ResourceReference' },
        accountName: { type: 'string' }
      })
    },
    Person: {
      type: 'object',
      properties: merge(SubjectProperties, {
        private: { type: 'boolean' },
        gender: { $ref: '#/definitions/Gender' },
        names: {
          type: 'array',
          items: { $ref: '#/definitions/Name' }
        },
        facts: {
          type: 'array',
          items: { $ref: '#/definitions/Fact' }
        },
        living: { type: 'boolean' },
        display: { $ref: '#/definitions/DisplayProperties' }
      })
    },
    PlaceDescription: {
      type: 'object',
      properties: merge(SubjectProperties, {
        names: {
          type: 'array',
          items: { $ref: '#/definitions/TextValue' }
        },
        type: { type: 'string' },
        place: { $ref: '#/definitions/ResourceReference' },
        jurisdiction: { $ref: '#/definitions/ResourceReference' },
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        temporalDescription: { $ref: '#/definitions/Date' },
        spatialDescription: { $ref: '#/definitions/ResourceReference' }
      })
    },
    PlaceReference: {
      type: 'object',
      properties: merge(ExtensibleDataProperties, {
        original: { type: 'string' },
        description: { type: 'string' },
        normalized: {
          type: 'array',
          items: { $ref: '#/definitions/TextValue' }
        }
      })
    },
    Qualifier: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        value: { type: 'string' }
      },
      required: ['name']
    },
    Relationship: {
      type: 'object',
      properties: merge(SubjectProperties, {
        type: { type: 'string' },
        person1: { $ref: '#/definitions/ResourceReference' },
        person2: { $ref: '#/definitions/ResourceReference' },
        facts: {
          type: 'array',
          items: { $ref: '#/definitions/Fact' }
        }
      })
    },
    ResourceReference: {
      type: 'object',
      properties: {
        resource: { type: 'string' },
        resourceId: { type: 'string' }
      }
    },
    SourceCitation: {
      type: 'object',
      properties: merge(HypermediaEnabledDataProperties, {
        lang: { type: 'string' },
        value: { type: 'string' }
      })
    },
    SourceDescription: {
      type: 'object',
      properties: merge(HypermediaEnabledDataProperties, {
        resourceType: { type: 'string' },
        citations: {
          type: 'array',
          items: { $ref: '#/definitions/SourceCitation' }
        },
        mediaType: { type: 'string' },
        about: { type: 'string' },
        mediator: { $ref: '#/definitions/ResourceReference' },
        sources: {
          type: 'array',
          items: { $ref: '#/definitions/SourceReference' }
        },
        analysis: { $ref: '#/definitions/ResourceReference' },
        componentOf: { $ref: '#/definitions/SourceReference' },
        titles: {
          type: 'array',
          items: { $ref: '#/definitions/TextValue' }
        },
        notes: {
          type: 'array',
          items: { $ref: '#/definitions/Note' }
        },
        attribution: { $ref: '#/definitions/Attribution' },
        rights: {
          type: 'array',
          items: { $ref: '#/definitions/ResourceReference' }
        },
        coverage: { $ref: '#/definitions/Coverage' },
        descriptions: {
          type: 'array',
          items: { $ref: '#/definitions/TextValue' }
        },
        identifiers: { $ref: '#/definitions/Identifiers' },
        created: { type: 'integer' },
        modified: { type: 'integer' },
        repository: { $ref: '#/definitions/ResourceReference' }
      })
    },
    SourceReference: {
      type: 'object',
      properties: merge(HypermediaEnabledDataProperties, {
        description: { type: 'string' },
        attribution: { $ref: '#/definitions/Attribution' }
      })
    },
    TextValue: {
      type: 'object',
      properties: {
        lang: { type: 'string' },
        value: { type: 'string' }
      }
    },
    
    // Atom Extensions
    AtomCategory: {
      type: 'object',
      properties: merge(AtomCommonAttributes, {
        scheme: { type: 'string' },
        term: { type: 'string' },
        label: { type: 'string' }
      })
    },
    AtomContent: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        gedcomx: { $ref: '#/definitions/GedcomX' }
      }
    },
    AtomEntry: {
      type: 'object',
      properties: merge(AtomCommonAttributes, {
        authors: {
          type: 'array',
          items: { $ref: '#/definitions/AtomPerson' }
        },
        categories: {
          type: 'array',
          items: { $ref: '#/definitions/AtomCategory' }
        },
        confidence: { type: 'integer' },
        content: { $ref: '#/definitions/AtomContent' },
        contributors: {
          type: 'array',
          items: { $ref: '#/definitions/AtomPerson' }
        },
        id: { type: 'string' },
        links: { $ref: '#/definitions/Links' },
        published: { type: 'integer' },
        rights: { type: 'string' },
        score: { type: 'number' },
        title: { type: 'string' },
        updated: { type: 'integer' }
      })
    },
    AtomFeed: {
      type: 'object',
      properties: merge(AtomCommonAttributes, {
        authors: {
          type: 'array',
          items: { $ref: '#/definitions/AtomPerson' }
        },
        contributors: {
          type: 'array',
          items: { $ref: '#/definitions/AtomPerson' }
        },
        generator: { $ref: '#/definitions/AtomGenerator' },
        icon: { type: 'string' },
        id: { type: 'string' },
        results: { type: 'integer' },
        index: { type: 'integer' },
        links: { $ref: '#/definitions/Links' },
        logo: { type: 'string' },
        rights: { type: 'string' },
        subtitle: { type: 'string' },
        title: { type: 'string' },
        updated: { type: 'integer' },
        entries: {
          type: 'array',
          items: { $ref: '#/definitions/AtomEntry' }
        },
        /*
        facets: {
          type: 'array',
          items: { $ref: '#/definitions/Field' }
        }
        */
      })
    },
    AtomGenerator: {
      type: 'object',
      properties: merge(AtomCommonAttributes, {
        uri: { type: 'string' },
        version: { type: 'string' },
        value: { type: 'string' }
      })
    },
    AtomPerson: {
      type: 'object',
      properties: merge(AtomCommonAttributes, {
        name: { type: 'string' },
        uri: { type: 'string' },
        email: { type: 'string' }
      })
    }
  }
};