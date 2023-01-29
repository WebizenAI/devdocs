# Auth UseCases

This Authentication Use-Cases document is intended to help me process the AUTH requirements. 

WIP:  working through how to manage the crypto processes..

Currently, each component has their own cryptography libraries / logic. 

NOTE: https://github.com/cockpit-project/cockpit-certificates


## Main Components.

WebizenDNSSEC: investigating, atm, idk.  basically using DNSSEC & DANE to support DNS protection. 

WebizenDNS:  The ability for legal entities to have an electronically named address-space, that is 'owned' by them. 

WebizenTLS: The ability to Assert via Cryptography relations associated with a software agent and/or electronic artifacts. 

WebizenOIDC: the ability to identify who is logged in (human 'what a person knows' / support for 'out of band' authSupport).

*WebAuthn and similar can also be additionally supported with the OIDC methods (2nd factor requirements)*

VerifiableCredentials:  The ability to issue/present (3rd party) attestations.

VerifiableBadges: Cryptographic 'verifiable claims'. (seemingly different to 'VC' tech.)
The ability to provide a semantically defined verifiable instument relating social / biosphere factors communicably via AI compatible electronic infrastructure. 

### Cryptographic instruments - NOTES
NOTE:  There's a bit of overlap between verifiable credentials and verifiable badges; yet, there's some distinctions, and the means to support both is important.  In-effect, the ability for an individual to support their own rights and interests, will require an alternative to VerifiableCredentials which has seemingly excluded human rights from its intended usecases / usage scope.  However Verifiable Credentials is likely to be used by Governments and other institutions to assert 'rights' that allow a person to be recgonised by law (ie: not animal or otherwise made incapable of socioeconomic participation); without necessarily providing any scope for furnishing support for rights of that participant (Electronic Evidence, etc.).

If i find evidence to suggest that i'm mistaken, then i'll update the record.


