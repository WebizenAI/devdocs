# Authentication Fabric

(incomplete - to be updated)
The Authentication Fabric is complicated and involves many parts, that are intended to work as an ecosystem.  

The effect of the Authentication Fabric is intended to result in a curatable, highly secure & accountability 'fabric' with attribute based access control; that becomes managable via the query interface (alongside more manual interfaces). 

There's a couple of different layers involved in this Authentication Fabric.

### Authentication of Devices
A variety of host-fingerprinting information is employed and thereafter supported via [WebID Specifications](WebID%20Specifications.md) [WebID-TLS](WebizenTechStack/CoreTechnologies/SemanticWeb/SemWeb-AUTH/WebID-TLS.md), [WebID-TLS](WebizenTechStack/CoreTechnologies/SemanticWeb/SemWeb-AUTH/WebID-TLS.md) and similar.  

NB: https://github.com/jaypipes/ghw
 
### Network Authentication tooling
The "Network" Authentication fabric makes use of IPv4/IPv6 (preferred) tooling, alongside DNS, TLS, [VerifiableClaims&Credentials](VerifiableClaims&Credentials.md) and [WebID-OIDC](WebizenTechStack/CoreTechnologies/SemanticWeb/SemWeb-AUTH/WebID-OIDC.md)

### Agent Authentication Tooling
Agent based authentication links with the semantic authentication chain, alongside [WebID-OIDC](WebizenTechStack/CoreTechnologies/SemanticWeb/SemWeb-AUTH/WebID-OIDC.md) and [VerifiableClaims&Credentials](VerifiableClaims&Credentials.md) alongside tools such as [WebAuthn](WebizenTechStack/WebizenApps/Webizen3.0Apps/WebizenAppSpec/WebSpec/WebPlatformTools/WebAuthn.md). 

NOTE
This document is incomplete.  There's a bunch more that ends-up going into the ecosystem that ends-up supporting a form of safety / security 'fabric' that (afaik) is unlike others.

