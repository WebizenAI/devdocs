# Modding Solid

This document contains a copy of the notes that are otherwise written in the github repo for the project.  

There are several packages that need to be integrated in a particular way to support the initial webizen headend systems - Dev-Environment, etc. (Webizen 2.5).   

At the moment; i'm investigating how to mod a nodejs version of solid, and indeed also which version to mod (atm, idk).  The End result will be more than simply solid; and in-turn also, solid won't be used in the same way solid is usually defined to be used. 

The agent approach is particularly different to alternatives.

## Notes about the AUTH requirements.

- Migrate WebID-TLS to Webizen-TLS 
- Docker file pulls TLS cert from OpenSSL on set-up, whereas ideally this is integrated.
- System has a concept of username.  This might be worth reviewing - perhaps the username can be the full domain name.  IDK.
- Figure out how to support Webizen-DNS
- Integrate OIDC with Backend

Currently code references refer to WebID but this needs to be changed to Webizen. This may require modification in any of the dependency projects that refer to the concept of webid.

code appears to suggestion: OIDC 1.0 addLink(res, oidcProviderUri, 'http://openid.net/specs/connect/1.0/issuer')

https://openid.net/connect/

- Webizen-ID should also be backwards compatible with webid so that existing webid apps can be used with webizen. 
- ACLs are managed using FOAF. This needs to be changed to Webizen. The WebID packages should also be changed to Webizen.
- The AUTH Sequence ATM seeks to employ WebID-TLS or WebID-OIDC - whereas the changes leads to both being employed.
Certificates (PKI)

- Need to figure out what to do with the certificate issuance requirements.
- The key issuance system needs to be harmonised.

WebID /lib/webid/ has a key issuance system that is used by the NSS. This needs to be harmonised with the Webizen key issuance system.  The accepted methods are currently turtle or json-ld. Investigating the use of N3 might be a good idea.

ie: Accept: 'text/turtle, application/ld+json'

Types of Users and relationships

There needs to be a clear distinction between the types of users and their relationships.  The webizen methods will add containers that are commons, it may also have containers (users / agents) that are software agents, etc.  these are distinct to users that are human agents.  The relationships between these types of users and agents needs to be clear.

Account Recovery is presently performed using email.  This needs to be changed...

### Integration Notes

Integration of Headscale UI with Admin system for NSS

Headscale-UI uses Headscale API to manage the server. It is a separate project, but it is included in the Headscale repository.

Terms that need to be found and changed.

#### EMAIL

There is strong use of email in the current system. The Email Host is currently defined to use Google.  This needs to be changed.

Dependencies on email needs to be revised entirely.

WebID
SolidHost
WebIdTlsCertificate

solid.js needs to change. although not necessarily to webizen.  not sure of hte name yet. WIP
solid-host.js
solid:index
well-known/solid

http://www.w3.org/ns/solid/terms#

const ns = require('solid-namespace')($rdf)

note: http://www.w3.org/ns/iana/media-types/
note also: https://github.com/TritonDataCenter/node-http-signature

### Add Non-HTTP Protocols

GUN Protocol: https://github.com/amark/gun
WebTorrent: https://www.npmjs.com/package/webtorrent

### Solid Dependency List

Below are a series of libraries that are connected to the main solid library; these all need to be reviewed; and an approach needs to be considered about how / what is required and how they may need to be modified.

@solid/acl-check": "^0.4.5", https://github.com/nodeSolidServer/acl-check
solid-auth-client": "^2.5.6", https://github.com/nodeSolidServer/solid-auth-client
oidc-op-express": "^0.0.3",  https://github.com/anvilresearch/oidc-op-express
solid-namespace": "^0.5.2", https://github.com/solid/solid-namespace
solid-ws": "^0.4.3", https://github.com/nodeSolidServer/node-solid-ws
mashlib": "^1.8.5", https://github.com/solidos/mashlib
the-big-username-blacklist": "^1.5.2", https://github.com/marteinn/The-Big-Username-Blacklist-JS


@solid/solid-auth-oidc": "0.3.0", https://github.com/nodeSolidServer/solid-auth-oidc
@solid/jose":  https://github.com/nodeSolidServer/jose
@solid/keychain": https://github.com/nodeSolidServer/keychain
@solid/oidc-auth-manager https://github.com/nodeSolidServer/oidc-auth-manager
@solid/oidc-op": "^0.11.6", https://github.com/nodeSolidServer/oidc-op
@solid/oidc-rp": "^0.11.7", https://github.com/nodeSolidServer/oidc-rp
@solid/oidc-rs": "^0.5.6", https://github.com/nodeSolidServer/oidc-rs
@solid/solid-multi-rp-client" https://github.com/nodeSolidServer/solid-multi-rp-client
@solid/acl-check, https://github.com/nodeSolidServer/acl-check
https://github.com/solidos/solid-panes
@solid/better-simple-slideshow
https://www.npmjs.com/package/@solid/better-simple-slideshow is in it too...
