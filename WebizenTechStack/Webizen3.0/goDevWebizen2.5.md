# Webizen 2.5 Dev in GoLang

Whether its 2.5 or 3.0 i'm not sure - the premise of trying to simplify, is influenced by a desire to get to a point where the ability to work with other people on this project, in good faith / fair terms - is supported by usefully functioning software. 

This folder wil contain the development docs for producing a version of Webizen that is developed using GoLang that is not intended to be used as a commercial release, but rather, as a proof of concept.   It is likely to contain patterns that are different to the broader designs sought to be achieved in the first general release.  In-effect, sacrifices will be made in-order to produce something that is working and can then be developed upon.

The ability to 'upgrade' will be a key consideration, as such, the underlying data-structures will seek to be defined well enough to support migration in a way that is non-destructive.

### FOCUSED OBJECTIVE

The Focused objective is to build an ecosystem that is capable of functionally supporting the basic requirements for the work project.  A basic template that needs to be updated is available via the [webcivics cooperative projects](https://webcivics.github.io/CooperativeProjects/) repo.   This provides some indication of the sorts of functionality requirements that are generally required; without having done the work required to augment this template, into something that reflects the distributed nature of projects (rather than being centralised around one corporate / incorporated company structure).
A 'social' UX was edited in minor way, back in 2015 - it is available; http://dev.webcivics.org/  (use dummy data to get past the initial login page). 


There are three foundational runtime environments that have been identified are described below.  These parts then provide support for the webizen interface itself.  

These three parts are;

1. PermissiveCommons Technology
2. Network Operator Platform 
3. Client/Server Platform

### Permissive Commons Technology (PCT)

The PCT library / app, is intended to be a shared and distributed datastore of ACLd RDF managed assets.  The systems act somewhat like a ACLd Content Distribution Network, enabling local availability of shared assets required to perform tasks with private data; and the means to share data with specified persons pursuant to specified and defined agreement.

### Network Operator Platform

The Network Operator Platform is VPS based and provides the means to manage 'tailnets' and the entity relationships associated to the use of them. It also provides DNS related services (inc. support for domains).  

Headscale: https://github.com/juanfont/headscale

### Client/Server Platform 
The Client/server platform, is the package that is used / installed locally by webizen owners on their devices.  These systems operate locally (using tailnets) but require a NetworkOperator in-order to support networking with the broader HTTP(s) (ICANN DNS) network. 

Requirements

1. A RWW Like interface built with the help of the GOLD and HELIX works
2. Use of [[BadWolf]]
3. Use of TailNets (tailscale / headscale)


Issues

1. Cryptography Methods (and libraries)
2. Defining the systems relationships 
4. Use of Caddy Server (HTTPS interface?)

NOTES:

https://github.com/ichiban/awesome-go

howtogo https://www.callicoder.com/golang-packages/

https://github.com/ozlo/gown
