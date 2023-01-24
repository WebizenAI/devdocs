The WebID ecosystem is being modified; as such, the development term used for this ecosystem will be [[WebizenID]] and will incorporate multiple componets that will be loosely based upon [[WebID]] and related works.

Solid currently (optionally) uses WebID-TLS certificates, this will be converted to WebizenID-TLS methods that are used to define a HTTP(s) Software Agent. 

Ontological properties;

Must Have;
1. An Owner
2. Information about the User (may be different from the owner)

Might have;
- Information about what's available on the server

It will provide an ability to create [[AgentDirectory]] entries about the parties involved.

### WebizenTailNets

The Certificate issuance system needs to support the DNS systems within the Tailnet as well as to the public internet.  

The first thought is that perhaps the certificates are issued for use on either network (not both); if this is the case, then the problem doesn't matter so much; however, 

if the certifate is going to require multiple SAN identifiers to define the certificate to be valid for both environments; then, it is essential to consider the implications.

