
The top level concept of OWL is [Thing](http://www.w3.org/2002/07/owl#Thing).  I've had problems with this term being employed as the top-level concept in relation to defining [[BiosphereOntologies]] and [[SocioSphereOntologies]].  Yet, it is an essential part of the semantic web ecosystem.

A solution to this ideological (perhaps due to misnomers or misunderstandings) difference; is sought to be addressed by defining the use of OWL in connection to the use of the AI Agent - the Webizen Agent, which is in-turn a thing; and rather than it being someone-elses thing - the webizen agent is owned by the person.

fundamentally, people aren't expected to be working with OWL directly; other than via software agents.  As long as these systems denote the use of the software agent as a tool (rather than persons being considered the tools / natural resources for consumption) then the use of OWL is seemingly fine; notwithstanding the need to seek to ensure good logic around the use of the reasoning systems / semantic structures.

https://www.w3.org/TR/owl2-mapping-to-rdf/
https://www.w3.org/TR/owl2-rdf-based-semantics/
https://www.w3.org/TR/owl2-syntax/



```json
[ {

  "@id" : "http://purl.org/vocab/vann/preferredNamespaceUri",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ]

}, {

  "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl",

  "@type" : [ "http://www.w3.org/2002/07/owl#Ontology" ],

  "http://purl.org/vocab/vann/preferredNamespaceUri" : [ {

    "@value" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "\r\n  This ontology partially describes the built-in classes and\r\n  properties that together form the basis of the RDF/XML syntax of OWL 2.\r\n  The content of this ontology is based on Tables 6.1 and 6.2\r\n  in Section 6.4 of the OWL 2 RDF-Based Semantics specification,\r\n  available at http://www.w3.org/TR/owl2-rdf-based-semantics/.\r\n  Please note that those tables do not include the different annotations\r\n  (labels, comments and rdfs:isDefinedBy links) used in this file.\r\n  Also note that the descriptions provided in this ontology do not\r\n  provide a complete and correct formal description of either the syntax\r\n  or the semantics of the introduced terms (please see the OWL 2\r\n  recommendations for the complete and normative specifications).\r\n  Furthermore, the information provided by this ontology may be\r\n  misleading if not used with care. This ontology SHOULD NOT be imported\r\n  into OWL ontologies. Importing this file into an OWL 2 DL ontology\r\n  will cause it to become an OWL 2 Full ontology and may have other,\r\n  unexpected, consequences.\r\n   "

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/TR/owl2-mapping-to-rdf/"

  }, {

    "@id" : "http://www.w3.org/TR/owl2-rdf-based-semantics/"

  }, {

    "@id" : "http://www.w3.org/TR/owl2-syntax/"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "The OWL 2 Schema vocabulary (OWL 2)"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [ {

    "@id" : "http://www.w3.org/TR/owl2-rdf-based-semantics/#table-axiomatic-classes"

  }, {

    "@id" : "http://www.w3.org/TR/owl2-rdf-based-semantics/#table-axiomatic-properties"

  } ],

  "http://www.w3.org/2002/07/owl#imports" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#AllDifferent",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of collections of pairwise different individuals."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "AllDifferent"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#AllDisjointClasses",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of collections of pairwise disjoint classes."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "AllDisjointClasses"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#AllDisjointProperties",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of collections of pairwise disjoint properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "AllDisjointProperties"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#Annotation",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "Annotation"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#AnnotationProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of annotation properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "AnnotationProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#AsymmetricProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of asymmetric properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "AsymmetricProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#Axiom",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "Axiom"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#Class",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of OWL classes."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#DataRange",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "DataRange"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Datatype"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#DatatypeProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of data properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "DatatypeProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#DeprecatedClass",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of deprecated classes."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "DeprecatedClass"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#DeprecatedProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of deprecated properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "DeprecatedProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#FunctionalProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of functional properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "FunctionalProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#InverseFunctionalProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of inverse-functional properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "InverseFunctionalProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#IrreflexiveProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of irreflexive properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "IrreflexiveProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#NamedIndividual",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of named individuals."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "NamedIndividual"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#NegativePropertyAssertion",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of negative property assertions."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "NegativePropertyAssertion"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#Nothing",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "This is the empty class."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "Nothing"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of object properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "ObjectProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#Ontology",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of ontologies."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "Ontology"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#OntologyProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of ontology properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "OntologyProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#ReflexiveProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of reflexive properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "ReflexiveProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#Restriction",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of property restrictions."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#SymmetricProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of symmetric properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "SymmetricProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#Thing",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of OWL individuals."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#TransitiveProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#Class" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The class of transitive properties."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "TransitiveProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#subClassOf" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#allValuesFrom",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the class that a universal property restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "allValuesFrom"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#annotatedProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the predicate of an annotated axiom or annotated annotation."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "annotatedProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#annotatedSource",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the subject of an annotated axiom or annotated annotation."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "annotatedSource"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#annotatedTarget",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the object of an annotated axiom or annotated annotation."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "annotatedTarget"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#assertionProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the predicate of a negative property assertion."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#NegativePropertyAssertion"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "assertionProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#backwardCompatibleWith",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The annotation property that indicates that a given ontology is backward compatible with another ontology."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "backwardCompatibleWith"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#bottomDataProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The data property that does not relate any individual to any data value."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "bottomDataProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Literal"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#bottomObjectProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The object property that does not relate any two individuals."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "bottomObjectProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#cardinality",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the cardinality of an exact cardinality restriction."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "cardinality"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#complementOf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that a given class is the complement of another class."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "complementOf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#datatypeComplementOf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that a given data range is the complement of another data range with respect to the data domain."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Datatype"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "datatypeComplementOf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Datatype"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#deprecated",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The annotation property that indicates that a given entity has been deprecated."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "deprecated"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#differentFrom",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that two given individuals are different."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "differentFrom"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#disjointUnionOf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that a given class is equivalent to the disjoint union of a collection of other classes."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "disjointUnionOf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#disjointWith",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that two given classes are disjoint."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "disjointWith"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#distinctMembers",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#AllDifferent"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "distinctMembers"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#equivalentClass",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that two given classes are equivalent, and that is used to specify datatype definitions."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "equivalentClass"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#equivalentProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that two given properties are equivalent."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "equivalentProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#hasKey",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the collection of properties that jointly build a key."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "hasKey"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#hasSelf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the property that a self restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "hasSelf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#hasValue",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the individual that a has-value restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "hasValue"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#imports",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that is used for importing other ontologies into a given ontology."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "imports"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#incompatibleWith",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The annotation property that indicates that a given ontology is incompatible with another ontology."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "incompatibleWith"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#intersectionOf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the collection of classes or data ranges that build an intersection."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "intersectionOf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#inverseOf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that two given properties are inverse."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "inverseOf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#maxCardinality",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the cardinality of a maximum cardinality restriction."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "maxCardinality"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#maxQualifiedCardinality",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the cardinality of a maximum qualified cardinality restriction."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "maxQualifiedCardinality"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#members",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "members"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#minCardinality",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the cardinality of a minimum cardinality restriction."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "minCardinality"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#minQualifiedCardinality",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the cardinality of a minimum qualified cardinality restriction."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "minQualifiedCardinality"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#onClass",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the class that a qualified object cardinality restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "onClass"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#onDataRange",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the data range that a qualified data cardinality restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "onDataRange"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Datatype"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#onDatatype",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the datatype that a datatype restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Datatype"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "onDatatype"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Datatype"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#onProperties",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "onProperties"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#onProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the property that a property restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "onProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#oneOf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the collection of individuals or data values that build an enumeration."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "oneOf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#priorVersion",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The annotation property that indicates the predecessor ontology of a given ontology."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "priorVersion"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#propertyChainAxiom",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the n-tuple of properties that build a sub property chain of a given property."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#ObjectProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "propertyChainAxiom"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#propertyDisjointWith",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that two given properties are disjoint."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "propertyDisjointWith"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#qualifiedCardinality",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the cardinality of an exact qualified cardinality restriction."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "qualifiedCardinality"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#sameAs",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines that two given individuals are equal."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "sameAs"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#someValuesFrom",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the class that an existential property restriction refers to."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Restriction"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "someValuesFrom"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#sourceIndividual",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the subject of a negative property assertion."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#NegativePropertyAssertion"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "sourceIndividual"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#targetIndividual",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the object of a negative object property assertion."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#NegativePropertyAssertion"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "targetIndividual"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#targetValue",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the value of a negative data property assertion."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#NegativePropertyAssertion"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "targetValue"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Literal"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#topDataProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#DatatypeProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The data property that relates every individual to every data value."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "topDataProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Literal"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#topObjectProperty",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The object property that relates every two individuals."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "topObjectProperty"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Thing"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#unionOf",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the collection of classes or data ranges that build a union."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Class"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "unionOf"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#versionIRI",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that identifies the version IRI of an ontology."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "versionIRI"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#Ontology"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#versionInfo",

  "@type" : [ "http://www.w3.org/2002/07/owl#AnnotationProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The annotation property that provides version information for an ontology or another OWL construct."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "versionInfo"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Resource"

  } ]

}, {

  "@id" : "http://www.w3.org/2002/07/owl#withRestrictions",

  "@type" : [ "http://www.w3.org/2002/07/owl#ObjectProperty" ],

  "http://www.w3.org/2000/01/rdf-schema#comment" : [ {

    "@value" : "The property that determines the collection of facet-value pairs that define a datatype restriction."

  } ],

  "http://www.w3.org/2000/01/rdf-schema#domain" : [ {

    "@id" : "http://www.w3.org/2000/01/rdf-schema#Datatype"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" : [ {

    "@id" : "http://www.w3.org/2002/07/owl#"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#label" : [ {

    "@value" : "withRestrictions"

  } ],

  "http://www.w3.org/2000/01/rdf-schema#range" : [ {

    "@id" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"

  } ]

} ]
```