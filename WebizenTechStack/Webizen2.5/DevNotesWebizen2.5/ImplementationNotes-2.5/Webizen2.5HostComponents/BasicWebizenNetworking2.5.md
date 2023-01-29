# Webizen Networking 2.5

## Introduction

The basic summary is that it'll be designed to use Tailscale clients, Headscale and the use of caddy server is  considered likely.  Thereafter also, is a requirement to establish the elected methodology for managing users platforms.  Presently, the headscale based solution is designed to support only one domain.  Modifying this to support multiple may be beyond the scope of what is reasonably sought to be achieved for this POC stage.  Therefore, it is likely a better alternative to design an implementation where each domain operator is setup with their own headend solution.  This may be different to the requirements for the [[Curator]] solution. 

### The Headscale 
link: https://github.com/juanfont/headscale

NOTE: From [readme file](https://github.com/juanfont/headscale)
*`headscale` aims to implement a self-hosted, open source alternative to the Tailscale control server. `headscale` has a narrower scope and an instance of `headscale` implements a _single_ Tailnet, which is typically what a single organisation, or home/personal setup would use.*

Requirements.

1. Needs to support SAN method to support WebID-TLS like URI.
2. It is considered important to be able to support more complex tailnet networking (ie: more than one tailnet). the specification is TBA, and it is not considered important for the Webizen 2.5 implementation (dev environment)

### TailScale Clients
link: https://tailscale.com/download/

AFAIK - no changes need to happen to this code.

### Caddy Server

Link: https://github.com/caddyserver/caddy

Caddy is configured using JSON files.  It would be nice to be able to manage this via the webizen runtime. 

Caddy has a method to produce extensions via [modules](https://caddyserver.com/docs/extending-caddy).

### Containerisation

The [[Containerisation]] approach is likely to use docker, although i'm yet to better understand the potential role of kubernetes, how and why it may be supported. 


## General notes

I am working through the [[AuthUseCases]] for the host platform that i've termed the [[Curator]].  Therein, the underlying process firstly is to define the cryptography methods employed at different levels of the technology stack, which can then support work on [[CuratorLogic]] systems.  SeeAlso: [[WebizenDNSNotes]].




