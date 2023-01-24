There is no existing WebID-DNS method that i am aware of, as such, whilst the general method principal is the same; the application is different.

SeeAlso: [[WebizenDNSNotes]]

## WebizenID-DNS Method

The WebizenID-DNS systems will require a DNS record that supports the use of a URI.

The most likely standard that could apply is the URI DNS [RFC7553](https://www.rfc-editor.org/rfc/rfc7553.html) however that RFC does not make specific note of the use of an RDF URI.

A similar type of concept is employed by the [LetsEnrypt DNS-01 challenge](https://letsencrypt.org/docs/challenge-types/) service, although it makes use of a TXT record which is defined by [RFC1464](https://www.rfc-editor.org/rfc/rfc1464.txt).  

### WebizenID-DNS & IPv6 Extensions

The method will employ  [DNS Security Extensions(DNSSEC)](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) and [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) which are invaluable for the purpose of securing the relationship with the DNS record provided.

Further investigation is being undertaken to get a better grasp on how else the WebizenID-DNS related records can serve a useful purpose, as part of the broader ecosystem requirements. 

The [[WebizenDNSNotes]] page goes into a bit more detail of the current WIP process that needs to occur to better comprehend the requirements herein.

### Relationship with TailNets

The Webizen networks are built upon the use of [[TailNets]] which are presently fairly basic, but may become far more complex in future.  Within these networks there is a seperate DNS system, that is designed to be complimentary to the public internet DNS system. 

This 'internal' network currently does not support as many DNS records.  In-fact, its thought that it presently only supports `A` Records.
*SeeAlso: [List Of DNS Record Types Wikipedia](https://en.wikipedia.org/wiki/List_of_DNS_record_types)*

Furthermore; the Public Domains, which are effectively domain records in the public internet; probably should not be used within the [[TailNets]].  As such, a method to distinguish both in a manner that does not result in collisions is required, but not necessarily problematic for the intended purpose of the WebizenID-DNS method. 


