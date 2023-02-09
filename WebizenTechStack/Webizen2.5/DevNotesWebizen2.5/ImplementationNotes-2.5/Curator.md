For the time-being, i'm calling the platform that's operated by a [[WebizenAllianceHostProviders]] the 'Curator'.  This system is about hosting the webizen host packages; that are likely to be containerised via docker.  The 'curator' platform is effectively about providing a service provider platform; that has different needs. 

This isn't a priority for [[Webizen2.5]] but it is a requirement for [[Webizen3.0]] systems. 

There is a mixture of [[SocialFactors]] including [[CommercialModels]] that need to be addressed; as well as the technical / pragmatic stuff, that's in-turn coupled to the commercial / structural stuff.  

Curator is an integration and refactor of several components to support a membership orientated (ie: like a co-operative or club type of structure ) head-end to support [[Webizen]] users and the network requirements to support [[HumanCentricAI]] built to support [[HumanCentricDigitalIdentity]]. 

The term curator is intended means "a custodian of a collection.".  In this case, the software is defined to curate; AI, Commons and Membership (accounts).

The curator platform needs to be able to activate users.  In-order for users to establish an account, they'll need to be authenticated in a manner that is designed to be improved as to support identity verification of the end-user / webizen network owner. 

Part of how this will be achieved is intended to be supported via the [[WebizenID-DNS]] methodology. 

***The ability to reset passwords to access systems should not be possible via an email password recovery process alone.***  

A study of the requirements for the users environment is important and necessary.  Part of the objective purpose is to reduce the 'online hosting costs' / total cost of ownership.

Cost Assumptions;
- Domain Name: $20 (or less) AUD PA
- VPS $10 AUD PCM ($120PA)

So, Lets assume between $150 - $200 PA.  

Hosted services will need to be orchastrated by a [[WebizenAlliance]] provider.  It is also likely that these services should be supported by a larger [[PermissiveCommons]] DB provided by the [[WebizenAlliance]] Host. 

The service will likely be deployed using docker; and will need to support,
- Headscale (inc. a UI)
- Solid like platform (note: [[ModdingSolid]] )
- Email Host

The Curator platform will need to be able to manage multiple end-users / network owners.

# Curator Logic Engine

The [[Curator]] is the service orchastrator, given there is a need for one. 

Most of the systems use JSON files to define configurations.  There would be various benefits in being able to dynamically update these files via a database. 

need to investigate how a DB like [[BadWolf]] might be used to renders json files. Therein the timestamp functions would be useful for maintaining a log of changes.  Another option is [Dgraph](https://dgraph.io/) alongside others... 

### AUTH logic
​
1. Register domain.
2. Create record.
3. establish hosting env.
4. Assign domain to hosting service.

Identifiers on domain registration, IP address-space & hosting account: assigned to the VPS / server / IP address space.

Note: https://github.com/cockpit-project/cockpit-certificates

5. Establish webizen.rdf URI & dnssec

5.1 Requires IP address space. And crypto gen.

NOTES:  Looks like RSA via OpenSSL? 
https://www.digitalocean.com/community/tutorials/how-to-setup-dnssec-on-an-authoritative-bind-dns-server-2

https://gist.github.com/chexum/d113d198405d9bece0ba3c0844e1a2fd

Therefore foundational crypto library needs to be openssl not certbot. 

Therefore requires SSH access to set-up?  

6. Build network layer. Generate webizen-tls for [[Curator]].
- Assume: use CertBot but can also use OpenSSL? 
- Public key in webizen.rdf

8. Generate [[Curator]] admin accounts (OIDC) & authorised clients.

9. Boot curator and initiate oidc.

Define user Ontology in oidc credential.


#### OUTSTANDING QUESTIONS / THOUGHTS
Use existing credentials? 

Enable account registration.

Similar process to above. But user is employing webizen-DNS & webizen-tls to support generation of client credentials.

Init account. (Assigned domain name, etc).

Can user be assigned IPv6 subnet? 

--> no collisions... 

--> must be Delegated to one network or the other, not both, although perhaps routing? Idk.

User loads client stack, is assigned DNS name and TLS certs. User loads webserver (reverse proxy?) Which gets keys.

#### Address Space Notes

It would be better to try to use the public IPv6 address space, yet define rules about how the address space is then managed.  ATM: I have NFI how to do this properly with [[TailNets]].

### Service Curation

There's a bunch of json files that configure various parts.  Theory to be explored is whether and/or how this might be dynamically managed via a DB.  