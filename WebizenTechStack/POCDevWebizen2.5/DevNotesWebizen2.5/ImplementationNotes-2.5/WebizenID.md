# Webizen Identity Fabric

Fundamentally; the informatics defining a [[HumanCentricDigitalIdentity]] are not achieved solely via any 'solid' system nor is it solely achieved via a 'verifiable credential' / DID (SSI) system; in-fact, the technically applied ideologies are thought to be very different.

These informatics designs are considered essential for [[SafetyProtocols]] and in-turn therein also [[HumanCentricAI]] and the applied means to address various other [[SocialFactors]].  

The ecosystem assumes will at this stage require a user to own their own domain name.

## Modifying WebID

[[WebID]] was developed sometime ago.  I have some issues with the way its generally implemented, although i'm not entirely sure whether my concerns / deliberations will end-up having merit; or whether i'll end-up reverting; yet fundamentally, its likely that some changes may be positively employed and other considerations found to lack merit.  As such, the work in progress ("WIP") notes will define the modified versions as constituent pieces of the WebizenID implementation components, that are designed to operate as a type of security-fabric. 

Usually a [[WebID]] is a FOAF based document; and generally defined to be about a (natural) person. Most examples online provide a static FOAF document, rather than something that might be dynamically generated based upon the information about the requestor.  

Yet other components of WebID are about authentication instruments.   There is [[WebID-TLS]], [[WebID-RSA]], [[WebID-OIDC]].  I am working to add something that might usefully be called WebID-DNS which now therefore needs to be defined; however, i'll explain the implementation and related changes that i'm making generally & experimentally, in this note.

The Network Topology is described in the below document.  Note that there's a 'split DNS' function between the internet 'tailnets' and the external public internet (dns).

![[webizen_diagram_1-2.jpg]]


## Components

### WebID-TLS 
[[WebID-TLS]] is applied in web-servers to define the HTTPS Host.  

These certificates generate a SAN (subject Alternative Name) URI that is directed at a RDF document.  

***Historical Use:***
Historically the RDF Document would refer to the person (individual) associated with the certificate at the client site. A document providing a [Specification notes the following](https://dvcs.w3.org/hg/WebID/raw-file/tip/spec/tls-respec.html)
*X509v3 Key Usage: critical Digital Signature, Non Repudiation, Key Encipherment, Key Agreement,  Netscape Cert*

Historically 
1. The Web-Server would not be on the client machine; but rather, located elsewhere. 
2. The user experience would result in certificate confirmations popping up frequently.
3. As the WebID-TLS Certificate is associated with the Human User and not the machine or machine account (ie: on most desktop/latop operating systems, the environment can be managed using multiple accounts - although, an account that might be for 'family' isn't specifically associated with any one person.)

Issues
4. As the authentication mechanism is applied upon a person rather than a machine or machine account - it was considered that the use of the otherwise useful tooling, was applied incorrectly.
5. The WebID document that makes reference to the intended user of the cerificate being a person historically used foaf; It is being considered generally that an alternative ontology needs to be produced; and that,
6. The useful purpose of the certificate is better applied to identifying the client software environment rather than the user specifically (although this may be inferred or settings may be made to deliberately not-require further authentication)
7. If significant changes are done, then it probably shouldn't be called 'webid' anymore.  In this case, the main changes that are being made relate to the semantic approach. Therefore, it may be entirely appropriate to rename the methods to something else other than WebID / WebID-TLS as a consequence of having made changes before any standards related works having been done to define the usecase as being compliant with the specificity of the documentation. 

#### Employment Method

TLS Certificates are generated either via ACME (letsencrypt) or OpenSSL, and are used for transport layer security (TLS).  They are thereafter embedded in the [[HeadScaleImplementation]] wherby the CertificateGeneration functions have been modified to add a `WebID#Agent` URI (the specifics may change).  

The Certificates are used to support the [[TailNets]] systems as well as providing issuance to the [[CaddyServerImplementation]] which provides both a basic webserver and a reverse proxy environment for other parts of the web-stack.

Significant modification of a version of Solid / RWW / CrossCloud is underway and will become a critical part of how the webid or webid-like systems methodology is to be implemented. 

### Webizen-DNS

There is no WebID-DNS so, this is a newly implemented concept.  See: [[WebizenID-DNS]]

The primary purpose of WebizenID-DNS is to establish an owner of a domain and thereby strengthen the means to establish authentication of the Legal Entity.  
(seeAlso: notes on [[Centricity]] ).

## Serialisation

The preferred serialisation method for a WebizenID is likely to be `Turtle` or `N3`.
