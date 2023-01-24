# Json App Interface

This note is about exploring the idea of how an API solution could be defined that would have the effect of being able to 'plug' front-end app libraries that have been defined with a JSON MOCK API, into the webizen ecosystem; by forming some sort of method to convert / translate the underlying webizen interfaces into the format required by the app.

The objective is to enable the use of 'app templates' that are generally available with minimal changes being required.  

The condition would be that the app is able to be run locally and that there is no code providing any information back to the app provider.  If this functionality is desired by app developers, then they'd need to get a webizen account, etc. 

note:  [[ClientSoftwareRequirements]]

NoteAlso: a few minutes (so far) spent playing with ChatGPT to generate code,
https://github.com/WebCivics/Gojson2rdf 

### Requirement

There needs to be a schema(ontology) that defines the information about the app and the interface.  more information TBD