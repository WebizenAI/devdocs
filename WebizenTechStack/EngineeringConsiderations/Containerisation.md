
## Considerations

The consideration is that the networking topology potentially provides routing to a machine that may be used to attack that machine (ie: cyber attack, data-theft, malware installation, etc).  Whilst this is a broad-ranging issue generally; it is an important issue to address.  One of the ways this might be addressed is through the use of Containerisation methodologies.

I am not an expert in this field; i've never really needed to manage containers professionally  or in relation to my websites / tech dev activities (other than - VirtualBox and similar); and whilst i've used docker, i'm certainly not an expert.

### Apps & Routing Considerations

A tactical approach to routing and the ability to use apps (ie: in a web-browser) is required at the client-server side; at the network operator side, there needs to be a way to containerise any instance of private and PCT data that's stored and operated from the network side to support networking.  

### Objectives

TBD 

NOTES:
- https://kubernetes.io/docs/concepts/overview/
- https://docs.docker.com/get-started/overview/
- https://www.atlassian.com/microservices/microservices-architecture/kubernetes-vs-docker

**Containerization** is [operating system-level virtualization](https://en.wikipedia.org/wiki/Operating_system-level_virtualization "Operating system-level virtualization") or application-level virtualization over multiple network resources so that software applications can run in isolated user spaces called _containers_ in any [cloud](https://en.wikipedia.org/wiki/Cloud_computing "Cloud computing") or non-cloud environment, regardless of type or vendor.[reference 1](https://en.wikipedia.org/wiki/Containerization_(computing)#cite_note-1) 
Source: [wikipedia](https://en.wikipedia.org/wiki/Containerization_(computing))

With particular regard to [[Webizen3.0]] and related desktop app environments; noting the [[NetworkingConsiderations]],

The implication becomes a routing method that provides public access to software running on the host device; which may in-turn expose the device in unwanted ways to external attacks.  As such, a methodology needs to be figured out to guard against the unwanted issues that this may lead to, if the issue isn't properly considered. 

I have created a [GitHub Issues](https://github.com/WebizenAI/devdocs/issues/9) on the topic to figure out how to address it as part of the underlying design requirements.  It is believed that the  [[AuthenticationFabric]] is likely to play a fairly significant role in defining the solution to this problem.  In-turn also, this is going to have various implications for the [[WebizenTechStack]] development requirements overall. 

Another part of the considerations also relate to how the solution impacts the availability of resources on a computer that is not solely dedicated to operating the [[WebizenTechStack]].  This is expected to be a continual requirement for an array of devices; although noting, part of the [[Webizen3.5]] works (ie: [[WebizenPro]] and [[WebizenAiOS-Platform]] ) do result in the development of solutions that are specifically designed to be operated as a webizen device; yet, the use of those devices is performed via networking in anycase.

The [[HostServiceRequirements]] also have related considerations; yet, it is thought that the architecture of these systems, is different to the achitecture of the software for 'clients'.

More work on this topic is needed in-order to later provide an overview of the solution.