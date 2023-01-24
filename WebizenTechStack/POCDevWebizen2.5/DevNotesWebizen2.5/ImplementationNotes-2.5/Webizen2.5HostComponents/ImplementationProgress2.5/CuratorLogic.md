# Curator Logic Engine

The [[Curator]] is the service orchastrator, given there is a need for one. 

Most of the systems use JSON files to define configurations.  There would be various benefits in being able to dynamically update these files via a database. 

need to investigate how a DB like [[BadWolf]] might be used to renders json files. Therein the timestamp functions would be useful for maintaining a log of changes.  Another option is [Dgraph](https://dgraph.io/).

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

Assume: use CertBot but can also use OpenSSL? 

Public key in webizen.rdf

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