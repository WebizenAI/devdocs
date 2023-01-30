Beaker Browser (Fork)
======

## [Web Civics: Beaker Browser FORK.](https://github.com/WebCivics/beaker-dev)

Beaker was an experimental peer-to-peer Web browser. It added new APIs for building hostless applications while remaining compatible with the rest of the Web. [Visit the website.](https://beakerbrowser.com/)

I've forked it with a view to investigating how it may be usefully employed (particularly for systems that require various node libraries, etc); the first objective is to investigate how to integrate RDF and Linked Data into it. The goal is to make it possible to create applications that use Linked Data and can be made to work on local machines; and that the app might provide a host environment for producing other tools needed to advance the works on developing [[Webizen]] ecosystem. As such, This project is part of the Research and Development Activities to support the production of the [Webizen Ecosystem](https://devdocs.webizen.org/).

The notes below are mostly a copy/paste from the modified readme.md file made for init on the project fork.  there may be contextual issues, that i'll look to address later.

## Project Background

This project is part of an effort to create a different sort of information management ecosystem. The goal is to create a system that is more open, more secure, and more private than the current ecosystem. The project is called Webizen and is being developed by [Timothy Holborn](https://www.linkedin.com/in/ubiquitous/) in connection to the project related names of [Webizen](https://webizen.org/) and [Web Civics](https://webcivics.org/).  The broader project objective is to build computing infrastructure required to support a broader objective that is called the [[PeaceInfrastructureProject]] that is thought to require a new sort of computing infrastructure to address various social problems that are thought to be caused by the design implications of current computing infrastructure. 

## Project Objectives
The main project objective is about trying to figure out how to create a relatively basic solution for collaborative development of the first Webizen Environment. 

There are a number of values that are baked into the fundamental concept of Webizen.  To support these values an array of foundational software needs to be produced that can then be employed to function in a particular way to support those values. Part of how this is achieved is through the use of RDF/RDFS Ontologies and Related technologies. To produce Webizen software that is able to function in a particular way, it is necessary to produce ontologies that are defined in a particular way. This requires an App. In the process of exploring options to produce this app, it was decided to fork the Beaker Browser project and experiment with the idea of integrate RDF and Linked Data into the Beaker Browser as a means to achieve the goal of producing some tooling that can be used to support the development of the webizen technology stack.

### How Web Civics / Webizen is different to [Beaker Browser / DAT Ecosystem](https://dat-ecosystem.org/) 

1. The webizen ecosystem employs both HTTP(s) and RDF (semweb) based systems, alongside a different sort of authentication methodology.  
2. The webizen ecosystem is not focused on support for only one of the broad array of [[Non-HTTP(s)Protocols]].  
3. The Webizen ecosystem is producing a networking topology, that allows it to do stuff that beaker wasn't technically able to achieve - indeed, the same could be said about a range of the functionality provided by it, etc. 

### The good things about the BeakerBrowser works.

The best thing really, is that it has an environment baked into it for storing information in a p2p network; which may be usefully employed for apps and POC works generally...


Whilst there is a difference between [[TheWebizenAgent]] and related functionality, the means to advance works on a specified browser; would provide integration opportunities that may well significantly improve the opportunity landscale, sooner.


## Project Status
Day 1. The project has been forked from the original Beaker Browser project. Do not use this project for anything useful other than testing and development.  I have just started to investigate how to integrate RDF and Linked Data into the Beaker Browser. 

