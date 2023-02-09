# Solid / RWW / CrossCloud - Fork

I'm unsure which version to start with.  In many ways, i'd prefer to use the older ones rather than the newer one.  I've done some investigation (per below) about the newer stack - and i'm now going back to review the older work.  

There's some more work to do on the AUTH logic stuff relating to the [[WebizenID]] problem, which will become an important part of deciding which way to go here... 

***nonetheless - recent notes per below;***

I started this document to make notes about the changes, and have then ended-up spending more time writing about the history; i guess overall, there's still a great deal of emotion tied up with regard to my involvement in a project over many years.  Innately, there's a bunch of complexities; and i'd prefer not to go into the depths of it. 

Nonetheless - this document is intended to be updated with more practical support about the changes, and i'm now therefore also noting that it needs to be updated to provide more than simply some notes about historical stuff; and a few useful bits and pieces. 

At the moment; I am investigating how the most recent version of the [node solid server](https://github.com/nodeSolidServer/node-solid-server) implementation can be modified.  This is differen to the version currently being developed by [inrupt](https://www.inrupt.com/solid) and different also to the fork produced by one of the key solid contributors sometime ago that he termed [Life Server](https://github.com/interop-alliance/life-server), which appears to focus on the use of Verifiable Credentials (noteAlso: [[DIDsEval]]). Fundamentally, i'm making significant changes to the way the systems work; as such, if i am successful (and the logic of my approach end-up passing the POC tests), then the two systems aren't going to be natively compatible (although the ability for a webizen user to leave the ecosystem and migrate their systems to solid via a [[DataPortability]] solution is considered to be a requirement - notwithstanding, the fact that some functionalty may not be available on the solid based systems and visa versa.)
 
## Introduction

I've made some Historical Notes below (and elsewhere in the documentation), but have decided to put that info at the end rather than at the top of this note.  The history is important, but something that is hoped to be better understood as a consequence of a useful implementation of something else; which is the purpose of this documentation.

Nonetheless, i'll make a quick intro to provide context for the notes about changes;

The current Implementations of Solid are loosely similar to the approaches sort in my previous [[Knowledge Banking Infrastructure]] models.  Inrupt has implemented with Governments and the BBC broadcaster.  These systems provide 'pods' for 'consumers' to store all their data in; sometimes these 'pods' are also called vaults. 

## Tech Notes

One of the (new) webizen approach considerations is to seek to ensure [[NoLock-ins]].  The Inrupt/Solid works are a useful means to support a Webizen Ejection capability, which can simultaniously seek to ensure the user has somewhere to go (ie: a solid server). Therefore whilst changes are being made to support the way the webizen ecosystem is intended to work; these systems should largely provide a [[DataPortability]] capacity, so that users can reprocess their information and go use a Solid Server that might better suit and/or support the way they express / employ, values.  Nonetheless; there are an array of functional differences as such, the system are different.

### Ecosystem

I'm fairly sure there's some issues with the diagram below, its been quickly produced and i'm not entirely happy with it - nonetheless, better than nothing! (Directions for intepretation - use your imagination, try to understand not simply 'record & copy')

![[20230119_webizenDBDiagram1.jpg]]

There's effectively two primary 'storage' systems, one is about the [[PermissiveCommonsTech]] where the contents are intended to be shared with someone (at least 1 other person); and whilst the storage / distribution protocols are intended to support [[Non-HTTP(s)Protocols]] part of the design SHOULD REQUIRE a HTTP(s) protocol version to be available, notwithstanding the issue that some features may not be able to be provided via that methodology specifically and/or directly; therein, might have a web-process that can generate the HTTP records on request (like static site generators). 

Another diagram to assist further is provided below. 

![[webizen_diagram_1-2.jpg]]

### Changes to the Solid/RWW systems.

The much older RWW systems that were produced by the same group who created the first Webizen Search Engine - has some code written in GoLang; but, it has an array of problems that requires significant work to update, fix and make useful.  Nonetheless in many ways the old RWW systems are considered to be a more useful set of functions to use to build the modern webizen (private) agent and/or the methods for managing the underlying interface to user-apps.   more on this later.

Presently the focus is moreover on setting-up a 'webizen network provider' side platform, which requires a [[HeadScaleImplementation]] in-order to activate the 'tailnets'.

Whilst i'm not entirely sure how much of the modern solid systems are at all useful; the node-solid-server variants provide support for some functionality that can in-turn be rewired and integrated with a UI system for managing the Headscale implementation.  

An existing UI project has been developed using nodejs related libraries; it is therefore hoped that an integration can be done.

Headscale (or moreover the tailnet / tailscale ecosystem) requries a OIDC accunt for establishing the ability to create a private network. various solid implementations provide [[WebID-OIDC]] provider implementations, which is hoped to be employed..

Whereas the older RWW systems were more focused on the use of Turtle (TTL) the newer systems appear to be very much focused on the use of JSON-LD.  An example of a fork that has been made by one of the former solid team members is called [Life Server](https://www.npmjs.com/package/life-server) however it employs a different approach.  Most of the services components are using json configuration files, it seems logical that there may be a way to create dynamic configuration interfaces although the exact method is presently unclear.

### Specific Changes

Presently the concept appears to provide a system that provides pods for human users, and when last tested, there appeared to be significant problems with the logic for the access control systems.  As such, the focus of work to modify the existing Node-Solid-server implementation to something that is considered usefully employable for the Webizen 2.5 (early stage) implementation; is to focus on its potential usefulness for managing accounts and in-turn also, managing parts of the permissive-commons ecosystems.   This will basically augment the authentication logic and therefore also, the  useful employment of the 'pods' (seeAlso: [[Linked Data Platform]] ).

A series of 'adapters' will be required in-order to support various webizen methods related functions; and this will in-turn, lead to various changes to the implementation methods use of any historical solid related works.  Yet, fundamentally, the older RWW Apps should be relatively easy to modify in-order to make work. 

#### Agents

The WebID ecosystem is being modified; as such, the development term used for this ecosystem will be [[WebizenID]] and will incorporate multiple componets that will be loosely based upon [[WebID]] and related works

Solid currently (optionally) uses WebID-TLS certificates, this will be converted to [[WebizenID-TLS]] methods that are used to define a HTTP(s) Software Agent. 

Ontological properties;

Must Have;
1. An Owner
2. Information about the User (may be different from the owner)

Might have;
- Information about what's available on the server

It will provide an ability to create [[AgentDirectory]] entries about the parties involved.

Fundamentally; the informatics defining a [[HumanCentricDigitalIdentity]] are not achieved solely via any 'solid' system (nor is it solely achieved via a 'verifiable credential' / DID/SSI).  

#### 'Pods' / Accounts

It will provide the ability for pods to support topic based data-resources.

Pods will have different classifications as they're used for different purposes. 

#### WebServer

It should provide an ability to support a Read/Write WebServer that supports RDF (semanticWeb) based sytems.  

#### DNS

The system should support multiple hostnames.

#### Database

The use of a more sophistocated database is being considered. The [[akutan]] solution is amongst the options, however further investigation will be done once the basics are operationally functional.

##### Desirable Features

It would be better, if apps developed for the webizen ecosystem, provided a networked means to interact with 'Solid' based system users.  This may mean that transformers are required - which are generally required anyway, its just another use-case for how they may be used.  Yet, there's some aspects - that may not already be supported by these other systems that may end-up being required / non-negotable - particularly with respect to the [[ValuesCredentials]] as there have been SERIOUS problems in the past which the solid community has not resolved (noting - it doesn't appear to be a 'mistake' on the part of those who were directly involved).



## Historical Notes
Implementation versions of what is now commonly known as 'solid' has been developed over a long period of time, and throughout that period there have been various names for it.  indeed also, the fundamental concept is something that the Team led by Tim Berners-Lee building the first Web-Browser had 'baked in', and my works since 2000 have always sought to achieve a similar sort of outcome.  

The 'standards' work demonstrated a concept called 'data-spaces' at around 2007/8; which i found as an implementation (openlink virtuoso) around early 2011; and when getting involved in the W3C (Strongly MIT related) Community Groups; the community group focused on these works was called RWW or Read-Write Web.  Linked to that group were other efforts that i was not really fully aware of; including CrossCloud and thereafter SoLiD, which was later termed SOLID and as things became very hard, Tim Berners-Lee effectively left W3C and created a Start-up to prosecute the development of an approach via a company established called inrupt.    As funding became usefully available and persons became hired to get involved in building it;  I had some serious problems with some of those involved, which is a matter that remains an unresolved.

NOTE:  having done alot of work reviewing history, etc.  There's so much that is made apparent, Tim Berners-Lee has considered at times much earlier than otherwise known.

Whilst i have many frustrations that i prefer not to 'get stuck into', particularly around the struggles that i've known so many incredible minds / contributors to the future of mankind - having experienced whilst doing work that is deservant of respect and admiration; as others, all over the world appear to gain a perception that 'Tim Berners-Lee *Invents Everything*', most often - part of the unfairness about that remark, is that W3C is generally very transparent in its approach - information has been published online and is generally available if people care to look (although its not always easy); and, the benefit that so many others gain - is privacy. They're protected in some ways from the [[MustBeFamous]] attack vectors that are otherwise employed elsewhere. 

Nonetheless; when looking back at the timeline, there are others whose remarks are also important to consider.  Therefore, here is a timeline of videos which mainly focus on the statements made by Steve Jobs and Tim Berners-Lee; i've started with the video of [Steve Jobs about 'interpersonal Computing' in 1990](https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1WXgSplqAB62oMSdwqli_1G3k37c0y6fZkZJLzc5Www8&font=Default&lang=en&hash_bookmark=true&initial_zoom=4&start_at_slide=8&height=800#event-interpersonal-computing) (noting, The World-Wide-Web was produced a few years later on a NeXT box).

### Solid/rww historical auth notes, etc.
The Authentication Schema historically used [[WebID-TLS]] which is being increasingly depricated; as the growth / maturity of [[WebID-OIDC]] methods develop beyond what existed when I made a [UX Example 2015](http://dev.webcivics.org/)  (use anytext for entryform); NB Also, earlier example to illustrate concepts  [put online on the 29th october 2013](http://mediaprophet.org/ux_KB/index.html#0)).  During this period of time, a great deal of focus and attention was put into the development of the Web Payments work and related requirements; including but not limited to, the Credentials work, which is now known as 'verifiable credentials' and 'decentralised identifiers' or DIDs (which some of a particular mindset call 'digital identity'); there has historically been two main tribes, which can be seen via the notation of eith JSON-LD or Turtle / N3.   Historically also, others were involved in producing WebAuthn as well as other tooling; which is important to note, but not so much associated with the solid related politics / baggage / [[SocialFactors]].

## Modding Solid

below notes i a copy of the notes that are otherwise written in the github repo for the project.  There are several packages that need to be integrated in a particular way to support the initial webizen headend systems - Dev-Environment, etc. (Webizen 2.5).   

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