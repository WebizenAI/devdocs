# Email Server Logic

The objective is to use the domain name to generate email addresses based upon the user of the address. 

ie: MyDomain.tld

- Google - MyDomain.tld = email that is from myaccount@gmail.com to google@mydomain.tld

Therein - each relationship has different email addresses provided which thereby provides an ability to manage spam.

MailServer OPtions

Maddy: 

Maddy Mail Server implements all functionality required to run a e-mail server. It can send messages via SMTP (works as MTA), accept messages via SMTP (works as MX) and store messages while providing access to them via IMAP. In addition to that it implements auxiliary protocols that are mandatory to keep email reasonably secure (DKIM, SPF, DMARC, DANE, MTA-STS).

It replaces Postfix, Dovecot, OpenDKIM, OpenSPF, OpenDMARC and more with one daemon with uniform configuration and minimal maintenance cost.
source: https://github.com/foxcpp/maddy

Considerations

Is the email server one of those examples where the use of [[BadWolf]] (timestamps, etc) becomes increasingly useful?  also the use of BQL becomes less of a problem...

