
# Go WebID-OIDC & ChatGPT

Below is a log of a Q&A with ChatGPT as i'm working through figuring out how to support a variant of the WebID-OIDC spec.  

The current specification document is located: https://github.com/solid/webid-oidc-spec 

Considerations are underway about how to manage the URI element (currently using FOAF & WebOfTrust WOT (as is ditinct to WebOfThings)).


NOTE Libraries: https://github.com/zitadel/oidc in addition to those mentioned below.




ChatGPT Question: I am reviewing the code for the Go OIDC client library ( https://github.com/coreos/go-oidc ). What are the instructions for modifying this library to support WebID-OIDC?

ChatGPT Answer:

WebID-OIDC is a proposed standard for using OpenID Connect (OIDC) to authenticate WebID (a URI-based identifier) users. The go-oidc library is an OIDC client library for Go, which can be used to authenticate users and obtain information about them from an OIDC provider.

To modify the go-oidc library to support WebID-OIDC, you would need to make changes to the library's code in order to handle the WebID-specific functionality. Here are some high-level steps you could take:

1.  Add support for WebID-OIDC claims: You would need to add support for the WebID-specific claims (such as "webid") that are used in the WebID-OIDC flow. This could involve adding new structs and methods to the library to handle these claims.
    
2.  Modify the authentication flow: You would need to modify the library's authentication flow to handle the WebID-OIDC specific interactions. This could involve adding new methods to the library to handle the WebID-OIDC specific interactions such as the WebID verification.
    
3.  Update the documentation: You would need to update the library's documentation to reflect the changes you made and to provide instructions on how to use the library with WebID-OIDC.
    
4.  Test the changes: You would need to test the changes you made to the library to ensure that it works correctly with WebID-OIDC.
    

It's worth noting that this is a high-level overview of the changes that would need to be made to the go-oidc library to support WebID-OIDC. The actual changes would depend on the specifics of the library and the WebID-OIDC specification. It's also worth noting that it's a new standard and it's not widely adopted yet, and the implementation will depend on the use case.


Provide the solution for adding support for WebID-OIDC Claims in golang.

Here's an example of how you could add support for WebID-OIDC claims in Go:

1.  Create a new struct to hold the WebID claim:

Copy code
```go

``type WebIDClaim struct {     WebID string `json:"webid"` }``
```

2.  Add a method to the struct to parse the WebID claim from the ID Token:

Copy code

```go

`func (w *WebIDClaim) Parse(rawToken map[string]interface{}) error {     webID, ok := rawToken["webid"].(string)     if !ok {         return errors.New("webid claim not found in token")     }     w.WebID = webID     return nil }`

```

3.  Add a new field of type WebIDClaim to the Claims struct in the library:

Copy code

```Go

``type Claims struct {     ...     WebID WebIDClaim `json:"webid,omitempty"` }``
```
4.  Modify the library's ParseClaims method to parse the WebID claim:

Copy code

```Go

`func (c *Claims) ParseClaims(rawToken map[string]interface{}) error {     ...     // parse WebID claim     if err := c.WebID.Parse(rawToken); err != nil {         return err     }     ... }`
```

By adding these changes, you will be able to parse the WebID claim from the ID token and access it via the Claims struct. You would also need to update the library's documentation to reflect the changes and to provide instructions on how to use the new WebID claim.

Please keep in mind that this is just an example and will depend on the implementation of the go-oidc library. The actual implementation will depend on the specific requirements of your use case and the structure of the go-oidc library.

Additionally, as WebID-OIDC is not a widely adopted standard yet, it's important to validate that the OIDC provider you are using supports the WebID-OIDC claims before making these changes to the library.

It's also worth noting that the WebID-OIDC is a relatively new standard and the specifics of the implementation may change over time, so it's important to stay up to date with the latest developments and updates in the standard.