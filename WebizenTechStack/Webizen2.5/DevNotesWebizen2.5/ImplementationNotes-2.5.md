

The other area that has information about the objective purpose is the [[Webizen3.0Apps]] environment, that contains information about the apps that are being developed for both the [[Webizen2.5]] and [[Webizen3.0]] stack - which is considered the foundational implementation (the Webizen 2.5 work being merely a stepping stone towards 3.0). 

Other than that; See links & info below,

- [[WebizenID]]
	- [[AgentAPI]]
	- [[AgentLogic]]
	- [[WebizenID-TLS]]
	- [[WebizenID-DNS]]
- [[Webizen2.5HostComponents]]
	- [[BasicWebizenNetworking2.5]]
		- [[Headscale-UI]]
		- [[HeadScaleImplementation]]
		- [[TailNets]]
		- [[WebizenDNSNotes]]
	- [[CaddyServerImplementation]]
	- [[ImplementationProgress2.5]]
		- [[AuthUseCases]]
		- [[jsonInterfaces]]
		- [[VerifiableCredentialLibrary]]
		- [[WebizenDB]]
	- [[WebizenHostWebPlatform]]
- [[ToolAppRequirements]]
	- [[POCAppRequirements]]
	- [[TrainedLanguageModel]]

There are also two notes about [[SolidBasedSystemsFork]] however, i'm not sure if this is a useful approach or something that might be considered a priority atm.  

Note also the note made about [[Curator]] which is the implementation requirements needed for [[WebizenAllianceHostProviders]] to support multiple webizen host containers; and in-turn also, provide support for the various functions that require a host provider, for the webizen owners host runtime.

## Issues

There's lots of them.  Working through it. but some include the need to consider [[jsonInterfaces]], the [[ToolAppRequirements]] and in-turn constructing the inital implementation.  it is a work in progress.

### Email Addresses
As a consequence of the users making use of their own domain; there's an array of implications about the historical use of email addresses vs. new opportunities. Effectively, every relationship can be provided its own email address that can be whitelisted.

Therein the user (webizen owner) doesn't need to be a single email address; rather, email addresses can be generated to represent the relationship with each individual agent.  With respect to managing the means to reissue authentication information (ie:; email used for recovery); that's a different type of problem.  

I think the preference is likely to be employing a mixture of 2nd factor (ie: authenticator apps) and/or phone numbers; moreover, some way that a user is able to isolate the dependency that's otherwise existed on their need to have their authentication systems depend upon the security of an email address associated with an employer or free online email service provider.
