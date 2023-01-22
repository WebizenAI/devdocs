# Webizen Networking 2.5

## Introduction

The basic summary is that it'll be designed to use Tailscale clients, Headscale and the use of caddy server is  considered likely.

The Headscale 
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


### Questions

Should docker and/or kubernetes be supported, if so how.

