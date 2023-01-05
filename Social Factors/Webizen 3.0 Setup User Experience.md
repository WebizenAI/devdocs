
This document is intended to provide a description of the user-experience associated with setting-up the [[Webizen 3.0]] series - Software Environment. 

Note: this example is for people who do not have the technical expertise to set-up their own VPS and run scripts to configure, manage and maintain it, etc.  

Presently; there is an assumption that IF they point a domain at the service, the service does not currently support email and other domain related services; as such, the use of domain names are via a pointer not via management of the name-server records entirely (although, this option is sort to be addressed as part of the [[Webizen 3.5]] scope of works.). 

1. User goes to the Webizen Provider.  This may be discoverable via [webizen.org](http://www.webizen.org/) or referred to them by someone they know and/or trust.
    
2. The user signs-up for an account;  
   
	a.  They'll need to provide all their information much like setting up a crypto-currency related account on those sorts of websites.  
	b. They'll also need to provide information for recieving and making payments. 

*(Note; ideally, although probably only possible in future - the systems are not relying upon a 3rd party email address for authentication.)*

3. The user is then presented with an option to either use a sub-domain of the providers domain-names or to attach their own domain via DNS.  
	a. if they elect to use their own domain the website shows them how, etc.
	b. if they don't have a domain, ideally also - the website helps them register one (and charges them for it, etc.)

4. The range of service types and related features / services provided by that webizen provider are listed for the user. This may include;
	a. Data Storage (ie: Encrypted Backups)
	b. Data-Services (ie: Webizen updates & availability, even if the user is offline)
	c. Website Support (ie: ability to provide a more advanced web-presence)
	d. VPN like services, locating their exit-node in some other country
	e. More Data and/or CDN related services 
		(ie: someone with lots of hits or video services, etc.)
	f. other (there's as myriad of different services that they could provide)

*The user can return to this 'admin panel' at any time in the future...*

5. User is provided a link to a page where they can select which operating system they have and be provided the package to download to their personal computer / laptop.
	a. The application install is guided.
	b. a link is generated to connect it to their host-service.
	c. Once the connection has been made, the system continues to setup the local webizen server.
	d. Once it is installed - it says 'congratulations' and they're able to open the introductory pages in their web-browser.
	e. Once its working in their web-browser, they get a webizen intro thing 
	(ie: a webizen robot providing some basic information, but perhaps not initially)
	
6. Getting Started
	 a. They're invited to get started; by installing the basic apps and connecting with those they know who also have a webizen account.
	 b. They're then invited to start populating the apps with their information
	 c. They're invited to connect to their existing apps, and export the information from those apps to their own webizen environment.
	 d. they're provided a bunch of 'help' information
	 (the help information - is intended to be supported by a webizen agent (ai) in future)

7. If they've got multiple computers, then they're invited to it up on those systems as well, and then define how it is they want their information stored / networked, between devices in their own personal 'webizen cloud'.

### FUTURE REQUIREMENTS

In future, there are a series of requirements to support the use of these systems by people whose computers are used by more than one person; or whose computer may be used without the knowledge of the person whose computer it is.  

Whilst different accounts on a computer, may help sort this problem out; some design thinking is required to apply the [[Authentication Fabric]] properly; notwithstanding the use of various tools that can provide support for better identifying authentication related issues...

There are also an array of requirements relating to [[Protecting Children]] which thereby and thereafter includes ensuring that they have the greatest ability 'We' are able to support in providing them the best opportunties for them to Grow to their fullest potential.