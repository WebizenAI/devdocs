Specification Link is provided https://www.w3.org/2005/Incubator/webid/spec/tls/ 

WebID-TLS (Web Identity over Transport Layer Security) is a protocol that enables secure authentication and authorization using WebID technology over the Transport Layer Security (TLS) protocol. It is an extension of the WebID protocol that adds support for TLS-based authentication.

WebID-TLS is designed to allow users to authenticate themselves to a website or service using their WebID and digital certificate, which are authenticated over a secure TLS connection. The website or service can then verify the user's identity and grant them access based on their WebID and the information associated with it.

WebID-TLS is often used in combination with other technologies, such as the Simple Authentication and Security Layer (SASL), to provide a secure and decentralized authentication mechanism for web applications and services. It is also commonly used in combination with the Resource Description Framework (RDF) and the Web Ontology Language (OWL) to represent and manage user identity and associated data in a semantic way.

In summary;

The [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-key_store%20%22Key_Store%22) must have a [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-certificate%20%22Certificate%22) with a `Subject Alternative Name` URI entry. This URI must be one that dereferences to a [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile%20%22WebID_Profile%22) whose graph contains a `cert:key` relation from the WebID to the public key published in the  . (see below [](https://www.w3.org/2005/Incubator/webid/spec/tls/#the-webid-profile-document))

For example, if a user Bob controls `https://bob.example/profile`, then his [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid%20%22WebID%22) can be `https://bob.example/profile#me`

When creating a certificate it is very important to choose a user friendly Common Name (CN) for the user, that will allow him to distinguish between different certificates he may have, such as a personal or a business certificate, when selecting one from his browser. In the example below the CN is `Bob (personal)`. This name can then also be displayed by any server authenticating the user as a human friendly label. The [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid%20%22WebID%22) URL itself should not usually be used as a visible identifier for human users, rather it should be thought of as a hyperlink in an `<a href="https://...">` anchor. That is the CN should be a label and the [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid%20%22WebID%22) a pointer.

The [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile%20%22WebID_Profile%22) document _must_ be a [](https://www.w3.org/2005/Incubator/webid/spec/tls/#bib-WEBID)] document. It _must_ also expose the relation between the [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid%20%22WebID%22) URI and the [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-subject%20%22Subject%22)'s [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-public_key%20%22public_key%22)s using the [cert ontology](http://www.w3.org/ns/auth/cert#dfn-webid_profile "WebID_Profile"]] as well as the standard `xsd` datatypes.

### Vocabulary

RDF graphs are built using vocabularies defined by URIs, that can be placed in subject, predicate or object position. The definition of each URI should be found at the namespace of the URI. Here we detail the core cryptographic terms needed. The optional foaf vocabulary used to describe agents can be found at the [the foaf namespace vocabulary document](http://xmlns.com/foaf/0.1/).

Below is a short summary of the vocabulary elements to be used when conveying the relation between the [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-subject%20%22Subject%22) and his or her key, within a [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile%20%22WebID_Profile%22) document. For more details please consult the [cert ontology document](http://www.w3.org/ns/auth/cert).

[](http://www.w3.org/ns/auth/cert#key)

Used to associate a [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid%20%22WebID%22) URI with any PublicKey. A [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile%20%22WebID_Profile%22) _must_ contain at least one PublicKey that is associated with the corresponding [](https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid%20%22WebID%22) URI.

[](http://www.w3.org/ns/auth/cert#RSAPublicKey)

Refers to the class of RSA Public Keys. A RSAPublicKey _must_ specify both a cert:modulus and a cert:exponent property. As the cert:modulus and cert:exponent relations both have as domain a cert:RSAPublicKey, the type of the key can be inferred by the use of those relations and need not be written out explicitly.

[](http://www.w3.org/ns/auth/cert#modulus)

Used to relate an RSAPublic key to its modulus expressed as a hexBinary. An RSA key _must_ have one and only one modulus. The datatype of a modulus is xsd:hexBinary. The string representation of the hex:Binary _must_ not contain any whitespaces in between the hex numbers.

[](http://www.w3.org/ns/auth/cert#exponent)

Used to relate an RSAPublic key to its exponent expressed as a decimal integer. An RSA key _must_ have one and only one exponent. The datatype of a modulus is xsd:integer.

