# Solid / RWW / CrossCloud - Fork

I started this document to make notes about the changes, and have then ended-up spending more time writing about the history; i guess overall, there's still a great deal of emotion tied up with regard to my involvement in a project over many years.  Innately, there's a bunch of complexities; and i'd prefer not to go into the depths of it. 

nonetheless - this document is intended to be updated with more practical support about the changes, and i'm now therefore also noting that it needs to be updated to provide more than simply some notes about historical stuff; and a few useful bits and pieces. 

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

It would be better, if apps developed for the webizen ecosystem, provided a networked means to interact with 'Solid' based system users.  This may mean that transformers are required - which are generally required anyway, its just another use-case for how they may be used.  Yet, there's some aspects - that may not already be supported by these other systems that may end-up being required / non-negotable - particularly with respect to the [[Values Credentials]] as there have been SERIOUS problems in the past which the solid community has not resolved (noting - it doesn't appear to be a 'mistake' on the part of those who were directly involved).



## Historical Notes
Implementation versions of what is now commonly known as 'solid' has been developed over a long period of time, and throughout that period there have been various names for it.  indeed also, the fundamental concept is something that the Team led by Tim Berners-Lee building the first Web-Browser had 'baked in', and my works since 2000 have always sought to achieve a similar sort of outcome.  

The 'standards' work demonstrated a concept called 'data-spaces' at around 2007/8; which i found as an implementation (openlink virtuoso) around early 2011; and when getting involved in the W3C (Strongly MIT related) Community Groups; the community group focused on these works was called RWW or Read-Write Web.  Linked to that group were other efforts that i was not really fully aware of; including CrossCloud and thereafter SoLiD, which was later termed SOLID and as things became very hard, Tim Berners-Lee effectively left W3C and created a Start-up to prosecute the development of an approach via a company established called inrupt.    As funding became usefully available and persons became hired to get involved in building it;  I had some serious problems with some of those involved, which is a matter that remains an unresolved.

NOTE:  having done alot of work reviewing history, etc.  There's so much that is made apparent, Tim Berners-Lee has considered at times much earlier than otherwise known.

Whilst i have many frustrations that i prefer not to 'get stuck into', particularly around the struggles that i've known so many incredible minds / contributors to the future of mankind - having experienced whilst doing work that is deservant of respect and admiration; as others, all over the world appear to gain a perception that 'Tim Berners-Lee *Invents Everything*', most often - part of the unfairness about that remark, is that W3C is generally very transparent in its approach - information has been published online and is generally available if people care to look (although its not always easy); and, the benefit that so many others gain - is privacy. They're protected in some ways from the [[MustBeFamous]] attack vectors that are otherwise employed elsewhere. 

Nonetheless; when looking back at the timeline, there are others whose remarks are also important to consider.  Therefore, here is a timeline of videos which mainly focus on the statements made by Steve Jobs and Tim Berners-Lee; i've started with the video of [Steve Jobs about 'interpersonal Computing' in 1990](https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1WXgSplqAB62oMSdwqli_1G3k37c0y6fZkZJLzc5Www8&font=Default&lang=en&hash_bookmark=true&initial_zoom=4&start_at_slide=8&height=800#event-interpersonal-computing) (noting, The World-Wide-Web was produced a few years later on a NeXT box).

### Solid/rww historical auth notes, etc.
The Authentication Schema historically used [[WebID-TLS]] which is being increasingly depricated; as the growth / maturity of [[WebID-OIDC]] methods develop beyond what existed when I made a [UX Example 2015](http://dev.webcivics.org/)  (use anytext for entryform); NB Also, earlier example to illustrate concepts  [put online on the 29th october 2013](http://mediaprophet.org/ux_KB/index.html#0)).  During this period of time, a great deal of focus and attention was put into the development of the Web Payments work and related requirements; including but not limited to, the Credentials work, which is now known as 'verifiable credentials' and 'decentralised identifiers' or DIDs (which some of a particular mindset call 'digital identity'); there has historically been two main tribes, which can be seen via the notation of eith JSON-LD or Turtle / N3.   Historically also, others were involved in producing WebAuthn as well as other tooling; which is important to note, but not so much associated with the solid related politics / baggage / [[SocialFactors]].