There are two DNS sytems; one within the network, the other via the public internet.

There are implications relating to how [[WebizenID]] is implemented; particularly with respect to, [[WebizenID-DNS]] and [[WebizenID-TLS]] support.

## WebizenID-DNS Notes
WebizenID-DNS is a method where a domain-name is owned by the webizen owner who is therefore able to control the DNS records for that domain-name.  

When a web-service is established for a legal entity, the service requires a means to authenticate the ownership related details associated with the account (and its use). 

The objective purpose of this method is to establish a process whereby the account owner establishes an account using their own top-level domain.  This domain is then required to either establish a DNS record on their existing NameServer or migrate the domain to the Webizen Host Services Name-Server where a DNS record will then be applied.  In either case; the domain is registered and owned by someone, as is part of the process that is required in relation to the practice of registering a domain-name.

### DomainMapping (tailnets)

Within the [[TailNets]] a FQDN (See: [WikiPedia: Fully Qualified Domain Name](https://en.wikipedia.org/wiki/Fully_qualified_domain_name)) is provided; which is essential for HTTP(s) services, yet the domain-name address used for each system that is operating an active node will need to be different.  As such, there is a question about how mapping might be best applied.  In these systems, users are expected to register / rent their own domain name (in future, maybe buy/own).  This is part of the ecosystem method as described in the notes about [[WebizenID-DNS]], but the names wont be the same within the tail-net - although, they could be subdomains. 

A possible solution might be something like the following concept;

1. User Validates they own their domain name using the [[WebizenID-DNS]] method.
2. User thereafter sets-up a Webizen account / host network.
3. Host network could then set-up two routing methods;
	- The First provides a sub-domain for the tailnet client.
	- The second privides both the sub-domain, but also appends the domain name provided with a name that is not allowed to be used on the ICANN DNS.  one example of this type of top-top level name is `.home` (see [ICANN notes](https://icannwiki.org/.home)).
	  
	  therefore; one potential concept is to see what the implications might be to using a method where internal routing is defined via the following methods;
	intent.eco - a domain name i own. 
	My Webizen Network;
	- My VPS Host Service: node1.intent.eco
	- My main workstation (laptop / PC): node2.intent.eco
	- Internal vs. External permission systems:
		- intent.eco = public
		- intent.eco.home = internal network (not publically routable)

Implications & concerns;  it may be that this type of method might break the TLS (and [[WebizenID-TLS]]) certificate issuance process.  More investigations are required.

## Webizen Network DNS
Within the [[TailNets]] there is an opportuntity to redefine some of the DNS systems, however the costs and implications are presently unknown.  One of the more significant considerations relates to whether and/or how various [[Non-HTTP(s)Protocols]] might be better supported than is otherwise defined by the DID specifications (see: [[DIDsEval]]), whereby one of the considerations is that the existing work might be transformed to employ DNS records for DID network declarations rather than the current [DID Methods Registry](https://github.com/w3c/did-spec-registries/tree/main/methods) approach; which would thereby intended to better support decentralisation. 

IF This method were employed; then in-order to ensure that there was no confusion, the  serialisation methods would be best provided using an alternative method, following the specifications provided by the [[WebizenID]] specifications, which at the time of writing this, requires alot more work.  



