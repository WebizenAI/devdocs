# Authentication Logic

TLS
RSA

User Sets-up environment for Domain Name (to be used with Headscale)

User Gets Domain Name
User assigns domain name to VPS (name-servers, etc.)
User Assigns IP Address Space to VPS service (otherwise it won't work)

User is then able to install headscale on VPS.  

User installs a version of headscale.

They define a domain
They generate TLS certs for the domain as a CA
They then download client
create magic link to issue TLS cert from CA and define Subdomain

