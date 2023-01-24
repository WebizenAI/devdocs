# HeadScale Implementation

## About Headscale
Headscale is an open-source implementation of the Tailscale control server.

GitHub LINK: https://github.com/juanfont/headscale/

Their design goal described in the following way in their github readme.md file;

*`headscale` aims to implement a self-hosted, open source alternative to the Tailscale control server. `headscale` has a narrower scope and an instance of `headscale` implements a _single_ Tailnet, which is typically what a single organisation, or home/personal setup would use.*

## What is Tailscale

Tailscale is [a modern VPN](https://tailscale.com/) built on top of [Wireguard](https://www.wireguard.com/). It [works like an overlay network](https://tailscale.com/blog/how-tailscale-works/) between the computers of your networks - using [NAT traversal](https://tailscale.com/blog/how-nat-traversal-works/).

Everything in Tailscale is Open Source, except the GUI clients for proprietary OS (Windows and macOS/iOS), and the control server.

The control server works as an exchange point of Wireguard public keys for the nodes in the Tailscale network. It assigns the IP addresses of the clients, creates the boundaries between each user, enables sharing machines between users, and exposes the advertised routes of your nodes.

A [Tailscale network (tailnet)](https://tailscale.com/kb/1136/tailnet/) is private network which Tailscale assigns to a user in terms of private users or an organisation.

## Modifications

The code-base has been modified to support [[WebizenID-TLS]].  

#### WIP
Investigation is being undertaken about how to integrate 