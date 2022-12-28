Specification Link is provided https://www.w3.org/2005/Incubator/webid/spec/tls/ 

In summary;

The [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-key_store "Key_Store"]] must have a [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-certificate "Certificate"]] with a `Subject Alternative Name` URI entry. This URI must be one that dereferences to a [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile "WebID_Profile"]] whose graph contains a `cert:key` relation from the WebID to the public key published in the  . (see below [[https://www.w3.org/2005/Incubator/webid/spec/tls/#the-webid-profile-document]])

For example, if a user Bob controls `https://bob.example/profile`, then his [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid "WebID"]] can be `https://bob.example/profile#me`

When creating a certificate it is very important to choose a user friendly Common Name (CN) for the user, that will allow him to distinguish between different certificates he may have, such as a personal or a business certificate, when selecting one from his browser. In the example below the CN is `Bob (personal)`. This name can then also be displayed by any server authenticating the user as a human friendly label. The [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid "WebID"]] URL itself should not usually be used as a visible identifier for human users, rather it should be thought of as a hyperlink in an `<a href="https://...">` anchor. That is the CN should be a label and the [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid "WebID"]] a pointer.

The [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile "WebID_Profile"]] document _must_ be a [[https://www.w3.org/2005/Incubator/webid/spec/tls/#bib-WEBID]]] document. It _must_ also expose the relation between the [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid "WebID"]] URI and the [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-subject "Subject"]]'s [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-public_key "public_key"]]s using the [cert ontology](http://www.w3.org/ns/auth/cert#) as well as the standard `xsd` datatypes.

### Vocabulary

RDF graphs are built using vocabularies defined by URIs, that can be placed in subject, predicate or object position. The definition of each URI should be found at the namespace of the URI. Here we detail the core cryptographic terms needed. The optional foaf vocabulary used to describe agents can be found at the [the foaf namespace vocabulary document](http://xmlns.com/foaf/0.1/).

Below is a short summary of the vocabulary elements to be used when conveying the relation between the [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-subject "Subject"]] and his or her key, within a [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile "WebID_Profile"]] document. For more details please consult the [cert ontology document](http://www.w3.org/ns/auth/cert).

[[http://www.w3.org/ns/auth/cert#key]]

Used to associate a [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid "WebID"]] URI with any PublicKey. A [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid_profile "WebID_Profile"]] _must_ contain at least one PublicKey that is associated with the corresponding [[https://www.w3.org/2005/Incubator/webid/spec/tls/#dfn-webid "WebID"]] URI.

[[http://www.w3.org/ns/auth/cert#RSAPublicKey]]

Refers to the class of RSA Public Keys. A RSAPublicKey _must_ specify both a cert:modulus and a cert:exponent property. As the cert:modulus and cert:exponent relations both have as domain a cert:RSAPublicKey, the type of the key can be inferred by the use of those relations and need not be written out explicitly.

[[http://www.w3.org/ns/auth/cert#modulus]]

Used to relate an RSAPublic key to its modulus expressed as a hexBinary. An RSA key _must_ have one and only one modulus. The datatype of a modulus is xsd:hexBinary. The string representation of the hex:Binary _must_ not contain any whitespaces in between the hex numbers.

[[http://www.w3.org/ns/auth/cert#exponent]]

Used to relate an RSAPublic key to its exponent expressed as a decimal integer. An RSA key _must_ have one and only one exponent. The datatype of a modulus is xsd:integer.

