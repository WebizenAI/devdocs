For the time-being, i'm calling the host-platform 'Curator'.

Curator is an integration and refactor of several components to support a membership orientated (ie: like a co-operative or club type of structure ) head-end to support [[Webizen]] users and the network requirements to support [[HumanCentricAI]] built to support [[HumanCentricDigitalIdentity]]. 

The term curator is intended means "a custodian of a collection.".  In this case, the software is defined to curate; AI, Commons and Membership (accounts).

The curator platform needs to be able to activate users.  In-order for users to establish an account, they'll need to be authenticated in a manner that is designed to be improved as to support identity verification of the end-user / webizen network owner. 

Part of how this will be achieved is intended to be supported via the [[WebizenID-DNS]] methodology. 

***The ability to reset passwords to access systems should not be possible via an email password recovery process alone.***  

A study of the requirements for the users environment is important and necessary.  Part of the objective purpose is to reduce the 'online hosting costs' / total cost of ownership.

Cost Assumptions;
- Domain Name: $20 (or less) AUD PA
- VPS $10 AUD PCM ($120PA)

So, Lets assume between $150 - $200 PA.  

Hosted services will need to be orchastrated by a [[WebizenAlliance]] provider.  It is also likely that these services should be supported by a larger [[PermissiveCommons]] DB provided by the [[WebizenAlliance]] Host. 

The service will likely be deployed using docker; and will need to support,
- Headscale (inc. a UI)
- Solid like platform (note: [[ModdingSolid]] )
- Email Host

The Curator platform will need to be able to manage multiple end-users / network owners.