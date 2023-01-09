**Containerization** is [operating system-level virtualization](https://en.wikipedia.org/wiki/Operating_system-level_virtualization "Operating system-level virtualization") or application-level virtualization over multiple network resources so that software applications can run in isolated user spaces called _containers_ in any [cloud](https://en.wikipedia.org/wiki/Cloud_computing "Cloud computing") or non-cloud environment, regardless of type or vendor.[reference 1](https://en.wikipedia.org/wiki/Containerization_(computing)#cite_note-1) 
Source: [wikipedia](https://en.wikipedia.org/wiki/Containerization_(computing))

With particular regard to [[Webizen3.0]] and related desktop app environments; noting the [[NetworkingConsiderations]],

The implication becomes a routing method that provides public access to software running on the host device; which may in-turn expose the device in unwanted ways to external attacks.  As such, a methodology needs to be figured out to guard against the unwanted issues that this may lead to, if the issue isn't properly considered. 

I have created a [GitHub Issues](https://github.com/WebizenAI/devdocs/issues/9) on the topic to figure out how to address it as part of the underlying design requirements.  It is believed that the  [[AuthenticationFabric]] is likely to play a fairly significant role in defining the solution to this problem.  In-turn also, this is going to have various implications for the [[WebizenTechStack]] development requirements overall. 

Another part of the considerations also relate to how the solution impacts the availability of resources on a computer that is not solely dedicated to operating the [[WebizenTechStack]].  This is expected to be a continual requirement for an array of devices; although noting, part of the [[Webizen3.5]] works (ie: [[WebizenPro]] and [[WebizenAiOS-Platform]] ) do result in the development of solutions that are specifically designed to be operated as a webizen device; yet, the use of those devices is performed via networking in anycase.

The [[HostServiceRequirements]] also have related considerations; yet, it is thought that the architecture of these systems, is different to the achitecture of the software for 'clients'.

More work on this topic is needed in-order to later provide an overview of the solution.