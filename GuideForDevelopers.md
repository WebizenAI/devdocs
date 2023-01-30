# DRAFT: Guide For Developers

This note is intended to provide a guide for developers.  The implementation project (ie: working code / usefully working software) is in its early stages.  This is intended to provide an introductory guide for persons interested in usefully helping to implement the webizen ecosystem.   

In future; This document is likely to be broken down into pieces and placed into the corrasponding navigation folder.  For now, i hope it helps more than the other docs produced previously were able to provide without this addition.  The document contains notes about various factors associated to the current situation and works in progress (wip); both, from a practical / technical perspective; as well as some [[SocialFactors]] related   notes (not that i'm seeking to discourage any good souls from helping in anyway! )

## Introductions

I am very nervous about the step between now and the point where the basics are functional as a working system (part of the broader system) that's able to be used to generate both signed RDF documents to support values, licensing and compensatory considerations (overall - values credentials) to better manage hygiene / expectations / community engagement. The requirements to get to that point are not simply s/w dev, but its impossible to get the social (/governance) structures in-place without the functional software that demonstrably provides substance to the intended purpose of the ecosystem methodologies, etc. 

The objective milestone is to have the components required to support [[HumanCentricDigitalIdentity]] and [[HumanCentricAI]] which instrumentally involves engendering support for [[ValuesCredentials]] ([[TheValuesProject]]) as to usefully support the [[WorkProject]] /  [[TheWorkPlatform]].

But that there's a fair bit 'under the  hood' considered essential to get there...  

The foundational concepts predates: [[iBank]] from 2000, which led to: [[Basedrive]].   

***_"It was a Bill Gates take-over-the-world platform,"_ source: [The Age Start Me Up 19th June 2004](https://www.theage.com.au/national/start-me-up-20040619-gdy1tc.html)***  as is noted in the document about the future [[HardwareStrategy]]

As was the case then and in every other case since; actors have always sought to exploit 'the opportunity' (in bad faith) which has led to various outcomes of significant, but also various very negative implications...  

I've protected the general 'stature' of my body of work over time, and indeed also advanced it - spectacularly - overtime; but i haven't really committed to the implementation undertaking properly previously; mostly because of the importance of the moral factors involved - given the situation that these systems if produced effectively, will have an enormous influence over the lives of others.

More than the trust involved in any single event; whether it be obtaining pathology results or various other things.  done poorly, i think there's some dangerous implications - although - not in a way that is extensively different to the jeopardy invoked by various other applied technology ecosystems by others - but i can only be focused on what i do, not what others do, etc.  if that makes sense...  

So the implication of building / deploying this stuff 'properly'; is a big deal for me. 

Overtime; there have been many people who've helped ensure i'm still alive along that journey (that i want to recgonise and honour, if / as i get to implementing the useful outcome); and certainly also - an array of bad actors that will do whatever they can to acquire, pervert and turn it into some sort of mass aggregation machine that acts to pervert the experiences / lives of people - for profit.  I've had alot of horrible experiences; which have contributed / helped to inform my designs / design requirements, but most people won't / don't understand; and that's ok, because promoting trauma would be kinda evil - but nonetheless - overall, this is a big step that i'm both excited about, but also very nervous about.  a genuine approach taken by me, will involve a commitment to/of 'faith' (people misuse the term 'trust' all too often).

For a conference program i put together that i entitled '[The Trust Factory](https://2017.trustfactory.org/)', i produced & published this video on Christmas day 2016 (noting YouTube changed the displayed date when i changed the settings from unlisted to public); it provides a summary of the basic concepts. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/e9vROTibKiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

A more recent [(early 2020) broader systems diagram can be found here](https://github.com/mediaprophet/TFStuff/blob/master/cyberPhysicalSociety.png) and a really complex series of [Diagrams from 2019 can be found here](https://raw.githubusercontent.com/mediaprophet/TFStuff/master/problemsV3Concepts.svg). 

I have provided some thoughts and considerations below, but moreover any useful assistance between now and when the [[TheWebizenCharter]] and [[WebizenAlliance]] can be setup through the initial implementation of the [[WebizenTechStack]] isn't presently able to be managed as well as is otherwise desirable.  Some of the intrinsic qualities have demonstrably employed a methodology i have noted: [[Social Encryption An Introduction]]. 
Yet, whilst works look to become structured via some sort of group entity structure; the time between when this is able to have been done, and now, has risk-factors that are unlikely to be able to be addressed; therein, 'competitive behaviours' are often linked with a social-graph that's unable to be triaged and there's no existing [[SafetyProtocols]] that are operating to protect people from the consequences of bad actors / [[SocialAttackVectors]] that have proven overtime to be at times sophistocated.

Yet no solution to these problems can be made, unless people go about making them.

Some more thoughts about it are noted below; but for the purpose of this document, i'll provide a table of links to about the elements that are being / sought to be developed, which are otherwise listed within this sub-folder; and other notes throughout this devdocs compilation / guide.  Essentially, the purpose of these devdocs (in their entiry) is to act as a guide / provide assistance as required by other people to help get this important next stage done; with or without financial investment and the means to provide financial compensation imminently for those who are able to get involved as webizen developers at this very early stage.  Once this is achieved further works are intended to be done within the [[WebizenTechStack]].  

#### NOTE: ABOUT SOFTWARE LICENSING METHOD

It is important to note that no license has been applied to these works as yet; in-effect, the copyright notice is all rights reserved.  The reason for this, is that the use of the tools produced as part of [[TheValuesProject]] generates a different type of licensing schema; that is intended to provide an alternative that acts to [[EndingDigitalSlavery]].  therein, the intended outcome is that people get paid for their work, but not in perpetuity; that is, once the caculated amount that is due via the [[WorkValuationMethods]] then the useful derivatives of that work becomes entirely open-sourced (ie: MIT license or similar); but that, doing good and useful work that benefits others - shouldn't incur [[DigitalSlavery]] or reasonably justify other [[SocialAttackVectors]].  These future licensing schemas can be applied in a way that distinguishes different classes of users and use-cases; and, is intended to be supported via [[Micropayments]] and other [[Currencies]] methods; which renders an array of complex implications as persons are not simply making payments to 3rd parties, but they're also able to be renumerated in connection with the beneficial use of their [[KnowledgeWork]] related derivative outcomes.  I also seek to expressly note; that the entire focus is on seeking to ensure people get paid, not paid in perpetuity.  These considerations form part of the foundational frameworks for [[TheWebizenCharter]] and corrasponding [[WebizenAlliance]] frameworks that need the basic tooling made before it can be properly established.  So, that's what this implementation is about. 

Yet, until that is done, there's issues that fundamentally relate to the [[History of Banking, Knowledge Economy and Moral Poverty]] that cannot be addressed until there is a means to do so technically.  As such, this stage is both a bit messy and still features unwanted burdens, intrisically, the purpose of this project is seeking to form means to sort it out.

Now therefore; A summary of now; is thereby provided,

## Development Components

1. "Church & State" App/Database basics
	the terms 'church' and 'state' can be otherwise defined; for example,
	- Church  = soul, self, consciousness, etc.
	- State = community, social, experiences that relate in some way to law, etc.
	
	The Webizen environment has two independent agents for every human entity; one is the private 'Webizen' Agent ("church" ie: matters between oneself & god); which stores the information that has not been shared with any other entity; other than in cases where [[GuardianshipRelations]] / [[GuardianshipSemantics]] are required (although the exact method is still undefined). This design requirement is considered to be the essential ingredent for the entire ecosystem and is designed to support [[FreedomOfThought]] amongst other factors relating to [[SafetyProtocols]]. The rest of the ecosystem may be described as components that are required to support the function of this key ingredent - [[TheWebizenAgent]].
	
	[[TheWebizenAgent]] will be developed to perform the private AI processes ( [[HumanCentricAI]] ) that relates to a [[Human Consciousness]] and their private and internally managed 'stuff'.  In-order for a [[PermissiveCommons]]  sharing event to occur ("state" - matters that relate to society / law), a [[ValuesCredentials]] (contract law) needs to be generated and defined. (note: [[WhatAreTheCommons]])  At which point, the second agent / database built via [[PermissiveCommonsTech]] stores a copy of the records which are asserted permissions about how, whom and upon what conditions records are allowed to be employed.  
	
	The processor (AI agent) for these systems needs to accomadate the means for individual persons to employ personal informatics (church) in queries that relate to commons informatics (state) as to support the naturalised interfaces / applications.  Yet this process is inately private and considered to be deeply personal & protected. 
	
	Whereas the [[PermissiveCommonsRequirements]] render logic for the distribution of assets and is in-turn also supported with a system of [[Currencies]]. Each instance is associated with a legal entity and a definition of the instance is required; which does in-turn associate with the responsible parties of that instance, associated to their webizen agents (and related cryptography chains, etc.).  
	
	Both of these systems require 'Graph Based Databases'; whilst there are different sorts of requirements for the [[PermissiveCommonsTech]] than [[TheWebizenAgent]] and related systems. The use of solutions that support [[GeoTemporalSemantics]] and/or [[TemporalSemantics]] are being critically evaluated; however, is yet to be formerally implemented.  

2. Languages & Serialisations
	
	Primary S/W Dev Language is GoLang. 
	The implementation is primarily focused on GoLang as a consequence of various factors; but in particular, the various libraries required to make this initial implementation with extremely limited resources, are all mostly in golang.  I am also finding it easier to learn GoLang than alternatives, and frankly also, i'm not really a fan of nodejs or typescript stuff - nor do i think that its the right approach, other than where necessary to produce interfaces, etc.  
	
	It is worth noting; that there is both an array of older SemWeb works that have been produced in Python, there are also an array of AI stuff in python; and the training data for some of the biggest AI Assistants, have had far more python than any other language.   Personally, i haven't spent time recently looking at py as the components needed to address the [[BasicWebizenNetworking2.5]]  / [[NetworkingConsiderations]] are in golang.
	
	SemWeb (RDF) Serialisation: there are various competing factors involved here. RDF Serialisations SHOULD BE interoperable. So a document or resource that is provided in one form of serialisation is able to be lossly transpiled to another serialisation - in theory, yet some serialisation methods have different qualities to others.  
	
	The vast majority of web-services use JSON and therefore JSON-LD or Linked-Data serialised into JSON is the preferred native method used for those purposes. The JSON-LD works are generally associated with a particular - commercially focused ideology, that has various characteristics that are better associable with those methods than is the case for others.  
	
	Note also; many of the software packages used employ JSON Configuration files...
	
	The earliest serialisation method was XML based, ie: rdfa. 
	
	A group associated with Tim Berners-Lee's early efforts on producing Semantic Web Technology, produced a serialisation method called N3 which is a super-set of Turtle.
	
	The preference, where possible, is to look to employ N3 & related serialisation methods; whilst the practical reality in many circumstances may be that json based serialisation methods are required.   Therein, the approach may be that where logic/syntax, etc. is sought to be private; the use of N3 related methods may render improved support than can otherwise be implied with json based interfaces. 
	
	User Interfaces:
	User interfaces are sought to be primarily produced using HTML/JS/CSS, however there are an array of different NodeJS based solutions that are currently in the mix. 
	
	More details below in the section about 'client', 'host' and 'services' in particular.

3. AUTH Fabric
	The tech platform produces a sophisticated [[AuthenticationFabric]] that is loosely based upon the use of [[WebID]] related methods / concepts; but presently renamed 'WebizenID' as a means to distinguish between the two concepts / methods, whereby both may be electively supported simultaniously (user choices) for some components / implementation methods; although the qualities of other systems are different.
	
	The components include; but are not limited to,
	
	Each User requires their own domain name as there is extensive use of DNS related functional attributes.
	
	WebizenDNS:  IPv6/Dane supported Cryptographic signatures and an RDF document that follows the general [[WebID-RSA]] methodology, although likely not employing FOAF nor defined as a 'WebID' rather being distinguished to protect against collisions.  
	
	WebizenTLS:  The TLS certificate issuance systems bind a SAN that refers to a Webizen RDF document/end-point. This loosely employs [[WebID-TLS]] methods, that may also be supported additionally as defined by the [[WebID-TLS]] spec; although the two methods are distinct from one another.
	
	WebizenOIDC: This is similar to [[WebID-OIDC]] however again - the ontology references are different; as such, it is being defined as WebizenOIDC. Support for both has not yet been properly investigated (i am unsure if both URis can be provided in the same OIDC claim/thing)
	
	Credentials: The term 'credentials' is used loosely as there's a variety of different sorts of implementations / methods / ecosystems, etc.  Generally speaking its about methods that were developed in connection with the work done via the [W3C Credentials CG](https://www.w3.org/community/credentials/2014/08/06/call-for-participation-in-credentials-community-group/) which doesn't necessarily invoke a useful comprehension about how/why/what/etc.   I will get into the specifics in more detail later; however, for now, the most important part of the useful considerations is that there's a [[TheValuesProject]] which defines [[ValuesCredentials]] as an essential part of how relationships between agents are made and managed.	
	
	Some work has been done on defining the TLS and DNS methods; however they're untested and the work on the ontologies needs to be done prior to further progress being usefully made to build and deploy alpha builds.  One of the known problems is also that each of the components employed generally seek to employ their own AUTH packages which thereby requires integration and/or containerisation. 
	
	I am not sufficiently skilled in the area to better understand what the best approach may be; and i note, at present, the main objective is to get something working, rather than necessarily getting something that's production ready if the cost of seeking to do so would hinder the ability to produce anything useful at all....

4. Tools 	
	There's a bunch of tooling that's sought to be produced in-order to better support the production of the technology stack and in-turn open-up the means for others to meaningfully contribute without necessarily requiring sophistocated programming skills.  
	
	**Ontology Modelling Tool(s):**
	One of the first objectives is to produce the tooling required to produce the database schemas which are based upon the use of [[SemanticWeb]] tech; but that, the foundational ontologies are being significantly modified with a view to seeking to ensure better support for [[Human Consciousness]] via [[HumanCentricOntology]] which will in-turn be an essential services requirement for the [[HumanCentricAI]] derivatives (essentially required for [[HumanCentricDigitalIdentity]] functionally); and in-turn also, the [[SocioSphereOntologies]] and [[BiosphereOntologies]] as to complement existing `OWL:THING` based ontologies that already provide an enormous volume of support for semantic / AI inferencing in relation to 'things'.   In-turn also, the ontological structures are intended to employ [[Non-HTTP(s)Protocols]] and moreover, what is defined as [[PermissiveCommonsTech]].   Presently, the tools used to perform RDF based ontological modelling have `owl` baked into them; this is referred to as a 'tool lock-in' problem.  
	
	Additionally, the approach seeks to employ [[EnglishLanguageModelling]] (i'm not sure if that's the best note as theres a few of them) to support how the foundational ontologies are in-turn able to be modelled.
	
	There are a few approaches that are being explored; some are built around the concept of building a web-based interface (ie: dynamic form like ontology builder) that may be built into the client which is generally something that needs to be achieved in anycsae at some stage in the future; another approach is to look at whether and/or how tooling might be built into a coding environment like vscode.   With respect to the vocabulary; there are some APIs in addition to language model resources that have been modelled with a high-degree of sophistocation.   In both cases RDF libraries are required, and the exact approach for implementation is still being processed / better figured out.  
	
	NOTE:  When the client webizen agent is functional; it is likely that a 'plugin service' for vscode (and similar) will be desirable.  As such, the puzzles are a bit of a Rubik's Cube; which are also influenced by what skills / methods are available to implement something useful, that acts to address the underlying problem at this stage.
	
5. Client
	The 'client' involves producing [[TheWebizenAgent]] and a local [[PermissiveCommons]] runtime. They may be produced as one package, that has two (or three) seperate databases (2xstorage + in-memory DB); but the exact method is still being developed...  It is considered likely that whilst the calls for getting records from the permissive commons systems will employ [[Non-HTTP(s)Protocols]] the records themselves may be stored in the database in a way that provides query support for interfaces that expect http based interfaces (or similar).  
	
	Applied AUTH Sequence / resources:
	1. The client is obtained from the host after an account has been established.
	2. The host initiates a TLS issuance to establish the connection.
	3. The client is then delegated a host-name (ie: mylaptop.mydomain.tld)
	
	By this stage; the client is authenticated with OIDC, DNS & TLS.  
	
	The work on the client library includes;
	
	Networking: The tailscale Client libraries are being integrated into a go-app that has been produced with a vue based interface.  
	
	DNS: Tailscale networks have historically only supported A and AAAA records; a tailscale-coredns library has been created that added support for TXT records; which i've then edited to add various records DNSSEC & DANE related records although I am unsure as to whether or not it'll work and/or whether or not it'll work natively. 
	
	NOTE: There's an array of DNS related considerations, some of which are not considered to be 'in-scope' for the purposes of this initial POC build.  
	
	The 'client' will also require a web-server / proxy; whereby the most likely solution is to integrate caddy (as is used on the host) which already has tailscale TLS integration.
	
	The main application interface is based upon the RWW works which provide HTTP interfaces for app functions, the apps themselves storing no data (simply a client UI).
	
	The client will most likely use the CogAI JS library as part of the logic method; or a variant of it (ie: made in go), alongside RDF libraries, etc.  
	
	There's a bunch of crypto libraries that hasn't been thougherly defined, and other functionality; but i haven't properly mapped it out yet.

7. Service Provider
	The [[WebizenAllianceHostProviders]] stack provides support for KYC/AML etc.  I have called this part of the platform the [[Curator]].  It is likely that the first providers will be established as [[WebCivics]] providers, particularly given the focus on producing the foundational [[PCT_PeaceInfrastructureProjectRequirements]].  
	
	*notes: 
	
	a.  the primary objective purpose of the initial stages is to stamp-out [[DigitalSlavery]] practices (ie:  [[EndingDigitalSlavery]]) employed by all too many, in relation to works that people do to positively impact society - particularly re: [[KnowledgeWork]] (such as the production of software, or projects that have a useful outcome via implemented software).  This in-turn becomes a foundation for the [[PeaceInfrastructureProject]].
	
	The means to achieve this objective is not simply about producing the working code; but moreover, the vast majority of non-technical people do not understand what i'm talking about and without a working platform, they start to assert ideas based upon what they know -  which can then lead to poor outcomes overall.  As such, in-order to address the [[SocialFactors]] including but not limited to the [[CommercialModels]] there needs to be something that these 'experts' can use, and then - per experience, tell us how they'v ebeen doing it all before, etc.  right up until the system is able to upload all there provonance information and start issuing ZKPs to validate standing in association to [[TheValuesProject]] related [[ValuesCredentials]] processes associated with the processes that manage how the standing of their association with the agreements they've made with others is tracking;  as is a linked [[SafetyProtocols]].
	
	b. the process described does not necessarily apply to developers / people who self-install (set-up, manage, etc.) their own VPS.*  
	
	In-order to set-up an account / establish a [[WebizenID]] the user needs to have an domain name. The user signs-up to the service, enters their domain name details in the registration and then either points the NS records at the service; or, adds DNS records (inc. the WebizenDNS record); once this has been achieved, the host is able to instantiate the host runtime, which is in-turn required to instantiate the client. 
	
	The [[WebizenAllianceHostProviders]] (operated by [[WebizenAlliance]] members) is required to run a much bigger instance of the [[TechforPermissiveCommons]]. 
	
	NOTE: at the moment, the most likely candidate is [[akutan]].
	
	Parts of the requirements includes providing support for various [[Currencies]] whereby the objective is to reduce the energy cost for some of the currency types to the lowest possible level.  Also, the host provider plays a role with managing multi-party projects and processes that are related to the [[SocioSphereOntologies]] and in-turn also [[SafetyProtocols]].  The service provider might be a cooperative or 'club' or similar; but the intended purpose of the ecosystem is to seek to ensure that there's several of them and that the there's a means to prioritise support for local providers (ie: same juristiction).   The service provider stack will develop to support advanced analytics and other functional requirements that are sought to protect hygiene / safety protocol related stuff; if users seriously breach there agreements in a manner that is considered to raise concerns about serious[[CriminalActivity]] the host can boot the webizen owner / end user (and maintain records to support their position in a court of law if necessary).  The services provided by the [[Curator]] is expected to advance support for various [[AICapabilities]] in a manner that makes [[BestEfforts]] to enhance support for [[privacy-vs-dignity]] considerations; alongside preservation of [[KnowledgeWork]] related considerations.  The service provider is also able to provide secure back-ups of the webizen owners network; and provide tech support, etc. 
	
	The [[Curator]] also plays an important role with supporting queries that are psudoanonymised; so that the queries are not directly tied to the users domain and/or other unnecessarily shared identifiers; whilst still providing support for law-enforcement related usecases due to the ability for a proportionate law-enforcement request being able to be made to the [[WebizenAllianceHostProviders]] for information.

9. Host
	The Host is foundationally defined using headscale which is a tailnet control server (manages the client connections); headscale is only defined to support 1 network; as such, it appears better (for various reasons) to instantiate a vps / container for each client.  This container would also support the www record (ie: the users website) and MX records (mail server).  The email pattern delegates a different email address to each relationship; which is then whitelisted against specified addresses (defined in an ontology document - thought to be similar yet different to FOAF). 
	
	The host container provides support for social-web apps and other resources that need to be available even if there are no client connections actively available 
	
	*NOTE: subject to settings - people could store data locally, and only make it available when that device is on, etc. in the future, the webizen hardware equipment is intended to support these sorts of requirements better than is otherwise practical now.*
	
	The user should be able to host their own website that's using the underlying database and static-website front-end code (ie; static site generator based); that is then also able to employ the WebizenID ecosystem via ABAC methods, etc. 
	
	The [[PermissiveCommonsTech]] methods can distribute records, providing a CDN like function; based upon the agents that have been provided the permissions to do so. 
	
	Which in-turn invokes the use of [[Currencies]] to manage [[EnergyCalcs]] related costs, and moreover attributions in relation to the use of resources, etc.  
	
	The Hosts provide [[WebizenID-TLS]] issuance to the clients, which in-turn provides the ability for the user / owner, to network their devices, etc.  
	
	The [[WebizenHostWebPlatform]] is defined via [[OntologyModelling]] to support a number of different application senarios; the first is for an individual, which is fairly straight forward; the others are,
	
	1. Families: ie 2 natural legal entities and [[GuardianshipRelations]] / [[GuardianshipSemantics]] to support the needs of dependents (ie: children) all running from the same top-level domain. 
	2. Group structures & legal entities:  Such as webizen.au or webcivics.net where a bunch of people are contributing towards a body of work that has a specified name, etc. There are several groups i can think of but won't add to the docs now.
	   
	   These use-cases require each-member to have their own webizen system or account; and/or may also require settings that define how non-webizen users are able to be supported (whether it be via solid, or google, facebook, etc.). 
	   
	The host platform should also support the means to manage integrations with other platforms / web-apps.  it is thought the approach may involve containerisation, but fundamentally, the host-platforms interfaces should support integrations with LAMP based apps / solutions, particularly therein - stuff like wordpress. 
	
	
8. Apps
	Whilst there's a bunch of tools that i think would be usefully developed as is noted elsewhere; the primary goal is to set-up [[TheWorkPlatform]] / [[WorkProject]] requirements in a manner that properly addresses the foundational requirements for human agency / dignity / [[ValuesCredentials]] which are instrument to the ecosystem. 
	
	Thereafter; the are front-end kits like [FUSE](https://fusetheme.com/) alongside others. I have a few admin interfaces, social network interfaces, etc.  
	
	Another approach relating to the client application interface, that's being explored; is how and/or whether to update / use a fork of the [[BeakerBrowser]] which is built using electron.  The Beaker Browser project has now been archived; so perhaps its a good project for [[WebCivics]] to produce in a way that interacts with [[TheWebizenAgent]]
	
	One of the benefits of the beaker-browser is that it already had a [[Non-HTTP(s)Protocols]] environment built into it...  
	
	The logic of the underlying sub-systems results in an array of fairly significant changes to the way 'centralised apps' traditionally work. Some of the app related considerations have been illustrated in the [[Webizen3.0Apps]] documents; noting, that this is in-part considered to be a next stage (ie: gotta have a functioning ecosystem first) and that the stage afterwards, amplifies the complexity and functionality significantly via the [[Webizen3.5]] and corrasponding [[Webizen3.5Apps]] future works.
	
	In-order to make apps function; they'll need a webizenapi and corrasponding interfaces to be made to work, which is the primary purpose of the current scope of works for building a [[Webizen2.5]] implementation.
	
	API Method: TBA,
	Notwithstanding the sentiments expressed above about serialisation methods, it is important to note that it is very much understood that most 'apps' have json-based interfaces and that I believe changing this widespread patten may be impractical. 
	
	However; it may well be the case that the apps may be defined to employ a json based interface rather than any form of linked-data based interface, which would in-turn mean that the webizen agent is exclusively responsible for processing / routing.
	
	There are some other implications relating to the AUTH mechanisms that may also result in the effect of this type of methodology leading to the API being 'self authenticating'; noting implicitly therein, these apps do not store any user-data... 

#### Online Sources

The primary github repo for the Webizen work is [WebizenAI](https://github.com/WebizenAI/) however some libraries may be primarily hosted via the [WebCivics](https://github.com/webcivics) github repos.  There is an effort to distinguish between the activities that are more exclusively undertaken to be focused upon the webizen ecosystem; whilst this [[BestEfforts]] methodology also considers that at times some components might have a greater beneficial purpose for society at large (irraspective of the use of webizen) and are therefore delegated as webcivics repos.



## History

A large amount of public notes are provided either in this environment, or via linked resources.  I am not able to disclose everything about my life or the many challenges i have faced - nor should i (or anyone else for that matter) be required to.  The body of work has been undertaken over many, many years.  There are many 'relationships' with various people, projects, outcomes that have grown around the world.  The primary historical method of development has been to support the development of useful components; like a practice method that supports the development of the components needed to build something that uses those components - like the components to a car.

The Ted Talk by Thomas Thwaies about how he built a toaster from scratch, illustrates the underlying point fairly well.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5ODzO7Lz_pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

A critical objective that is part of the functional requirements, is to consequentially deploy a system that is able to properly & respectfully provide a means to log all of the contributors overtime; whose assistance and support has been critical to the creation of various elements that are intended to be employable for defined components; and/or, the actions of those who've made a meaningful impact supporting my ability to progress these works from before [[iBank]] through to the point where there is a useful implementation that properly / functionally characterises the intended purpose of these long-term works.  

As i will describe below, this stage is hoped to provide the delivery of a very significant milestone; whilst i have a level of confidence that i am able to do it myself (with the assistance of AI Agents 'at large' (using the term broadly)); help to implement this ecosystem is desirable. 

## Introspective considerations

Part of the most important qualia of persons sought to be involved; is moreover about the moral behaviour of persons, not merely characteristics relating to wealth or technical skill(s) in any given subject matter domain, area, field, etc.    The ability to produce these systems has been carefully developed over many years, involving enormous complexities, hardships and extrodinary experiences with others world-wide.

What people do, what they're able to do; is to some-degree a direct reflection of who they are as a natural living being and therein; both, the attributes related to the matrix of their minds conscious and sub-consciously articulated values, conditioned behavioural responses and what it is they've prioritised the use of their time to be committed to fostering; as is determined by various factors, but mostly as a consequence of a persons willful choices.  

For most people, this project, if sought to be undertaken well - will likely invoke a series of experiences of introspective considerations, deliberations and the need to honestly debate complex and often deeply personal factors / considerations, with others.  The practical experiential processes are considered to be part of the implicit and unadvoidable requirements.  Therein also; In my experience, it is not uncommon for persons who have had a history of gainfully engaging in [[SocialAttackVectors]] to respond by making attacks - as is manifestly an essential part of their character. Often those persons engage in what they'd consider to be 'competitive' behaviours, yet, overtime its been demonstrated that desite the illustrated values that are different to [[ValuesCredentials]] (which hasn't technically been usefully implemented) seemingly renders some sort of disabling function; that leads to their inability to deliver, and consequentially they become defensive and often aggressive, as to mask the history.

Whilst this is to some-degree simply part of being human; the reason for raising it, is to more simply alert those interested in getting involved, that the ability to produce truth telling infrastructure / RealityCheckTech - invokes a series of implications that has the effect of being exposed to threats by persons who have a dedicated investment in seeking to ensure that these sorts of outcomes are not able to be brought about.  Whilst this is fundamentally representative of behaviours that seek to commerically prosecute mandatory socio-economic support for [[DigitalSlavery]] and various other [[SocialAttackVectors]] that have seriously negative implications; the fact remains, there are a cohort of persons who will do just about anything to ensure [[ValuesCredentials]] are never made, never become useful or if they are deployed, that they'll be in control of those instruments and through those means - be in control of those that use them also.

Presently, both social and technical systems render an array of functionality that supports [[SocialAttackVectors]] whilst functionally not providing any meaningful support for [[SafetyProtocols]]. These are designs. The except from re:publica 2012 may be helpfully reviewed (noting the link to the full-length version is in the description).

<iframe width="560" height="315" src="https://www.youtube.com/embed/9zXqHIJJVxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The implication of the manifest circumstance; is that, it is an act that invokes extreme vulnerability to focus on seeking to do the right thing; as attackers do otherwise, and there's almost no means to ensure repercussive responsibilities via lawful means, and the more sophistocated attackers are expert professionals in their fields, with sophistocated professional networks of persons in public & private sector areas who have been gainfully involved with the execution of similar attacks for gainful purposes overtime.  Building systems that offer people a means to have systems that innately protect them from hostile actors who seek to commit wrongs upon persons they deem vulnerable; is a dangerous pursuit, and there will be efforts to [[Dehumanisation]] and/or invalidate persons who are seeking to achieve these goals; whilst some of those attackers may in-turn be seen in media and publically making statements that they seek to achieve the same sorts of goals, when in-fact, the reality is that they seek to ensure that no-one achieves those goals and that anyone who seeks to do so can be harvested by them as a means to ensure support for what it is they're investors have objectively set-out (noting, the use of shadow-directors, etc.).  

![[wolfslide.jpg]]

NoteAlso: 
- the 2022 [Webizen project SlidePack](https://docs.google.com/presentation/d/1nFZUVL3Uh4zB82F3ViU189Rz05ZPKmtZU3tDq4w8OZQ/edit?usp=sharing)  (incorporating the slide above)
- a [library resource](https://drive.google.com/drive/folders/1tYFIggw8MIY5fD2u-nbwFRM6wqrhdmQZ) with an array of materials about project related topics and fields of consideration; noting therein, the [Tech Ethics](https://drive.google.com/drive/folders/1uwGax8GvZA2jzJ_UFIoYppijZX4vDsoL) , [Gov/Defence including Cyber/psyops](https://drive.google.com/drive/folders/1RzE_QQbBRyE0druVpvffQoT5KDms_5mT) and that there's alot more covered elsewhere therein generally... 

## Current structure

The present commercial and supporting infrastructure, that relies upon a software implementation; has not been further developed as a consequence of the software required to do so properly not being usefully employable.   The existing structure is that I, [Timothy Holborn](https://www.linkedin.com/in/ubiquitous/) have an ABN and a number of registered trading (and domain) names to support the R&D activities related to the project(s).  I have some general information about my fees for formerally engaging me in complex external projects on the [Trust Factory (au)](http://trustfactory.com.au/) website moreover for strategic purposes; honestly, the reason why that is the case is that generally - people don't ask or engage, they just take and then most-often don't have the skills or knowledge to do the job properly.  This has in-turn supported informing the approach and related work on [[SocialAttackVectors]].  Yet, at  earlier stages of the development cycle; one of the major threats was that some 'wolf in lipstick' might seek to take / pervert the body of work which if done properly would require a sound & defensible legal basis through which that could be achieved if it were to be achieved via lawful means thereby forming binding rights/responsibilities, as is distinct to other forms of engendered circumstance.  Also, under Australian Law with respect to the duties of directors / corporations act and related binding (or burdensome) agreements; the ability to support the production of technology to support human rights is not straight-forward, as Australia has no Human Rights Act. As such, (particularly from a historical context) the ability to seek investment (thereby invoking duties) via a company structure (which can thereby also be subject to dilution attacks and all sorts of other [[CommercialExploitation]] issues) to produce derivatives that are intended to provide agency to human beings - rather than 'IP Assets of a platform', hasn't been practically feasible.  Various attempts have been made: for example, the [2015 Webizen Plan](https://docs.google.com/document/d/1UZqygx0OpNbguvq-UNiryr9l7SQxJZ0auj8Dx15EJMU/edit?usp=sharing) but - each time, it has been practically shown to have been impossible.  Whilst works have developed internationally since, the methodology basically rendered protection and production of the broader body of work via sophisocated international means; whilst 'muting' attackers via the consequences of their own behaviours, for which there is a fairly significant historical record/catalogue that has alot of parts not-made-public.  

### Related considerations / notes.

Overall; the underlying 'realities' of the circumstance / situation, is that the IP structure for my work is protected by me as a natural person who innately has rights.  Whilst there have been various attacks (some remarkably sophistocated) and there has been a great deal of harm that has been survived and even though there are various issues outstanding (there is no access to justice / legal assistance for what most seek to define as 'commercial issues' or whatever suits them; as such, no available lawful remedy).

The work, and in-turn a vast amount of my life; is very much a purpose based activity. The point of this body of work, is to bring about an ecosystem that demonstrates how the technology we have already developed as a species, can be applied to support the moral, ethical and legal statements that are made via various instruments of importance.

The designs make practical application of a series of components (and the use of related concepts in a way that is otherwise not publically documented) to support the needs of members of our human families and through that lens, communities, group entities and other constituencies; in a manner that is intended to support rule of law.

The biggest entities that work to oppose, pervert  and/or mute these works is government; yet the designs are very careful about ensuring that any such acts that seek to engender harm/injury are in-fact illegal, and the use of the platform in future is intended to identify the specified individual human beings involved in circumstances where the harmful effects of other persons behaviours warrant questioning  / accountability via a court of law.  





### NOTES
I'll try to write something that i hope might help socialise the development process. 