# Commercial-Technical Requirements


## Summary

In-order to provide HTTP based services specifically, although not solely (ie: email); as the same requirements do not equally apply if seeking to use other protocols, an array of both technical and financial requirements are invoked, which in-turn triggers off requirements to address related legal and 'identity' requirements and related issues.  In-effect, as soon as a domain name is required, then there are a series of billing, networking and online services that are also required.  This in-turn requires a means to verify the identity of the account holder; which doesn't necessarily mean, associating the services with the moral owners of the information services connected to those accounts; or indeed also, the legal juristiction in which they live.  These problems often lead to online services being provided by foreign providers by default, and there is often also financial penalties / premiums placed upon business processes that seek to provide services that are governed in a jurisiction that is local to the end-user; which is in-turn compounded when seeking to ensure people are provided digital agency (their own services) independent to any professional role / employer / etc. 

Whilst these problems can be addressed, it is not easy nor straight-forward to do so.  Indeed the broader ecosystem being produced / illustrated by this documentation, seeks to achieve that outcome, alongside others.  Nonetheless, the documentation should in-turn demonstrate the difficulties involved broadly.  

## End User Requirements

The below information is not provided in chronological order or process; a suggested approach is below.  Here, i am illustrating the requirements only.

### Domain Name(s)

End-Users should have their own domain names.  The structure for registration should be based upon legal entities, whereby natural legal persons require digital agency as is provided via their own domain names; prior to being appropriately equipped to support their engagement with group entities other than those that may be registered to support the needs of an immediate family unit. 

IE:  A  domainname may be registered for a family unit (thereby providing support for the needs of their children also); yet, the preference for some may still be to have seperate personal domain names, rather than a domain name for a family unit, thereafter providing support for each member via subdomains, etc.  

eg:  where family = whatever the family domainname is called; etc,

- family.id.au
- adultpartner1.family.id.au
- adultpartner2.family.id.au
- child1.family.id.au

*another possible and/or related solution for younger children is that records get pointed at the `family.id.au` address, and then made able to be managed, etc.* 

In-order to `own` the domain, someone needs to pay the fees to register the name for a period of time - or in-effect, on a subscription basis. Loosing the domain name (or having it stolen) is a very serious problem, although - it doesn't happen often (it has happened to me once; i paid to transfer and register `wisdom.ai` the new registrar then sent me another bill i couldn't afford, and subsequently put the domain up for sale for hundreds of thousands of dollars)

### VPS / Hosting Platform

Once the user gets a domain-name, in-order to make it useful, they then need to set it up on a hosting account somewhere that can provide the computational resources online (ie: in a datacentre somewhere) to support services such as; 

- Email 
- Website Hosting 
- Online Data Storage (ie: encrypted backups)

### Public Routing (Exit Node)

In-order to support the needs of the networking requirements for webizen, the private network also requires an 'exit node' which basically provides a bridge between the private network between devices that are operating on the local (tailscale) webizen network; and the public internet. 

The consequence of this requirement is that all traffic that is routed to the internet will go through this network interface; so, the online 'hosting' system will need to provide 'data' to support these requirements.  

### Identity Verification and  Network MGR / DNS

The way webizen is being designed to support HTTP services from home devices; which is particularly essential for networks that do not have a webizen pro related device; is routing traffic via the tailscale / headscale software ecosystem; which in-turn requires,

- Account Creation (inc. OIDC AUTH)
- Domain Name Integration (for the users domain)

Open ID Connect is a technology that is used to gain authenticated access to systems.  Often the options that are readily provided; includes,

- Microsoft
- Google
- Twitter
- Apple
- Facebook

etc.

What that kinda means, is that the authentication system is reliant upon those providers, the other related component that is common-place is the use of an existing email address, such as one that might be provided by gmail, hotmail or similar; or equally also, an ISP (internet service provider).  These identifiers aren't really 'owned' by the user of them, rather they're kinda 'owned' by the domain name owner.  

Once this has been achieved, then users will be able to install and set-up their 'webizen clients' on their computers; and in-turn manage how they manage their networking environment - but - there are a series of business and related technical requirements that must be addressed before that can occur in a manner that is streamlined... 

Noting - from a geek perspective, these sorts of things can be done now; but, the ability to provide a person with an average amount of knowledge about ICT an acceptably well defined  [[Webizen 3.0 Setup User Experience]] requires an array of complex problems to be solved, which end-up invoking a desire to address other requirements whilst building the technology that is required to solve the underlying problems that must be addressed regardless.

Fundamentally; these services, aren't free; it will cost money to get basics provided to each and every webizen owner.  The question becomes, how to form a management approach to support these and related requirements in a way; that doesn't lock users into any particular provider, notwithstanding the intention to be a provider of the sorts of services needed for users - in the juristictions that can be reasonably provided an appropriate level of support.

### Significant benefits

#### Owning a Domain Name

The benefits of owning a domain name provides an ability to;
- programmatically create unique email addresses that relate to each and every relationship; because of domain name ownership.  
  
  This in-turn provides another security related opportunity that cannot otherwise be done. 

- Operate your own IdP (oauth, etc.) for creating accounts on other networks.

#### Improve capabilities / Lower cost of ownership

Whilst setting up basic 'websites' and related systems online is often cheap if not almost free, when systems start to 'scale-up', the technology costs can escalate dramatically; and the requirement to pay those bills every month - is on-going, regardless of any revenue, etc.

#### Webizen Economics

The Webizen ecosystems should provide a capacity to significantly lower those overall costs; as well as, providing new ways to be a 1st class digital (knowledge) economy citizen. So, people who are creating (making / contributing) more than they're consuming, should end-up with a positive cash-flow experience as a consequence of having set-up these systems.

## Company Requirements

The consequential consideration otherwise inferred; is that employment related work addresses, are treated seperately to the systems produced to support individuals; which in-turn means, there's a way companies (incorporate entities) can engage with individuals, that wasn't able to be done earlier.   

Accounts for incorproated entities should require the appropriately equipped individuals associated with that entity; to be the signatories / creators, of accounts for incorporated entities.  

This in-turn provides a means to define information and networking sharing rules based upon the individuals (and other agents) involved; non-destructively to the rights of the individuals otherwise / more broadly. 



