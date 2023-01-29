There are two DNS sytems; one within the network, the other via the public internet.

There are implications relating to how [[WebizenID]] is implemented; particularly with respect to, [[WebizenID-DNS]] and [[WebizenID-TLS]] support.

## WebizenID-DNS Notes
WebizenID-DNS is a method where a domain-name is owned by the webizen owner who is therefore able to control the DNS records for that domain-name.  

When a web-service is established for a legal entity, the service requires a means to authenticate the ownership related details associated with the account (and its use). 

The objective purpose of this method is to establish a process whereby the account owner establishes an account using their own top-level domain.  This domain is then required to either establish a DNS record on their existing NameServer or migrate the domain to the Webizen Host Services Name-Server where a DNS record will then be applied.  In either case; the domain is registered and owned by someone, as is part of the process that is required in relation to the practice of registering a domain-name.

### DomainMapping 

#### TLD Mapping
Defining the general defaults for domain map.  ie: [var].mydomain.tld

www.* Public Website.  HTTP/HTTPS Endpoint on the public net
mail.* Mailserver
ts.* internal network (tailscale)
admin.* admin interface (better to call it something other than admin)



### tailnets

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

## IPv6

Re: Digital Ocean, a droplet (VPS) when enabled with IPv6 provides 16 IPv6 addresses. (/124 subnet)
see: https://docs.digitalocean.com/products/networking/ipv6/
https://docs.digitalocean.com/products/networking/ipv6/how-to/configure-additional-addresses/

#### IPv6 Subnets & Corrasponding number of Ipv6 Addresses.

Below is a list; noting, the concept generally is that there is a subnet delegates regardless of whether or not the IPs end-up being publically routable. (ie: may be used within the tailnet).  The general consideration is about harmonising the IP tooling and in-turn support employment of IPv6 related security extensions.  

Each user would be delegated a subnet that exceeds their requirements, without unnecessarily wasting IPs.  It is also better to plan to seek to ensure sufficient IPs for future use.  (ie: expansion of IoT devices, etc.).  Subnets should be based upon legal entities (ie: individual or incorporated entity). 

/128 = 1
/127 = 2
/126 = 4
/125 = 8
/124 = 16
/123 = 32
/122 = 64
/121 = 128
/120 = 256
/119 = 512
/118 = 1,024
/117 = 2,048
/116 = 4,096
/115 = 8,192
/114 = 16,384
/113 = 32,768
/112 = 65,536
/111 = 131,072 
/110 = 262,144


### DNSSEC

https://www.digitalocean.com/community/tutorials/how-to-setup-dnssec-on-an-authoritative-bind-dns-server-2

### DANE


### DNSoverTLS



NOTES: 
General presentation on DNSSEC + Lets Encrypt
https://docs.google.com/presentation/d/13YzUCu5Ilba73P5DwnUP9bjBkXkJVKH8fGn3JAUxxuk/htmlpresent

