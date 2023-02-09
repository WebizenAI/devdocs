# Implementation Progress

This note is intended to provide information about the progress of Implementating a Webizen 2.5 system.

### Objectives

The objective is to get a runtime 'webizen agent' running on desktop/laptop machines, running Windows, OSX and Linux.  This is then intended to be employed to build ontologies and apps.  In-order to achieve this, the tailnets (networking) needs to be established via a VPS host; and in-order for a community to each get their own webizen networks (tailnets, etc.), a solution for how they bring their own domain and establish their own network, download a client and then network with others; needs to be defined.  It is assumed that many of the potential contributors will not have the technical skills to do all of this themselves.  

In-order to establish the basic requirement for engagement; which is foundationally built upon the construction of [[HumanCentricOntology]] which in-turn supports [[WebizenID]] related requirements, and in-turn [[PermissiveCommons]] ontology foundations, a series of cryptographic methods needs to be defined in the software components that are responsible for curating the services; and their interoperability. 

As noted in the [[PCTWebizenUseOfOntology]] document; there are a number of fairly large vocabulary models (focus is on english atm); and part of what is sought to be achieved once the initial system is operating, is to figure out how best to employ it; and indeed also, how to define a top-level ontology that can operate locally on machines.  Yet in the first instance, it is expected that some of this modelling process may require a far bigger ontology model, as the options are explored.  As such, a shared [[PCTOntologyModelling]] service needs to be established, and is likely to employ something like [[akutan]] which is a triple-store that has been produced by Ebay.  This is likely to be something that may evolve into being part of the [[PermissiveCommonsTech]] solution.  

In-order to establish these components, i am starting with progressing the [[HostServiceRequirements]] related requirements.

I have modified the [[HeadScaleImplementation]] to support a [[WebID-TLS]] like method; whilst the specifics for the [[WebizenID]] and [[WebizenID-TLS]] ecosystem is being formerally figured out / documented / implemented.   These implementations are presently defined to support a single domain name system; as such, it appears preferrable to create a method where a headscale package is deployed per webizen owner, whose account is defined via process that requires them to bring a domain name with them.

There are two server-side platforms required.

1. [[WebizenAlliance]] service management system:  this is for the provider of services.
2. [[Webizen]] owner head-end platform: this is for the webizen owner to manage their network (built upon their own domain).

The technical definition of how these two components are constructed is underway.

I have inspected the Headscale-UI package, which is effectively a simple GUI for the headscale API.  This is likely better integrated into the administration interface for one or both of the host platforms.  One of the first requirements is to define the authentication methodologies.   As part of this process, i have been reviewing how to best define a [[SolidBasedSystemsFork]].  These systems have a variety of significant differences particularly with respect to the agent model, and in-turn also the authentication model; whereby the [[WebID]] ecosystem is different to the [[WebizenID]] system in enough ways, that invoke a requirement to call it something else (therefore; the term 'webizenid').  Presently the solid server is built upon an assumption that users elect EITHER [[WebID-TLS]] (now somewhat deprecated) or [[WebID-OIDC]], and does not have the concept of a similar sort of DNS based method.  The Solid 'pods' are also defined in a way that assumes the 'pod' is singular and 'representative of a person'; rather than an agent; and these systems use [[FOAF]] as the primary vocab, which is sought  to be changed to a different ontology, to better consider [[HumanCentricAI]] requirements ( [[HumanCentricOntology]] ) in particular. 

#### Docker

The existing examples are provided as docker containers, which is the likely output of this process.  Therein, the script for installing the packages via docker needs to be defined as the useful final steps, of implementing an initial solution.  

##### CockPit
I have also found a web-based server management tool called [cockpit project](https://cockpit-project.org/) and the description provided now, is not considered to be final or exhustive, at this stage.  

### Next Steps - Notes

### Authentication methodology

Some work was required / done on the authentication methodology; which thereby required some consideration about the logical process of how to deploy the various parts of the [[Cryptography]] components (see: [[CryptographyNotes]] ).  In particular, the decision to use IPv6, DNS-SEC, DANE and various other DNS records to support [[WebizenID-DNS]] based stuff (seeAlso: [[WebizenDNSNotes]] ) is instrumental to figuring how how to augment the existing packages and thereby figure out how the authentication fabric is to be defined / coded / managed.  

Some additional ontology related work was done via notes about [[NISTIDOntology]] which are sought to provide a constructive baseline set of considerations about the legal requirements associated with Identity Proofing (strong Identity & KYC/AML, etc.)

NOTE: The nature of these systems, leads to implications where the ability to radically improve various 'cyber security' and therein/thereafter human safety / security, is thought to be somewhat 'epic' by comparison to the function of alternative systems generally, whilst also maintaining / improving human rights support; as is generally noted via the [[SafetyProtocols]], [[TheValuesProject]] and various other considerations. 

The basic process for applying the authentication methodogy has now been reviewed and somewhat defined; which thereafter provides the foundational requirements to figure out how to produce the management platform.  

The next stage is really about producing the software that employs these methods; to achieve this, i am presently investigating how a more recent version of the rww/solid works can be (somewhat heavily) modified to perform these functions.  An alternative methodology might be to build a fresh stack, from the much older RWW base; which is likely to be the method that will be employed for producing the client platform.  

The hope is that i will only need to produce 2 main project systems; not three, but idk



### NOTES about a SolidFork

The main document providing a description of the work is: [[SolidBasedSystemsFork]].

There are various versions of the Solid ecosystem, initially version that was sought to be employed was the golang version produce as RWW around the time SoLiD was created (later redefined as solid).   There's two different requirements; one is for the 'hosting platform' side, that is responsible for managing the VPS hosted systems; both, for the host provider (IE: the [[WebizenAlliance]] provider); and in-turn webizen owners / users. 

The means to define the authentication fabric methods ( [[BasicWebizenNetworking2.5]] ) was required prior to being able to determine the exact requirements of this package.

Work on redefining these packages is now underway; and is in its early stages...  There are many components; and i'm just starting to get my head around the implications.

TBA...  

SeeAlso: [[WebizenHostWebPlatform]].

#### Service Management
There needs to be a service manager; which is likely to be seperate to the runtimes established for users (webizen owners, etc). Most components have [[jsonInterfaces]] which should be updated to be provided as [[jsonInterfaces]] (local service management interfaces); which is being investigated.

Thinking is that the [[Curator]] may employ [[BadWolf]] or similar, to manage the interfaces.

*It is hoped that this may in-turn produce some insights about the future possibilities for managing the networking ecosystems in a more advanced way; however, i'm not upto that yet.*  

### Cryptography Management

some initial  [[CryptographyNotes]] have been made, however the methodology to secure the cryptography keys / instruments / methodologies - will need to be better established after the work on defining the [[SolidBasedSystemsFork]] outcome, is done.

which will in-turn help to inform the approach about the [[Curator]] system, that will be critical to maintaining the security of these systems.  Note; in future, HSMs are sought to be employed, whilst considered to be out of scope for the purpose of Webizen 2.5.