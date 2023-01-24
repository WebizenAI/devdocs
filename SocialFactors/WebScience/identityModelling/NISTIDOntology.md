
A 2006 NIST publication: [An Ontology of Identity Credentials Part 1: Background and Formulation](https://www.nist.gov/publications/ontology-identity-credentials-part-1-background-and-formulation)  was identified earlier ([W3C list Email](https://lists.w3.org/Archives/Public/public-credentials/2016Jan/0035.html)) and is nowtherefore being employed to provided support for the [[HumanCentricOntology]] requirements.

I'll be doing a copy/paste from this document; as to provide a working baseline to investigate the applicability of these historical works.  The extracts will focus upon the ontologically useful top-level concepts.  see aforementioned link to review the source.

It is hoped that these concepts will provide service to the process of defining the modelling requirements for how it is the [[HumanCentricAI]] ecosystem supports these requirements as part of the broader [[HumanCentricDigitalIdentity]] ecosystem.

I also note; that the considerations made on page 10 below, similarly illustrate the broader notions related to 'human identity' as is otherwise considered via the webizen ecosystem; in a manner that is distinct to the 'identity credentials' notes othewise.  it is certainly the case that personal security relies upon furnishing means to appropriately support human rights more broadly overall - as is the focus of [[TheValuesProject]].

### Page 10: Overview of Identity Concepts
(some additional content from page 11)
Identity seems simple enough at first. We each have one, it’s what makes you “you.” The common sense view of identity is the assumption that a living, breathing person has one, exactly one, identity. 

Like many words, though, “identity” has different meanings and shadings in different contexts. Here are some alternative perspectives on identity, representing concepts that are commonly regarded as synonymous or overlapping:

+ Identifiers: qualities and attributes that name or describe a person.
+ Memories: a person’s memories of their life experience.
+ Personality: a person’s recognizable traits and behaviors.
+ Biology: a living person with distinctive markers, e.g., Deoxyribo Nucleic Acid (DNA), fingerprints.
+ Family: the record of ancestral and descendant relations.
+ Membership: belonging to a group or organization.
+ Citizenship: civic roles related to voting, international travel, entitlements, taxation, etc.
+ Business: relationships as employee, representative, manager. 
+ Religion: the essential will, soul, or animating spirit. 
+ Culture: practices and ceremonies of naming. 
+ Law: a natural person can own property, be charged with a crime, etc. 
+ Reputation: an individual’s public standing in a community.
+ Agency: the sequence of actions (track record) performed by one person.

All of these views are important in day-to-day life. They can be loosely grouped as either intrinsic or extrinsic properties. Memories and biology are intrinsic qualities, for example, integral to the human organism. Reputation and agency are extrinsic, they are the external view of how we act and what we do, and thus they require an observer. Intrinsic properties link our past, present, and future, while extrinsic properties, since they must be observed, are necessarily retrospective. 

In IT terms, for example, we rely on intrinsic properties to design authentication systems (because the systems must authenticate people in the future) and extrinsic properties, often as recorded in logs and audit trails, to establish trustworthiness and accountability. Identity management and related security goods and services have become a sizable business segment. 

Why is identity so important? Identity forms the basis for authorization and trust. A person (a specific identity) is authorized to perform certain actions because an authority trusts them to behave within expectations, e.g., to repay a credit card loan. 

A person is authorized to possess confidential material with the expectation that they will not disclose it.

Authorization and access control create special challenges for identity management. In typical situations, authorizations are relatively coarse-grained, because the overhead of fine-grained authorizations easily becomes unbearable. 

For example, an Human Resource (HR) Administrator might be authorized to view any employee’s permanent file at any time, even though it would be sufficient to grant authority to view only the files of an assigned division, and these only when an HR action is pending. Authorizations are “larger” than necessary to reduce the number and cost of authorization transactions (frequent verifications and dynamic assignments). 

This means that not all authorized actions are appropriate, and authorizations are not perfect predictors of good behavior i.e. authorizations are not fully reflective of trust in a particular individual. Authorizations, certificates, and diplomas may have statistical implications, but they are not guarantees.

### Page 13-14: Qualities of Identity Credentials

Characteristics of Identity Credentials that are often, but not always, beneficial include: 
i. Readily accessible identity information 
ii. Variety of types of identity information 
iii. Irrefutable authentication mechanisms e.g. photograph or biometrics 
iv. Contains biometric info as well as printed data 
v. Resistant to counterfeiting, tampering, or copying 
vi. Protects some data from casual observation 
vii. High degree of trust in the issuer 
viii. Difficulty in obtaining the credential 
ix. Extensive vetting or ID proofing to issue the credential 
x. Recognized, regulated process to apply for and issue credentials 
xi. Durable, low-cost credential medium xii. Standardized design, if there are multiple issuing authorities 
xiii. Credential information in a common, widely used language 
xiv. Difficult-to-reproduce features 
xv. Credential features signal use restrictions 
xvi. Multiple uses for the same credential 
xvii. Electronic, PIN, or key access to some credential data 
xviii. Additional data ancillary to intended use 
xix. Links to other relevant information, e.g., roles 
xx. Unique credential or user identification number or data key 
xxi. Credential legally belongs to issuer, not to bearer 
xxii. Expired credential seized at renewal 
xxiii. Ability to officially amend credential

Characteristics of Identity Credentials that are often undesirable include: 

i. Special equipment required to extract data or use credential
ii. Expensive credential 
iii. Limited amount of identity information on credential 
iv. Unacceptable privacy violations, avoidable disclosures 
v. Little or no irrefutable identity information 
vi. Few mechanisms against counterfeiting, copying, or tampering 
vii. Credential is easy to acquire, renew, or transfer (few barriers to issue credential) 
viii. Low degree of trust in the credential or the issuer 
ix. Variety of designs, form factors, and media for the same credential e.g. birth certificates) 
x. Frequent changes in format, color, or form factor of document (driver license variations) 
xi. Stickers or attachments to amend credential 
xii. Ability of unauthorized party to amend credential through attachment 
xiii. Multiple uses for the same credential (forged driver license accepted for many other types of transactions) 
xiv. Role-based credentials (not tied to a person)

#### Page 14/15: Primary, Secondary and Tertiary Identity Credentials

**Primary identity credentials:** are by-products of significant life events, including birth, marriage, graduation, military entry-on-duty and discharge, and death. Such events are recognized as social occasions requiring ceremony, and are typically witnessed by family, friends, and acquaintances of the subject. In most cases, an original primary identity credential is issued only once per event. A primary identity credential describes the nature, place, and date of the event, and documents event-specific details such as birth weight. + 

**Secondary identity credentials:** in contrast, are issued in response to a request for authorization to perform an action (e.g. driver license to operate a vehicle), or demonstrate proof of affiliation (e.g. passport to prove claimed nationality). During a secondary identity credential application process, identity verification relies, to a great degree, on primary and other secondary identity credentials. Personal knowledge of the registrar or trusted third parties may also be relied upon during the application process. Because the application lacks the social context of a primary identity credential, the registrar should take great care to verify the authenticity and accuracy of source documents. Fraudulent births are rare, but fraudulent applications are more common. Secondary identity credentials are often relied upon by law enforcement. Because the consequences of misidentification can be extreme, secondary identity credentials generally include an ID photo and possibly additional biometrics such as fingerprint or signature. Secondary identity credentials are usually government issued, multipurpose, and widely adopted.

**Tertiary identity credentials:** are issued by an authority or organization for a limited purpose, and include employee badges, membership cards, and loyalty program cards. The identity verification and proofing requirements vary enormously, from almost no requirements (loyalty program cards) to requirements comparable to secondary identity credentials (many employee badges). Tertiary identity cards are rarely multipurpose, and often include no biometric information. Their most common characteristic is an organization-specific unique number. These credentials have a specific lifetime to indicate transient association e.g. visa for a country, travel club membership).

### PG 16-18 Logical and Physical Structures of an Identity Credential

Physical credential structures may include: + 
- The dimensions, materials, and layout of the credential
- Mandatory and optional data elements that are printed or mounted on the credential
- Special markings, insignia, printing, seals, or features to indicate that the credential is genuine 
- Protective coverings, special printing, watermarks, seals, holographs, coloring or other special physical features to make the credential difficult to counterfeit, copy, or alter 
- Contact or contactless electronic devices, bar codes, magnetic stripes, other machine readable technology, or machine-readable text, to read data stored on the credential  
- A sleeve, shield, cover, or holder to secure or protect the credential, or to prevent the physical or electronic elements of the card from being read or sensed by unauthorized observers
- Pre-drilled or punched holes, to secure the credential to a lanyard, holder, or a security device 

The logical features of an identity credential may include: 
- A PIN or password to access secured data or authentication codes (hash, CRC etc)
- PKI certificates and certificate keys
- Encryption algorithms used to encrypt or decrypt data or validation sequences 
- Biometric identifiers, such as fingerprint or retinal scan images 
- Digital watermarks

Different features of the ID card are utilized in different use cases. Common use cases are, for example:  
- Visual inspection for “introduction” (i.e., examination of personal data relying only on possession, without other authentication) 
- Visual inspection for “authentication” (i.e., authentication using a facial image, signature, or other biometric data, followed by examination of personal data) 
- Photocopying or scanning as documentation of a transaction 
- Automated reading of a Machine Readable Data area (e.g., contactless chip, proximity card, magstripe, 2D barcode, Optical Character Recognition (OCR) text) 
- Authentication via secret marker (e.g., password, secret or private key, or microstructure property of the token)

Requirements for Logical Structure

+ Embodiment: the physical platform or realization of the credential 
+ Issuer: the issuer of the credential 
+ Subject: the subject of the credential 
+ Transaction: transactional information specific to the issued credential

For example, the logical structure of a Maryland Driver License could be described this way:  
Embodiment  
- Size 
- Material 
- Image (images of the obverse and reverse) 
- Machine Readable Data  
- Tamper Evidence (yes/no result of evaluating tamper-evident features) 
Issuer  
- Name  
- Logo
- Seal 
- Graphic 
- SignatureImage (image of managers signature)  

Subject 
- Name 
- Address 
- SignatureImage 
- FacialImage 
- Birthdate 
- Height 
- Weight 
- Sex  

Transaction 
- LicenseNumber  
- IssuanceIdentifier 
- Issuance Date 
- Expiration Date
- Title (“Driver’s License”)
- Class 
- Restrictions 
- Type (e.g., “N” means New Resident)  
- StandardConditions


Defn: Identity Document Artifact PhysicalProperties GrossPhysicalProperties VisibleImage MachineReadableData Authenticator TamperEvidence Attachment LogicalProperties Issuer Subject Transaction Authenticator AnnotationOrAmendment Defn: GrossPhysicalProperties Material Shape Size Weight Surfaces Folding Defn: VisibleImage Obverse Reverse Page Tile Defn: MachineReadableData ReadMethod BinaryData QualityMethod Quality Defn: Attachment Attachment Method Position Identity Document Artifact Defn: TamperEvidence Feature Identifier TamperEstimate
Defn: Issuer or Subject Name Organization Title Address Birthdate Height Weight Gender FacialImage SignatureImage MarqueImage TelephoneNumber FaxNumber EmailAddress WebAddress Defn: Transaction Title Subtitle Form Identifier Date Place Expires Conditions Defn: AnnotationOrAmendment Method Content


NOTES:  The document goes on to describe an array of use-cases that relate to verifiable credentials and governmnetal 'identity' systems, which overall aren't really part of what the [[HumanCentricOntology]] needs to independently define... so those parts left out (but also, worth checking out - re: provonance, etc.)

### Page 38 Trust and Security

Identity credentials are useful only to the extent that: 
- Someone who examines the credential agrees that the credential holder is indeed the person described on the credential 
- The examiner accepts the credential as authentic, genuine, and reliable 
- The examiner accepts the assertion being made by the credential.

#### Security Objectives 
The primary security objectives for identity credentials at the point of use are: 
- Provenance: was the card issued by the indicated, legitimate authority? 
- Identification: what symbols on the card identify the subject? 
- Validation: does the authority still consider the card valid? 
- Authentication: is the person presenting the card its subject? 
- Authorization: does the card grant relevant permissions to the subject?

### Page 39-41 Identity Credential Security

A credential’s security model may include some or all of the following elements:

- High-assurance identity verification process before issuing the credential 
- Type and extent of identifying data on the credential 
- Special document media, printing, or features 
- Various printing techniques used on the same document 
- Electronically-readable devices, such as integrated circuits, bar codes, or mag stripes 
- Ultraviolet and infrared light visible inks 
- Security threads, latent images, optically-variable marking, high-reflection foil, iridescent coatings, microtext, see-through images, overprinting, watermarking, or patterned laminating 
- Additional data embedded electronically in the document that is not printed on the document 
- Hidden data elements that verify data printed on the document (digital watermarks) 
- Biometric data, such as fingerprints or retinal scan information 
- Verification data printed on another part of the document (credit card verifying codes) 
- Electronically-duplicated visual data (printed photograph and digital photo image on document) 
- PKI certificates or digitally-signed credentials 
- Digitally-signed or encrypted data on the credential 
- External services or on-line databases to verify credential information 
- External services or on-line databases to identify revoked or invalid credentials 
- Readily verifiable identity information, such as a photograph 
- Visually noticeable differences among similar credentials (portrait vs. landscape orientation for driver licenses for people under 21) 
- Specially-laminated or permanently sealed documents 
- Polycarbonate composite document data pages 
- Foil overlays or embossing, particularly over several parts of the credential
- Centralized, delayed production and delivery vs. over-the-counter credential production 
- Credential expiration periods 
- Revocation or destruction of an expired credential

Methods Used to Authenticate a Person Some of the methods that are used to authenticate a person include: 

**Visual Identification**. Obviously, visual authentication is easiest and most reliable when the identification credential includes a photograph. Depending on the age of the photograph, the holder of the credential may look somewhat different to an examiner, but the holder should closely resemble the individual depicted in the photo. Now that most states require photos on driver licenses, and the driver license has become the de facto general-purpose identity credential, this government-issued photo ID is both universally used and accepted. 

**Identity Information Verification**. Even if the holder looks like the person in the photograph, an examiner may use other information on the credential to authenticate the credential holder further. For example, the holder’s birth date is a standard data element on a driver license. An examiner could ask the credential holder to cite his birthday and verify his street address, to further authenticate the credential holder’s identity. Some driver licenses list height and eye color, which can also be checked by the examiner. 

**Reasonableness of Assertion**. Identity credentials that make an assertion about an individual’s rights, position, or capabilities must also pass the “reasonableness test”. For example, an examiner may reject or question a claim of assertion if the holder of the credential cannot reasonably make that assertion. If a man with long hair and a beard presents an active duty U.S. military ID card, an examiner may rightly question whether the holder of the credential can make that identity assertion. Someone who appears to be blind may hold a driver license, even though a blind person would not be licensed to drive. A police office who is conducting undercover operations may not appear to be a police officer, but he or she will have credentials that make that assertion, despite the officer’s physical appearance. 

**Electronic Verification**. If the credential supports it, a person’s identity may be authenticated electronically. Some types of PKI certificates may be issued to a person only after a rigorous identity verification process. If the person who holds the credential is able to access the certificate’s private key by using a password or PIN, and if there are other visual identification factors that can be verified, the person’s identity may be considered to be properly authenticated

***NOTE:  bunch of stuff about proofing and biometrics - left out for now***


#### Page 43: “Something you have, something you know, something you are”

The three authentication factors in CAC authentication are:

+ Something you have – The CAC card itself, which must be inserted in a smartcard reader to be “read” electronically
+ Something you know – The PIN, which allows the software on the PC or card reader device to access the certificate’s private key 
+ Something you are – The identity of the holder of the CAC, which is linked to the identity of the individual asserted on the identity PKI certificate

Two-factor authentication uses only two of the authentication factors.

#### Page 46: Case Studies

In each case study, the identity credential will be examined to address four identity credential issues. These issues seek to identify for each credential the following characteristics: 

- Distinguishing goals of the credential 
- Data model of the credential 
- Physical structure 
- Physical and logical design limitations

#### Page (48): Design Limitations
Some of these limitations are: + 

**Level of trust in issuing authority**. States and U.S. territories have reciprocity agreements among them that allow drivers from other states to be recognized as licensed drivers in other states. Driver licenses from other countries, however, may not be held in the same level of trust. Canada and the U.S. have an agreement that grants reciprocity for Canadian drivers in the U.S., and viceversa. No corresponding agreement exists between the U.S. and Mexico, so a Mexican driver license may not be recognized in some U.S. states, and it may not be accepted in some places as an identity document. 

**Electronic version of identity elements**. Many U.S. driver licenses have some or all driver license identity elements encoded electronically on the driver license. For example, the Virginia driver license has both one dimensional and two dimensional barcodes, which encode key data on the driver license holder, such as name, date of birth, and license expiration date. Other data that is not printed on the front of the license may also be encoded in the bar codes, such as weight and hair color. Some states encode key license holder data elements, such as name, date of birth, and license number, in a digital fingerprint that is encoded in the color photograph on the license. Many states do not use digital fingerprints, and different states’ driver licenses encode more or fewer data elements than other states do. Presumably, conformance to the Real ID Act requirements will standardize what is encoded electronically on the license. 

**Trail to source documents**. Few states maintain a traceable trail back to the breeder documents that were used to authenticate the subject’s identity. Driver license issuing and identity proofing systems and requirements have changed substantially in the past few years, but a large percentage of driver licenses have been in effect for many years. In many cases, the breeder documents that were used to justify issuing the credential many years ago were never copied or recorded, so the trail to those documents has been lost.

#### Page 62: Identity Firewalls 
a possible solution to Identity theft The practice of using unrelated information to identify individuals in business transactions is a prime factor in making identity-theft easy. In the U.S.A this is usually the use of social security number and/or driver’s license number. This can be reversed by each industry creating and adopting identification and authentication procedures that result in unique industry-specific identities for their customers. By creating these “identity firewalls”, and using significantly stronger technology – Digital Certificates and multifactor authentication tokens – to manage the credentials, consumers, businesses and government can minimize the risk and costs of identity-theft.

An efficient compromise would be to have customer identification be consolidated around “industries'. For instance, everyone will, typically, deal with one or more of the following seven "industries" in their lifetimes: 

i. The Government – Federal, State and Local agencies 
ii. Healthcare – Hospitals, Pharmacies, Insurance companies, HMO's, etc. 
iii. Education – Schools, Colleges, Universities, Professional associations, etc. 
iv. Financial – Banks, Brokerages, Thrifts, S&L's, Insurance companies, etc. 
v. Retailers and E-commerce sites – Stores, Airlines, Hotels, Car Rental, etc. 
vi. Other Services – Legal, Accounting, Gaming, etc. 
vii. An Employer

