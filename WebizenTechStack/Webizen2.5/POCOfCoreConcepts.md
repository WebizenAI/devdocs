# POC of Core Concepts

The core concepts that are sought to be demonstrated in the Webizen 2.5 version of works.

1. Personal Datastore
2. Permissive Commons Technology
3. Webizen Agent & Admin interface
4. HTTP Services on laptop/desktop on any broadband connection
5. App Development Environment


### CONSIDERATIONS

NOTE: [[RootConcepts]]

Database Method

Temporal Support is critical to the ecosystem.  As such BadWolf appears to be the best choice to achieve that, whilst it appears to use a query interface that is different to SPARQL (seemingly adding temporal support); so far, it appears to be the best available option for rapid development.


Credentials
Credentials and moreover the credentials wallet is often called 'identity' which is something that i materially object to - nonetheless, there are requirements for 'verifiable claims' and this ecosystem has developed from the objective to produce that type of outcome.

The best library i've found so far is: https://github.com/hyperledger/aries-framework-go/ 


AUTHENTICATION
A WebID-OIDC based method is desirable.  An OIDC library: https://pkg.go.dev/github.com/coreos/go-oidc/v3/oidc exists, but is unlikely to support the WebID related extensions.

NOTE:  the WebID ecosystem is premised upon the use of FOAF; which is not necessarily the way i want to go with the ontology ecosystem.  