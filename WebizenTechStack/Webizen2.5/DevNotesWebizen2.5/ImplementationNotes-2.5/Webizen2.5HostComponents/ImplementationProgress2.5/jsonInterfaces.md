# Json Interfaces

CaddyServer:
https://caddyserver.com/docs/json/

HeadScale:
https://pkg.go.dev/github.com/juanfont/headscale

Note: HeadscaleUI is static site - API interface. may better be used as a guide than used in the deployment package??  idk.  

Docker:
https://docs.docker.com/engine/api/v1.24/

## Json App Interface

This note is about exploring the idea of how an API solution could be defined that would have the effect of being able to 'plug' front-end app libraries that have been defined with the intention of their being used with a JSON based API.  

The objective is to enable the use of 'app templates' that are generally available with minimal changes being required.  There are some related considerations associated with the [[Webize]] notes in addition to the [[WebizenApps]] related notes, particularly at this stage; the notes about [[Webizen3.0Apps]]. 

The condition would be that the app is able to be run locally and that there is no code providing any information back to the app provider.  If this functionality is desired by app developers, then they'd need to get a webizen account, etc. 

note:  [[ClientSoftwareRequirements]]

NoteAlso: a few minutes (so far) spent playing with ChatGPT to generate code,
https://github.com/WebCivics/Gojson2rdf 

### Requirement

There needs to be a schema(ontology) that defines the information about the app and the interface.  more information TBD

A model / method  / system for converting JSON based app apis into the format expected by the webizen ecosystem is required; which first requires the webizen interfaces to be defined; and then, by forming some sort of method to convert / translate the underlying webizen interfaces into the format required by the app.

