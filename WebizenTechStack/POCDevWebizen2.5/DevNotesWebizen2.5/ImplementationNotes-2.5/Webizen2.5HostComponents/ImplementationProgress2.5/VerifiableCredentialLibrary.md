Need to find a suitable VerifiableCredentials Library. 

backwards compatibility to DIDs required; yet not sure whether the implementation should rely upon it as a future development path priority. 

NoteAlso open-badge library.

## Why is this important?

Internationally, a rollout of 'digital identity' has occurred using 'verifiable claims', which is going to be used by governments and others to perform identity verification related functions.  Whilst this is generally considered to be an ideological competitor with respect to the useful definition of human identity; the ability to operate services at all, is likely to require interaction with these sorts of systems.  If alternatives are available, that's great - but if not - then it'll need to be supported.

https://github.com/identity-com/credential-commons

https://pkg.go.dev/github.com/hyperledger/aries-framework-go/pkg/doc/verifiable

### Considerations
It may be better to seperate the identity logs from the informatics logs.  perhaps a method to do this might be use use [[BadWolf]] as its got temporal support, yet, the query interface isn't sparql - although it is sparql based.  

### Json-LD

The use of JSON-LD has dominated the 'commercial' space; therefore perhaps the 'legal transactional' stuff (commercial / economic) should be in json-ld whilst the networking can be in n3 (the practical stuff); thereby producing a well defined distinction via serialisation.  


## Future Usecases

The credentials interfaces are likely to be required for various sorts of electronic contract automation.  Food delivery, etc.  It'll need to act in a federated way; and it'll need to be operational even if the user is offline - so it needs to be supported by curators. 



