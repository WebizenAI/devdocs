# WebizenHostWebPlatform V2.5

## Intro

There's a variety of existing notes in the library.  The [[SolidBasedSystemsFork]] being the most recent, in relation to the activity process of seeking to implement a Host Web Services Environment.  There is also a requirement to integrate [[Headscale-UI]] or integrate the functionality of the HeadScale-UI with the management interface for the Host RWW based system; which is likely built using a more modern version of 'solid node server' as a consequence of both packages being written with nodejs related tools.

The package is likely to be produced to use Docker / Docker Files.  

TBD = To Be Done
WIP = Work in Progress


The high-level concepts relating to [[WebizenID-DNS]] have been somewhat defined; note also, [[WebizenDNSNotes]].


## Summary of Mods

### Headscale Mods

**[[WebizenID-TLS]] Support:**
Headscale has been modified to issue SAN URIs via the CertificateIssue scripts.  Whilst the generation of the URI is defined, the file itself hasn't been defined or generated. The method to do so will be developed as part of the UI/RWW related works.

**OIDC Support: TBD**
The Authentication scripts relating to the use of OIDC (or [[WebID-OIDC]] based) methods has not been formeralised yet.  The concept of the useful purpose of OIDC is as a means to better support how human beings (specifically) identify themselves; and/or create authentication / Authorisation links between services. 

Currently Headscale depends upon an OIDC Provider.  The libraries from Node-Solid-Server provide OIDC Provider libraries, however they're currently not securely set-up. 

**TailNet DNS**
DNS Mods: there are a variety of potential modifications to the DNS methods currently available via the headscale/tailscale tooling. Considerations about how to do this is WIP.

### UI/RWW related works.

An integration between Headscale-UI and the modified version of a Node-Solid-Server is thought to be the best approach, although i'm just in the early stages of doing it (stopping, to go write more documentation about doing it - rather than doing it!). 

This integration will seek to create a docker Image that somewhat automates the installation process.  

### Cockpit
Server Management Engine [Cockpit](https://cockpit-project.org/)
Cockpit is a web-based graphical interface for servers.






