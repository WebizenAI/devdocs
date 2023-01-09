# Client Software Requirements

*I thought i'd done this, but then couldn't find it. apologies.  date: 5th jan 2023* 

*This is more of an overview document than it is a specifications document.  The latter, being [[WorkInProgress]] .*

### Introductory remarks

The webizen 'client' isn't simply a client, but moreover a Read-Write (semantic) Web server, that is based upon the works that have been done by w3c communities and in-particalar - with regard to the basic foundations of the 'web server'; the works relating to the [RWW Community](https://www.w3.org/community/rww/), however there are a multitude of components that turns it into something that is broadly termed 'Webizen'.  The [[Webizen3.0]] objectives are different to the intended longer-term goals, that will require a great deal of work and a multitude of people being involved.  Consequentially, there needs to be an initial environment that provides the basic requirements for people to get involved; and to use a basic version of it, in-order for them to get a better understanding of what it is about and in-turn contribute towards the development of it.   The purpose of the Webizen 3.0 project is to achieve that goal.

At the most basic level; the currently held belief, is that the fastest and most appropriate [[FitForPurpose]] approach currently known, is to support, use, update and adapt the existing [[GoLangLibraries]] that provide support via well-developed libraries that provide solutions to address the [[NetworkingConsiderations]] and in-turn also the need for a well developed web-server solution that can be adapted in some way - which is thought to be via the development of an extension.   Whilst the specificities of the exact approach are still not formerally defined; and in-turn also, the purpose of this and relaed documentation sites being produced (ie: [Permissive Commons DevDocs](https://pct-devdocs.webcivics.org/) ) is to act as a means to communicate the objectives to developers who will in-turn be depended upon, to cooperatively and collaboratively write good code to make it work, etc... AND; that it is desirable that any such persons are aware of the general direction this is intending to go, so that they can consider related factors, as they form approaches to solve problems; and in-turn also, highlight others.

The General Objective is described in the [[Webizen3.0SetupUserExperience]] describes what it should look like / do from an end-users perspective.  The App requirements are closely coupled to the development of the [[HostServiceRequirements]].  

### Summary

The objective is to establish an initial system that works so that applications can be built using it.  This will require a solution for providing the networking requirements (tailscale based) in addition to a web-server (caddy based) which then needs to be extended to support the RWW related functionality; which is intended to thereby provide a means for users to create apps using RWW related principals, that enables the use of a [[Webizen3.0]] system - that can then be employed to further develop the broader [[WebizenTechStack]] and importantly also, provide the technical environment required to do the [[SocialFactors]] works that are absolutely necessary; but are usually not done by software developers themselves.

#### Background

Historically, Webizen (or [Webizen 1.0](https://github.com/linkeddata/webizen) was the name of the Search Engine for people who were using [RWW Compatible](https://www.w3.org/community/rww/) servers - which basically provided discovery of web-ids, which was in-turn useful, when using various RWW Apps - like Cimba.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/IhwAiTOFPrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

There were two thesis written about these works, both supervised by Tim Berners-Lee.
- [Linked Data Platform for Web Applications by Joe Presbrey](https://drive.google.com/file/d/0B_-AWWDVv3V2N3BYXzd4Ujd3c3M/view?usp=sharing&resourcekey=0-o2yMrSbnxnPmTU01y5kHcA)
- [Data Ownership and Interoperability for a Web: decentralized social semantics by Andrei Vlad Sambra](https://drive.google.com/file/d/1BXNIh_f4xj5rT8mgRXECiZd2UHa9ee6c/view?usp=sharing)


> **Related Notes**
> Briefly, from a broader context): [Accountable Systems: Enabling Appropriate Use of Information on the Web.](https://drive.google.com/file/d/1-zLsyUnGH_IBWRXib_-c-pgtPcxBj_Gu/view?usp=sharing)  [HTTPa](https://drive.google.com/file/d/1cPK1zhTO3EsKouPxjz488h6_3vB6IEZd/view?usp=sharing) and [Framework for Policy Aware Reuse of Content on the WWW](https://drive.google.com/file/d/1MP28vgfWrKK8KvZ8YbeV6-fWHGyj70VM/view?usp=sharing) by: [Oshani Wasana Seneviratne](https://faculty.rpi.edu/oshani-seneviratne) - and notably also, the work of independent luminary [Melvin Carvalho](https://melvincarvalho.com/) and the previous (2008) works on Linked Data Spaces & Data Portability [Paper](https://drive.google.com/file/d/1sehesG0PIjKprjowwFi5qUZ5CHtDDi9T/view?usp=sharing) [slides](https://drive.google.com/file/d/1HeivNpzPE-lp6M4vJsoCr91uWCDgxW2V/view?usp=sharing) by [Kingsley Uyi Idehen](https://www.openlinksw.com/dataspace/person/kidehen@openlinksw.com) who seemingly produced a working platform back then as part of the still useful and remarkable [openlink virtuoso](https://virtuoso.openlinksw.com/) platform.*   There is also the paper on [Solid: A Platform for Decentralized Social Applications Based on Linked Data](https://drive.google.com/file/d/1EgOFV1iq5dycAiA5_pRsdQjxmaYvJWiD/view?usp=sharing) which is attributed to various people, which, whilst different to what solid looks like now, is still considered to be a very useful document...  
> 
> *the full scope of contributors is far broader and not intended to be canvassed adequately here....  Indeed also - i haven't made a note of all attributed authors in the docs above, notwithstanding the fact that you can see this information in the documents themselves*
> 
> *It is possible that an alternative solution could be produced using Virtuoso and it is entirely likely that most of the functionality produced via the Webizen Database systems, are likely to work on that platform also - however, i haven't done another recent evaluation of it; and there is much to 'webizen' that is different to what others are now developing, AFAIK.*

### The Mission

The objective is to produce installable software that will provide users the basic webizen software environment required to operate webizen apps.  The [[WebizenAppSpec]] is seeking to start with the foundational principals that were initially applied in the previously working RWW (and some early 'solid') server ecosystem solutions.  The outcome is intended to be the ability to help people whose skillsets are from a variety of different disciplines, support development work through the development of works done via the decentralised webizen platform; which will in-turn generate information about what we need to do to improve it. 

The primary focus is to ensure support for deploying the [[WorkProject]] app, asap.  A basic template was started to be modified sometimes ago ([github link to cooperative projects](https://webcivics.github.io/CooperativeProjects/))  yet without the rest of the ecosystem in place, there wasn't anything useful that's come out of this or other related works seeking to produce the solutions needed to support fairness over more than a decade.  

The Webizen 3.0 project seeks to produce the underlying tooling required to sort this problem out; and then, contributors should be able to generate new apps using HTML/JS/CSS that are in-turn able to work with the underlying Webizen Systems.

The Designs of tooling for Webizen 3.0 is hoped to continue to be useful for future versions, the focus of [[Webizen3.5]] is on [[WebizenPro]] and the development of a [[WebizenAiOS-Platform]] that will operate on hardware that has particular specifications that basically advance the [[HostServiceRequirements]] specifications into something that's designed for the Webizen Pro styled use-cases; that are in-turn, intended to interface with clients that are using an evolved version of this [[Webizen3.0]] stack.

> *NOTE: This is in-turn part of the reason why the far broader body of documents are now therefore provided as to ensure i am making [[BestEfforts]] to support the development of the [[WebizenAlliance]].  Other part of what are considered a requirement is [[PermissiveCommonsTech]] whereby the documentation for that is being developed in an independent documentation site ([Web Civics PCT DevDocs](https://pct-devdocs.webcivics.org/)) and in-turn also, a version of the [[VerifiableClaims&Credentials]] and/or [[OpenBadges]] as to support [[Values Credentials]] and more broadly, the [[TheValuesProject]].  Whilst there is a distinction between the development of content including ontologies and the underlying systems - the notes are being made due to the fact that there is going to need to be support via code that's running the underlying systems; and, this is likely to impact some of the architectual considerations broadly.* 

> *Webizen 3.0 is not intended to be 'the end'; rather, it is intended to be the start of the Webizen Experience.   The solution doesn't need to be complete to start with; yet, it is desirable to ensure that future updates can be made and that the underlying information systems are upgradable; notwithstanding, the ability to use version control to define how and whether [[Webizen3.0Apps]] are compatible with which versions of the Webizen Systems.* 

In future; [[WebizenApps]] are intended to be distributed in  [[HyperMediaContainers]] yet the specifications for this are not yet fully defined; and may not be required for the first version of the Webizen RunTime. 

A list of  [[Historical RWW Apps]] is provided so that you can check-out some examples of how things once worked; and then, get a better understanding of what i'm referring to here...

## Design - Networking & Components

[TailScale](https://tailscale.com/) is a type of *VPN like* technology, that provides the ability to support a FQDN on a Desktop / Laptop Device, regardless of whether its behind a firewall and/or on a dynamic IP. The [TailScale Libraries](https://github.com/tailscale/tailscale) are open-source and are one of the [[GoLangLibraries]] that provides this sort of functionality in ways that are difficult to otherwise identify.  

[Caddy Server](https://caddyserver.com/) is also written in Golang and is an open-source WebServer.  The [Caddy Libraries](https://github.com/caddyserver/caddy) are already [integrated with TailScale](https://tailscale.com/blog/caddy/).   The Caddy Server library has a capacity to be extended via extensions - yet, the most appropriate way to do an integration is still not well defined.  

Tailscale is mostly open-source, with the exception of the Tailscale control server.  The Open-Source project that is seeking to address this problem is called [HeadScale](https://github.com/juanfont/headscale), which is not going to be used in the client software; but is likely to be an essential part of the [[HostServiceRequirements]]. 

At the most basic level, the old RWW server written in GoLang that use to work was [GO-LD or GOLD](https://github.com/linkeddata/gold) one of the lead contributors has then seemingly started on a simplified version [Helix](https://github.com/deiu/helix/) however, i'm not sure where its upto.   

Regardless of the status of helix, or the updates required for GOLD, both will require updating in-order to be made able to work in a manner that is consistant with the design architecture objectives / webizen specification related works.   

> **Security Considerations**
>*I am not sure what the best approach is to ensure that 'clients' (end-users Desktop/Laptop Machines) file-systems are more broadly 'firewalled' off from the network; other than, specified apps (ie: the web-browser or local development apps) and the Webizen Runtime.*
>
>*One idea is to employ a [[Containerisation]] method, however i am generally not sure which of the many possible options is in-fact the best way to go. Usually, web-servers don't provide full access to the underlying systems that they're running on; as illustrates the complexities.*
>
>*Another idea is that perhaps a plugin for whatever app (ie: web-browser or code development env) requires access to the host; is the method used to support integration.  Perhaps in-turn this could employ a method relating to the [[AuthenticationFabric]] to provide access and in-turn also, manage the permissions both relating to the app and the user. whilst seeking to preserve the [[Centricity]] related requirements*
>*Generally overall, the objective is to get something that can be usefully employed to use to facilitate the use of socially-aware-networking apps, for the further development of webizen* 


### DEVELOPMENT CONSIDERATIONS 

#### [[AuthenticationFabric]]

The broader authentication fabric is a complex non-trivial undertaking that will develop.  Historically RWW used solely WebID-TLS which i was critical of at the time, notwithstanding the usefulness of the methodologies generally as part of a broader ecosystem.  To me, the WebID-TLS method was best applied to define an `agent` that is/was device related (ie: laptop/desktop & the context of the user-account); which is different to whose using it, particularly on shared devices. 

Whilst the RWW server was on a VPS somewhere whenever i was using it; in this situation it is different.  So, the question becomes; whether the Caddy Server or the Webizen Extension to it; can be made to issue a TLS Certificate that incorporates the use of a [WebID-TLS Spec](https://www.w3.org/2005/Incubator/webid/spec/tls/) *like* methodology (ie: the ontology methods may be different to the specified, in particular therein - the use of the otherwise specified FOAF version).

> QUESTION:  Is it possible for the local server to provide the certificate from the local server to transparently Authenticate a user; based upon a setting that they may make; that provides the authority for local apps, running on their local 'webizen environment' to authenticate in that way, against their local webizen systems. 
> 
> HYPOTHESIS:  Somehow the LetsEncrypt service needs to generate a WebID in the SubjectAltName field of the certificate.  A similar sort of example (although for a mail.example.com) is described [here](https://wiki.zimbra.com/wiki/JDunphy-Letsencrypt) ([code here](https://github.com/acmesh-official/acme.sh/blob/master/acme.sh))
> 
> IMPLICATION:  The consideration is that a person is firstly authenticating against the host, and if there's transactions happening - then there's an ability to 'know' who that person is; then, they're able to download the client; and that information could be defined in relation to the issuance of the TLS certificate information linked with the client Software; and therefore also, the run-time.  Therefore the question becomes; can the 'webizen apps' running locally - use that authentication information in the local hostname, to provide permissions for the local webizen server? (and in-turn also, support also - the ability to push data to the host server, which relates to a series of use-cases that will develop overtime)...? 

**Related Notes:**
*The [[HostServiceRequirements]] will in-turn require a person to 'create an account', which will in-turn require them to create a login - which is presently achieved via OAUTH2.*  

*Whilst the host-software is intended to be provided as a package that can be installed by users on their own VPS, the belief is that most early users will be using one of the services provided via the Webizen related group itself; taking into consideration the belief that the economic components are thought to be more complex than the ability to make something work in some somewhat simple way...  Nonetheless, the Host end will effectiely provide the ability for a user to be identified via their 'login' on the VPS side; which then enables them to download the client side, and set-up the local client Webizen environment (and networking env.).*

The RWW functionality basically supported the ability to Read & Write [Linked Data](https://en.wikipedia.org/wiki/Linked_data) employing [LDP](https://www.w3.org/2012/ldp/wiki/Main_Page), [WAC](https://www.w3.org/wiki/WebAccessControl), [[WebID]], [WebDAV](https://en.wikipedia.org/wiki/WebDAV) and a RDFLib library suitable to the platform, alongside any other related tooling; Generally speaking, the [OpenLink Virtuoso server (Link To OpenSource Edition)](https://github.com/openlink/virtuoso-opensource) was able to demonstrate compatibility with all of the various versions (AFAIK) that have been developed since their original presentations at the [2008 workshop on Linked Data on the Web](https://web.archive.org/web/20081101203439/http://events.linkeddata.org/ldow2008/).  

> NOTES:
> *Theoritically, the afore mentioned Virtuoso software could be employed as an alternative to caddy and GOLD.  Yet IMHO / AFAIK; Virtuoso doesn't appear to be as easily advanced to support the growth of the ecosystems via the [[Webizen3.5]] scope of works and beyond.  
> 
> Also, there are various additives, such as the use of [[Non-HTTP(s)Protocols]] for [[DecentralisedOntologies]] / [[PermissiveCommonsTech]] and [[Currencies]] alongside [[VerifiableClaims&Credentials]] that are not thought to be easily applied to virtuoso.*  
> 
> *Whilst, other technology pieces were being developed along the way; they were often not able to be successfully integrated. This particularly impacted the ability to produce Credentials, payments (inc. micropayments) and permissive commons related systems / solutions.*
>  
> *Historically there has been a sort of battle that went on between two distinct groups.  This can be seen in the code between the tools and applications that have been developed using [JSON-LD](https://json-ld.org/) and those that relate to the use of [Notation 3](https://www.w3.org/DesignIssues/Notation3.html) and/or [Turtle](https://en.wikipedia.org/wiki/Turtle_(syntax)).*

#### [[Non-HTTP(s)Protocols]]

There's a long-list of non-http protocols that are sought to be supported for various reasons, however not all of these protocols need to be supported for [[Webizen3.0]].

Work on developing the [[PermissiveCommonsTech]] documents is underway and will provide more specific requirements analysis once those works have been further progressed. 

#### [[TemporalSemantics]]

Temporal semantics require a means to support version control, which will in-turn be provided more meaningful support via the [[PermissiveCommonsTech]] ecosystems.

#### [[Database Requirements]]

Whilst there is already database methods employed by all of the previously noted modules; i'm unsure whether and/or how this might be improved and/or harmonised better, as part of the development process.

#### Notes RE: [[EconomicSystems]]

At this stage, the systems that are sought to be used - to some-degree, need to be available as open-source solutions.  Yet, part of the core purpose of Webizen is to introduce [[BiosphereCalcs]] and [[SocioshereCalcs]], which in-turn seek to act to support [[EndingDigitalSlavery]]. 

The problem is of course, that those systems don't exist - until they've been made; and its a complex series of requirements to process in a way that achieves the sorts of outcomes that are desired, without unintended consequences...  Its always far easier to do something poorly;  [[BestEfforts]] must be made to seek to ensure the outcomes are [[FitForPurpose]].

#### [[WebizenApps]]

I have made a copy / collection of the old RWW & Solid apps that i could find, noting that most of them do not work on the present versions of solid.  The [GitHub repo is here](https://github.com/WebCivics/solid-stuff).  

Once a solution is up and running, the objective will be to create the apps we need to make the environment useful.  This is likely to support a version of the [[HyperMediaContainers]] solution; although it may be as simple as a webizen.rdf file or similar. 