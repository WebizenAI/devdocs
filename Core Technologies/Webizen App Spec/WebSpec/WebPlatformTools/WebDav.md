Put simply, resources need to provide both a temporally static end-point and a 'latest' end-point; as to support temporal semantics.

it is believed the best way to achieve this for HTTP(s) information is via WebDav

I've found https://cs.opensource.google/go/x/net 

Description of  [WebDav from WikiPedia](https://en.wikipedia.org/wiki/WebDAV)

**WebDAV** (**Web Distributed Authoring and Versioning**) is a set of extensions to the [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") (HTTP), which allows [user agents](https://en.wikipedia.org/wiki/User_agent "User agent") to collaboratively author contents _directly_ in an [HTTP web server](https://en.wikipedia.org/wiki/Web_server "Web server") by providing facilities for [concurrency control](https://en.wikipedia.org/wiki/Concurrency_control "Concurrency control") and [namespace operations](https://en.wikipedia.org/wiki/Namespace "Namespace"), thus allowing [Web](https://en.wikipedia.org/wiki/World_Wide_Web "World Wide Web") to be viewed as a _writeable, collaborative medium_ and not just a read-only medium.[[1]](https://en.wikipedia.org/wiki/WebDAV#cite_note-FOOTNOTEWhiteheadGoland1999293-1) WebDAV is defined in [RFC](https://en.wikipedia.org/wiki/RFC_(identifier) "RFC (identifier)") [4918](https://datatracker.ietf.org/doc/html/rfc4918) by a [working group](https://en.wikipedia.org/wiki/Working_group "Working group") of the [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force") (IETF).[[2]](https://en.wikipedia.org/wiki/WebDAV#cite_note-FOOTNOTEWhitehead199834-2)

The WebDAV protocol provides a framework for users to create, change and move documents on a [server](https://en.wikipedia.org/wiki/Server_(computing) "Server (computing)"). The most important features include the maintenance of properties about an author or modification date, [namespace](https://en.wikipedia.org/wiki/Namespace "Namespace") management, collections, and overwrite protection. Maintenance of properties includes such things as the creation, removal, and querying of file information. Namespace management deals with the ability to copy and move web pages within a server's namespace. Collections deal with the creation, removal, and listing of various resources. Lastly, overwrite protection handles aspects related to the locking of files. It takes advantage of existing technologies such as [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security"), [digest access authentication](https://en.wikipedia.org/wiki/Digest_access_authentication "Digest access authentication") or [XML](https://en.wikipedia.org/wiki/XML "XML") to satisfy those requirements.[[3]](https://en.wikipedia.org/wiki/WebDAV#cite_note-FOOTNOTEWhiteheadGoland1999294-3)

Many modern [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") provide built-in [client-side](https://en.wikipedia.org/wiki/Client-side "Client-side") support for WebDAV.