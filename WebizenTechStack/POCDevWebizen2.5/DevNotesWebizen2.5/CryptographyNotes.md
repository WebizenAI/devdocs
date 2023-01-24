# Cryptography Notes

The webizen ecosystem is designed / intended to produce a form of identity / authorisation / cryptography 'fabric' that is designed with the express purpose of significantly reducing the amount of any 'out of band' activities.   

It is unlikely that the entire 'stack' will be engineered for the purpose of the webizen 2.5 version, which is moreover targeted towards producing a POC rather than a commercially deployable solution (meaning - 2.5 is more of an R&D platform, etc.). Nonetheless, the general 'gist' of the methodology needs to be illustrated.  The specifics on the use of particular cryptography schemas, hardware, etc.  is subject to change.  The main thing that needs to be illustrated for the time-being, is the general method; and a relatively simplified version needs to be implemented in-order to support the [[AuthUseCases]] at a simple level; so that, software can be built to make use of it.

## Entity Relations Theory

The primary purpose of this complex schema is to materially support an entity relations ecosystem, that is built upon an agent centric crypographically supported ecosystem.  The note about [[Centricity]] provides some details about how this in-turn relates to the functional objective of seeking to ensure support for [[SafetyProtocols]] that are in-turn equipped to support [[HumanCentricDigitalIdentity]] and [[HumanCentricAI]] requirements.

## Crypto Layers

### IPv6 DNSSEC DANE & Webizen-DNS

IPv6 has a few security extensions that make use of cryptography to improve the security of the DNS Entries.  This is in-turn used with DNSoverTLS or DNSoverHTTP.

***NOTE: the tailnet ecosystem does not currently support the DNS records that are sought to be supported at a later stage.*** 

- CERTIFICATE GENERATION: likely to be OpenSSL.
- Number of Keys:  only needs to be one keychain. 
- Revokation and/or reissuance;  non-disruptive. 

### Webizen-TLS
The Webizen TLS schema issues TLS certificates for use throughout the systems, denoting host authentication information that can in-turn be tied to the DNS crypto.

This method is based upon WebID-TLS but makes some changes, as such is being defined as a seperate and distinct methodology (no collisions, etc.)
- CERTIFICATE GENERATION: likely to be CertBot / LetsEncrypt.
- Number of Keys:  only needs to be one keychain. 
- Revokation and/or reissuance;  TBA.  If the TLS certificate information is used to encrypt records for purposes other than 'data in motion' (transit) then a lost key may result in the user loosing access to the encrypted resource.  

### **Webizen-OIDC**
The OIDC method is intended to define a human-user; as is distinct to authenticating the network or the (software) agent.  Authentication with this layer is able to be defined in a way that asserts rules that are asserted in relation to the DNS and TLS layers. 

### Other
The use of various document signature schemes including [http signatures](https://datatracker.ietf.org/doc/html/draft-cavage-http-signatures-12) , [JWE](https://en.wikipedia.org/wiki/JSON_Web_Encryption), [[VerifiableCredentials]], [[Non-HTTP(s)Protocols]] and what i've previously described as [[Social Encryption An Introduction]] which is basically about the use of agents that have strong authentication linked with documents that are tamper evident and the use of time; and various other endification components, that results in an ability for the Webizen Agents to perform validation functions, to produce with a much higher-degree of certainty, various cyber-security related tests and validations; across multiple 'spheres' of the broader cyber-security and [[SafetyProtocols]] related areas of consideration.  These considerations are not simply about computational networks, but also factors relating to cyber-social factors; which are built upon the [[TheValuesProject]] [[ValuesCredentials]] systems, which require a foundational platform to be used to produce those systems.


## M of N / Multisig Cryptography

Whilst not all of these usecases are usefully solve via the use of multi-sig cryptography; some of the useful purposes of crytography methods that make use of multiple keys, is to support ;
- protections can be employed for circumstances where A user may have lost their private key and therefore also, access to any records that are encrypted using it. 
- Circumstances where platform operator requires access for some reason (including reissuance of keys)
- Law Enforcement (ie: via a court of law / court-order) have a defined right to access information in specified circumstances / situations, etc. and a method needs to be defined to support these requirements in a manner that is considered the best option.
- Guardianship relations; where there is a need to support the needs of a dependent by authorised other
- Partnerships (private/personal/socioeconomic groups); whether it be a marital relationship or a group of persons who jointly need to make decisions to change records / access systems, etc. 
- IoT / Things; the ability to support shared ownership / control over something

It is noted, that these sorts of considerations are not sought to be applied universally across the entiry of systems; rather, there is a series of considerations about specified use-cases, and in-turn a requirement to figure out how to technically / materially support these sorts of functions.

SeeALso Apnic Article on [What is ‘M of N’ in public/private key signing?](https://blog.apnic.net/2021/05/28/what-is-m-of-n-in-public-private-key-signing/)
