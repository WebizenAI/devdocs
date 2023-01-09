# Webizen Server - WebApps

The Webizen Web-Server (on the box, not running on clients, like phones, etc.), or as may be better defined - internet server; should provide support for hosting websites, domain(s), email and other related ‘web’ services.   Now, there are some ‘wish list’ aspects; alongside consideration about what might be more practical and/or ‘stepping stones’ towards better outcomes… 

The Webizen is built using a SemWeb Graph DB back-end; that is intended to use Sparql ecosystems, alongside support for GraphQL(-LD).  Many existing ‘website’ systems / solutions are built on a LAMP (linux, apache / mySql / PHP) stack.

### Webizen Websites

An alternative software development schema is made available as a consequence of owning a webizen; notwithstanding, the problem that not all people will own a webizen on day one, so, the opportunities to produce webizen software will be limited in the early stages of commercialisation. 

Webizen software will use a ‘universal api’ not unlike the ‘solid’ platform API; indeed, very much based upon it.  These forms of software, run locally and do not require their own database for storing ‘personal information / resources’; rather, they’re designed to provide an application that employs the rules defined, in-turn, defining the webizen, which then provides a means to power the applications.

### Webizen Web Apps

Some apps may be provided online. 
  
![](https://lh3.googleusercontent.com/c2wgXJgVRdLH4nuNDx6P4UP8DGs8NVn_35H27A3yi3QK-fa6jowSsGw6AmrMGDgrdk5D6f1vgnmnAF-4gCkZf-UqXQd3ceLkC5bUsZtTaBp_WAStcPFpK2S6dOb1tWzxLivxF72QyTXN1FK0jeQGr3Bvdyb6UhFQpX1ARDAxd5SBivSR1Oybr42V-Npo)

An example developed in 2015 is [http://dev.webcivics.org/](http://dev.webcivics.org/)  (per aside) 

Whereby the login requires; 

- An address (ie: webizen location / domain).
- A Persona (ie: webizen name / account)
- a Passcode (ie: password)
- 2nd factor (ie: WebID-TLS cert for device or WebAuthn)

See notes about the [[AuthenticationFabric]]... 