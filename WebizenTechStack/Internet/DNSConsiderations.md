# DNS Considerations

The Primary DNS service provided on the internet is governed via ICANN.  This system defines how Domain Names are allocated and in-turn also, the rental charges attributed to them.  Alternatives have been developed overtime, most recently via the Etherum Blockchain.

The preference is to seek to ensure etherum is only optionally required, rather than being core to the function of the broader ecosystem.

The use of the TailScale network has the effect of producing a networking topology that can be defined to use tools that are not otherwise available on the public internet.  It is desirable to ensure that any solutions that are built in this private network do not create conflicts with the public internet; and therefore also, ICANN managed DNS.  However, there may be usefully employed alternatives that could support features otherwise difficult to achieve.

One of the higher level considerations - is the delegation of FullyQualifiedDomainNames (FQDN), which are in-turn required to support TLS related systems.

If using alternatives, then the use of the EFF CertBot is possibly going to become unavailable; however more investigation about the options and opportunities are thought usefully done.

### Perfect World Scenario - Desirable Features

In a 'perfect world', or at least a better one - there would be an ability to delegate domain names to persons in a way that's similar to the delegation of birth names; both, should be able to be changed, and that they're a persons property and protected by law - rather than something that is 'rented'; something that is rarely changed throughout a persons life. 

*There are some [[SupportForHumanAgency]] related considerations associated with DNS strategies, that i'll delve into within that page (as its located in the [[SocialFactors]] part of this site).*

- 'Life long' delegation of a domain-name space - the ability to delegate DNS addresses for the foreseeable future.
- IPv6 and related extensions (Ie: DANE, DNSSEC, DNS over TLS / DNS over HTTPS)

There is an array of problems about how to define a naming strategy to inter-generationally provide individuals domain-names or 'namespace' that may well outlive them; noting, we don't really know how DNS related systems will evolve over the forthcoming decades or indeed, beyond the next 80 years.  

*Yet, it may well be reasonably assumed that whatever is developed to replace it, will likely be deployed as an upgrade and not a complete replacement.* 

The problem about namespace is considered to be a problem irraspective of which DNS system is used.  

The second area of consideration is about DNS related Records vs. alternatives, including but not exclusive to some of the ways [IANA URI Schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) have been used to deal with the emergence of new protocols, and in-particular therein - the [DID](https://www.iana.org/assignments/uri-schemes/prov/did) method, which thereafter creates a independent [methods registry](https://github.com/w3c/did-spec-registries/tree/main/methods) that's got far less namespace than DNS. 

There is presently a specific list of types of [DNS Records](https://en.wikipedia.org/wiki/List_of_DNS_record_types) and perhaps it could become the case that experimentation with new types of records could develop through the internal WebizenNetwork use of an alternative DNS solution - that would be required to be designed in such a way that would seek to ensure that there wasn't any collision related issues. 

Thereby providing a method to define new [IETF RFCs](https://datatracker.ietf.org/) that may address issues relating to the address-space in ways that the current Public DNS system does not (but may later adopt).

### Alternative DNS systems.

OpenNic: https://wiki.opennic.org/start

#### About OpenNIC[](https://wiki.opennic.org/start#about_opennic)

OpenNIC (also referred to as the OpenNIC Project) is a user owned and controlled top-level Network Information Center offering a non-national alternative to traditional Top-Level Domain (TLD) registries; such as ICANN.

Use of OpenNIC DNS servers, enables host name resolution in the Legacy U.S. Government DNS, OpenNIC operated namespaces, and namespaces that OpenNIC has peering agreements with.

#### YETI Project 

About the [Yeti Project](https://yeti-dns.org/)
“One World, One Internet, One Namespace” is the essence for the success of today’s Internet. The top level of the unique identifier system, the DNS root system, has been operational for 25+ years. It is pivot to make the current Internet useful. So it is considered somewhat ossified for stability reasons. It is hard to test and implement new ideas evolving to a more advanced level to counter challenges. To benefit the Internet development as a whole, Yeti Project is founded to build a parallel experimental live IPv6 DNS root system to discover the limits of DNS root name service and deliver useful technical output.

### DNS Related Tools

#### DNSCrypt

[DNSCrypt](https://dnscrypt.info/) is a protocol that encrypts, authenticates and optionally anonymizes communications between a DNS client and a DNS resolver. It prevents DNS spoofing. It uses cryptographic signatures to verify that responses originate from the chosen DNS resolver and haven’t been tampered with.

It is an open specification, with free and open source reference implementations, and it is not affiliated with any company nor organization.

Free, DNSCrypt-enabled resolvers are available all over the world.

#### HANDSHAKE

[Handshake](https://handshake.org/) is a decentralized, permissionless naming protocol where every peer is validating and in charge of managing the root DNS naming zone with the goal of creating an alternative to existing Certificate Authorities and naming systems. Names on the internet (top level domains, social networking handles, etc.) ultimately rely upon centralized actors with full control over a system which are relied upon to be honest, as they are vulnerable to hacking, censorship, and corruption. Handshake aims to experiment with new ways the internet can be more secure, resilient, and socially useful with a peer-to-peer system validated by the network's participants.